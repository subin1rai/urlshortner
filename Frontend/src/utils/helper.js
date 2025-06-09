
import{ redirect} from "@tanstack/react-router";
import { me } from "../api/user.api";
import { login } from "../store/slice/authSlice";

export const checkAuth = async ({context})=>{
    try {
        const {store ,queryClient}= context.store;
        //tanstack query
        const user = await queryClient.ensureQueryData({
            queryKey:["currentUser"],
            queryFn:me,
            retry: false
        });
        store.dispatch(login(user));
        const auth = store.getState().auth;
        if(!auth.isAuthenticated) return false;
        return true;
    } catch (error) {

        redirect({
            to:"/"
        })
    }
       
} 