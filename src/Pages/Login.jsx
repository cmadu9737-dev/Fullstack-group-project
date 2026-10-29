
import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Image from "../assets/tech.jpg";

export default function SharpLoginDesign() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError(false);

    if (!email.trim() || !password) {
      setMessage("Please fill in all fields.");
      setError(true);
      return;
    }

    setLoading(true);

    try {
      const payload = {
        email: email.trim(),
        password,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
        payload
      );

      // Save user data only when Remember Me is checked.
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(response.data));
      } else {
        sessionStorage.setItem("user", JSON.stringify(response.data));
      }

      setMessage("Login successful! Welcome to ServeHub.");
      setEmail("");
      setPassword("");

      navigate("/");
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);

      setMessage(
        err.response?.data?.message ||
          "Login failed. Please check your credentials and try again."
      );
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container component="main" sx={{ minHeight: "100vh" }}>
      <CssBaseline />

      {/* Left side: Branding and background image */}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "#111",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 6,
          color: "#fff",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: 900, letterSpacing: "-0.05em", mb: 1 }}
        >
          SERVEHUB.
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "rgba(255,255,255,0.8)", letterSpacing: "0.05em" }}
        >
          FIND TRUSTED LOCAL EXPERTS.
        </Typography>
      </Grid>

      {/* Right side: Login form */}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 3, sm: 5, md: 6 },
          py: 5,
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ maxWidth: 400, width: "100%", mx: "auto" }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 800, mb: 1, letterSpacing: "-0.03em" }}
          >
            SIGN IN
          </Typography>

          <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
            Don't have an account?{" "}
            <Link component={RouterLink} to="/register" underline="hover">
              Register here
            </Link>
          </Typography>

          {/* Success or error feedback */}
          {message && (
            <Typography
              role="status"
              variant="body2"
              sx={{
                mb: 2,
                color: error ? "error.main" : "success.main",
              }}
            >
              {message}
            </Typography>
          )}

          <Box component="form" onSubmit={handleLoginSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="EMAIL ADDRESS"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
              InputProps={{ sx: { borderRadius: 0 } }}
              InputLabelProps={{
                sx: { letterSpacing: "0.1em", fontSize: "0.75rem" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#000" },
                  "&:hover fieldset": {
                    borderColor: "#000",
                    borderWidth: "2px",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                    borderWidth: "2px",
                  },
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="PASSWORD"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{ sx: { borderRadius: 0 } }}
              InputLabelProps={{
                sx: { letterSpacing: "0.1em", fontSize: "0.75rem" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#000" },
                  "&:hover fieldset": {
                    borderColor: "#000",
                    borderWidth: "2px",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                    borderWidth: "2px",
                  },
                },
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                mt: 2,
                mb: 3,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    color="default"
                  />
                }
                label={
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "0.75rem", letterSpacing: "0.05em" }}
                  >
                    REMEMBER ME
                  </Typography>
                }
              />

              <Link
                component={RouterLink}
                to="/forgot-password"
                underline="hover"
                color="inherit"
                sx={{ fontSize: "0.75rem", letterSpacing: "0.05em" }}
              >
                FORGOT PASSWORD?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                mt: 1,
                mb: 3,
                py: 1.5,
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: 0,
                fontWeight: 700,
                letterSpacing: "0.1em",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#222",
                  boxShadow: "none",
                },
              }}
            >
              {loading ? "LOADING..." : "SIGN IN"}
            </Button>

            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              sx={{ fontSize: "0.75rem" }}
            >
              New to ServeHub?{" "}
              <Link
                component={RouterLink}
                to="/register"
                underline="hover"
                sx={{ fontWeight: 700, color: "inherit" }}
              >
                CREATE AN ACCOUNT
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
