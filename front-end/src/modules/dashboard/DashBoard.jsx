import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Flex, Box, Heading, Button, Separator, Text } from "@radix-ui/themes";

const linkStyle = (isActive) => ({
  padding: "12px 14px",
  borderRadius: 8,
  display: "block",
  fontWeight: "500",
  background: isActive
    ? "linear-gradient(90deg, #1e3c72, #2a5298)"
    : "rgba(255,255,255,0.1)",
  color: isActive ? "#fff" : "#e5e7eb",
  cursor: "pointer",
  transition: "all 0.3s ease",
});

export const DashBoard = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const active = pathname.includes("/dashboard/links") ? "links" : "shorten";

  return (
    <Flex
      direction="column"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
      }}
    >
      {/* Header */}
      <Box
        asChild
        style={{
          background: "linear-gradient(90deg, rgba(30,60,114,0.9), rgba(42,82,152,0.9))",
          backdropFilter: "blur(6px)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <header style={{ padding: "14px 20px" }}>
          <Flex align="center" justify="between">
            <Heading size="5" style={{ color: "white", fontWeight: "600" }}>
              🚀 URL Shortener by yash raj | Welcome <span style={{ color: "#ffd700" }}>{localStorage.email}</span>
            </Heading>
            <Button
              variant="solid"
              style={{
                background: "linear-gradient(90deg, #ef4444, #dc2626)",
                color: "white",
                borderRadius: "10px",
                fontWeight: "600",
              }}
              onClick={() => {
                localStorage.removeItem("email");
                navigate("/login", { replace: true });
              }}
            >
              Logout
            </Button>
          </Flex>
        </header>
      </Box>

      <Flex style={{ flex: 1 }}>
        {/* Sidebar */}
        <Box
          asChild
          style={{
            width: 250,
            padding: "20px",
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(10px)",
            borderRight: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <aside>
            <Flex direction="column" gap="3">
              <Text size="2" color="gray" style={{ fontWeight: "bold", marginBottom: "8px" }}>
                MENU
              </Text>
              <div
                style={linkStyle(active === "shorten")}
                onClick={() => navigate("/dashboard/shorten")}
              >
                ➕ Generate Short URL
              </div>
              <div
                style={linkStyle(active === "links")}
                onClick={() => navigate("/dashboard/links")}
              >
                🔗 My URLs
              </div>
            </Flex>
          </aside>
        </Box>

        {/* Vertical line */}
        <Separator
          orientation="vertical"
          size="4"
          style={{ height: "100%", borderColor: "rgba(255,255,255,0.2)" }}
        />

        {/* Main Content */}
        <Box
          asChild
          style={{
            flex: 1,
            padding: "24px",
            background: "rgba(255,255,255,0.85)",
            color: "#111",
            overflowY: "auto",
          }}
        >
          <main>
            <Outlet />
          </main>
        </Box>
      </Flex>
    </Flex>
  );
};
