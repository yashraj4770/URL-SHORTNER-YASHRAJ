


import { Box, Button, Heading, Text, TextField, Card } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { useLogin } from "../hooks/login-hooks";

const Login = () => {
  const { doSubmit, register, handleSubmit, errors } = useLogin();

  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1650&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: "100%", maxWidth: "430px" }}
      >
        <Card
          style={{
            padding: "36px",
            borderRadius: "22px",
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 12px 45px rgba(0,0,0,0.4)",
          }}
        >
          <Heading align="center" size="6" mb="4" color="indigo">
            Welcome Back 👋
          </Heading>
          <Text align="center" size="2" color="gray" mb="4">
            Login to continue to your account
          </Text>

          <form onSubmit={handleSubmit(doSubmit)}>
            {/* Email */}
            <Box mb="4">
              <Text as="label" size="3" weight="medium">
                Email
              </Text>
              <TextField.Root
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                style={{ marginTop: "6px" }}
              />
              {errors.email && (
                <Text color="red" size="2">
                  {errors.email.message}
                </Text>
              )}
            </Box>

            {/* Password */}
            <Box mb="4">
              <Text as="label" size="3" weight="medium">
                Password
              </Text>
              <TextField.Root
                {...register("password")}
                type="password"
                placeholder="Enter your password"
                style={{ marginTop: "6px" }}
              />
              {errors.password && (
                <Text color="red" size="2">
                  {errors.password.message}
                </Text>
              )}
            </Box>

            {/* Buttons */}
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "22px",
              }}
            >
              <Button
                type="submit"
                size="3"
                style={{
                  background: "linear-gradient(90deg, #2a5298, #1e3c72)",
                  color: "white",
                  fontWeight: "bold",
                  padding: "8px 16px",
                  borderRadius: "10px",
                }}
              >
                Login
              </Button>
              <Button
                variant="soft"
                type="reset"
                size="3"
                style={{
                  background: "#f3f4f6",
                  borderRadius: "10px",
                  fontWeight: "500",
                }}
              >
                Reset
              </Button>
            </Box>
          </form>

          {/* Footer */}
          <Text size="2" align="center" mt="5" color="gray">
            Don’t have an account?{" "}
            <a
              href="/register"
              style={{
                color: "#1e3c72",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Register here
            </a>
          </Text>
        </Card>
      </motion.div>
    </Box>
  );
};

export default Login;
