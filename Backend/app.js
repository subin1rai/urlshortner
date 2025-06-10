import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import https from "https";
import http from "http";
dotenv.config("./.env");
import connectDB from "./src/config/monogos.config.js";
import shortUrl from "./src/routes/shortUrl.route.js";
import auth_routes from "./src/routes/auth.route.js";
import user_route from "./src/routes/user.route.js";
import { redirectFromShortUrl } from "./src/controller/shortUrl.controller.js";
import { errrorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";
import { attachedUser } from "./src/utils/attachedUser.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

// Add proper MIME type for JavaScript modules
app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (path.endsWith('.mjs')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// CORS
app.use(cors({
  origin: "*",
  credentials: true,
}));

app.use(cookieParser());
app.use(attachedUser);

// Routes
app.use("/api/create", shortUrl);
app.use("/api/user", user_route);
app.use("/api/auth", auth_routes);
app.get("/:id", redirectFromShortUrl);
app.use(errrorHandler);

// HTTPS Configuration
const PORT = process.env.PORT || 3000;
const HTTPS_PORT = process.env.HTTPS_PORT || 3443;

// Check if SSL certificates exist
const SSL_KEY_PATH = "/etc/ssl/private/selfsigned.key";
const SSL_CERT_PATH = "/etc/ssl/certs/selfsigned.crt";

let useHTTPS = false;

try {
  // Check if SSL files exist
  if (fs.existsSync(SSL_KEY_PATH) && fs.existsSync(SSL_CERT_PATH)) {
    useHTTPS = true;
    console.log("SSL certificates found. Starting HTTPS server...");
  } else {
    console.log("SSL certificates not found. Starting HTTP server only...");
  }
} catch (error) {
  console.log("Error checking SSL certificates:", error.message);
}

if (useHTTPS) {
  try {
    // Load SSL certificate and key
    const privateKey = fs.readFileSync(SSL_KEY_PATH, "utf8");
    const certificate = fs.readFileSync(SSL_CERT_PATH, "utf8");
    const credentials = { key: privateKey, cert: certificate };

    // Create HTTPS server
    const httpsServer = https.createServer(credentials, app);
    
    httpsServer.listen(HTTPS_PORT, () => {
      connectDB();
      console.log(`🔒 HTTPS Server is running on port ${HTTPS_PORT}`);
      console.log(`🔒 Access your app at: https://13.60.250.171:${HTTPS_PORT}`);
    });

    // Optional: Also run HTTP server that redirects to HTTPS
    const httpApp = express();
    httpApp.use((req, res) => {
      res.redirect(`https://${req.headers.host.replace(PORT, HTTPS_PORT)}${req.url}`);
    });
    
    httpApp.listen(PORT, () => {
      console.log(`🔄 HTTP Server running on port ${PORT} (redirects to HTTPS)`);
    });

  } catch (error) {
    console.error("Error starting HTTPS server:", error.message);
    console.log("Falling back to HTTP server...");
    
    // Fallback to HTTP
    app.listen(PORT, () => {
      connectDB();
      console.log(`🌐 HTTP Server is running on port ${PORT}`);
    });
  }
} else {
  // Start HTTP server only
  app.listen(PORT, () => {
    connectDB();
    console.log(`🌐 HTTP Server is running on port ${PORT}`);
    console.log(`🌐 Access your app at: http://13.60.250.171:${PORT}`);
  });
}