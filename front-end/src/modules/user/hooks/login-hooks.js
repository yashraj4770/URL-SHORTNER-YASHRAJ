import { useForm } from "react-hook-form";
import {zodResolver}  from '@hookform/resolvers/zod';
import { useNavigate } from "react-router-dom";

import{ loginApiCall} from '../api/user-api';
import { loginSchema } from "../validation/login-schema";
export const useLogin = () => {
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver : zodResolver(loginSchema),
        defaultValues:{
            email:'yash@example.com',
            password:'',
            
        }
    });
    const doSubmit = async (formData) => {
        console.log('Login Form Submit SIR',formData);
        try{
        const response = await loginApiCall(formData);
        console.log('response is ',response);
        if(response.data.id){
            localStorage.email=response.data.email;
            alert("Login Successfully SIR");
            navigate('/dashboard');
        }else{
            alert(response.data.message);
        }}
        catch(err){
             alert("Login Fails...");
             console.log('Error',err);
            
    }}
    return {doSubmit,register,handleSubmit,errors};
}