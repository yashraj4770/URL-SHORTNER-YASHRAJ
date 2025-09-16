import { Box, Button, Heading, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
        padding: "20px",
      }}
    >
      {/* Hero Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Heading
          size="7"
          style={{
            fontWeight: "bold",
            background: "linear-gradient(90deg, #1e3c72, #2a5298)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "16px",
          }}
        >
          URL Shortener App
        </Heading>
        <Text size="4" style={{ marginBottom: "40px", color: "rgba(255,255,255,0.9)" }}>
          By Yash Raj
        </Text>
      </motion.div>

      {/* Centered Register & Login Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ display: "flex", gap: "20px" }}
      >
        <Button
          size="4"
          style={{
            background: "linear-gradient(90deg, #ff512f, #dd2476)",
            color: "white",
            fontWeight: "bold",
            padding: "12px 28px",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            cursor: "pointer",
          }}
          onClick={() => navigate("/register")}
        >
          Register
        </Button>

        <Button
          size="4"
          variant="soft"
          style={{
            background: "rgba(255,255,255,0.2)",
            color: "white",
            fontWeight: "bold",
            padding: "12px 28px",
            borderRadius: "12px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
            cursor: "pointer",
          }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </motion.div>
    </Box>
  );
};
