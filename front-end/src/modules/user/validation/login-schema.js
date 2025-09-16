import {z} from 'zod';
// z.object({key:value})
export const loginSchema = z.object({
    email:z.string().min(1,'Email is required').email('Invalid email Format'),
    password:z.string().min(8,'Password must be >= 8 ').max(25,'Password must be <= 25 ')
    

})