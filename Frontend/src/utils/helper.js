import { redirect } from "@tanstack/react-router";
import { getCurrentUser } from "../api/user.api";
import { login } from "../store/slice/authSlice";


export const checkAuth = async ({ context }) => {
  try {
    const { store, queryClient } = context;
    
    // Add debug logging
    
    // Use queryClient to fetch current user
    const userData = await queryClient.ensureQueryData({
      queryKey: ["currentUser"],
      queryFn: getCurrentUser,
      retry: false
    });
    
    
    if (userData && userData.user) {
      // Dispatch the setUser action to update Redux store
      store.dispatch(login(userData.user));
      return true;
    }
    
    return false;
  } catch (error) {
    console.error("Authentication check failed:", error);
    return redirect({ to: "/auth" });
  }
};