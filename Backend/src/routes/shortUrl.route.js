import express from 'express';
const router = express.Router();
import {createShortUrl} from '../controller/shortUrl.controller.js';


router.post("/",createShortUrl);
router.post("/",customCreateShortUrl);

export default router;