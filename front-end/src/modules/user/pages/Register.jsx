import { Box, Button, Heading, Text, TextField, Card } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { useRegister } from "../hooks/register-hook";

const Register = () => {
  const { doSubmit, register, handleSubmit, errors } = useRegister();

  return (
    <>
      {/* Fixed Header */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "60px", // only this much space
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.6)",
          color: "white",
          fontSize: "28px",
          fontWeight: "bold",
          letterSpacing: "2px",
          textShadow: "0px 3px 6px rgba(0,0,0,0.7)",
          zIndex: 1000, // stays above background, but only in its bar
          pointerEvents: "none", // ⬅️ important: disables blocking clicks below!
        }}
      >
        YASH RAJ
      </div>

      {/* Main Section with Background */}
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
          style={{ width: "100%", maxWidth: "430px", marginTop: "80px" }}
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
              Create Your Account
            </Heading>

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
                  placeholder="Enter password"
                  style={{ marginTop: "6px" }}
                />
                {errors.password && (
                  <Text color="red" size="2">
                    {errors.password.message}
                  </Text>
                )}
              </Box>

              {/* Name */}
              <Box mb="4">
                <Text as="label" size="3" weight="medium">
                  Full Name
                </Text>
                <TextField.Root
                  {...register("name")}
                  type="text"
                  placeholder="Your name"
                  style={{ marginTop: "6px" }}
                />
                {errors.name && (
                  <Text color="red" size="2">
                    {errors.name.message}
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
                    background: "linear-gradient(90deg, #1e3c72, #2a5298)",
                    color: "white",
                    fontWeight: "bold",
                    padding: "8px 16px",
                    borderRadius: "10px",
                  }}
                >
                  Register
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
              Already have an account?{" "}
              <a
                href="/login"
                style={{
                  color: "#1e3c72",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Login here
              </a>
            </Text>
          </Card>
        </motion.div>
      </Box>
    </>
  );
};

export default Register;
