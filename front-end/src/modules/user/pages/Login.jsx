


import { Box,
    Button,
    Heading,
    Text,
    TextField 
    } from "@radix-ui/themes";


import { useLogin } from "../hooks/login-hooks";


const Login = () => {
    const {doSubmit,register,handleSubmit,errors} = useLogin();

    return (
    <Box  width="400px"  mx = "auto" mt="6" height="64px">
        <Heading align="center">Login</Heading>
        <form onSubmit = {handleSubmit(doSubmit)}>
            <Box>
                <Text as ="label" size="3" weight="medium"> 
                    Email

                </Text>
                <TextField.Root {...register("email")} type="email" placeholder="Type Email here" />
                {errors.email && <Text color = 'red'>{errors.email.message}</Text>}
            </Box>
            <Box>
                <Text as ="label" size="3" weight="medium"> 
                    Password

                </Text>
                <TextField.Root  {...register("password")} type="password" placeholder="Type Password here" />
            {errors.password && <Text color = 'red'>{errors.password.message}</Text>}
            </Box>
            
            <flex gap="3">
            
                <Button type="submit" size="3" style={{margin: 3 }}>
                    Login
                    </Button>
                
                <Button variant="soft" type="button" size="3" style={{margin: 3 }}>
                    Reset
                    </Button>    
            
            </flex>
        </form>
    </Box>
        );
    };
export default Login;