
import React, { useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Image from "../assets/tech.jpg";

export default function SharpRegisterDesign() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    // Validate required fields
    if (!firstName.trim()) {
      setError("First name is required.");
      return;
    }

    if (!lastName.trim()) {
      setError("Last name is required.");
      return;
    }

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!password) {
      setError("Password is required.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        password,
        phoneNumber: phoneNumber.trim(),
        address: address.trim(),
      };

      console.log("Registration payload:", payload);

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/register`,
        payload
      );

      console.log("Registration response:", response.data);

      setMessage("Account created successfully!");

      // Clear form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setAddress("");

      // Return to homepage after successful registration
      navigate("/");
    } catch (err) {
      console.error(
        "Registration failed:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.message ||
          "Unable to create your account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container component="main" sx={{ minHeight: "100vh" }}>
      <CssBaseline />

      {/* LEFT SIDE */}
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
          sx={{
            fontWeight: 900,
            letterSpacing: "-0.05em",
            mb: 1,
          }}
        >
          SERVEHUB.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.05em",
          }}
        >
          FIND TRUSTED LOCAL EXPERTS.
        </Typography>
      </Grid>

      {/* RIGHT SIDE */}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 4, md: 6 },
          py: 5,
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ maxWidth: 400, width: "100%", mx: "auto" }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 1,
              letterSpacing: "-0.03em",
            }}
          >
            CREATE ACCOUNT
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Join ServeHub and connect with local experts.
          </Typography>

          {/* Success message */}
          {message && (
            <Typography
              role="status"
              variant="body2"
              sx={{ mb: 2, color: "success.main" }}
            >
              {message}
            </Typography>
          )}

          {/* Error message */}
          {error && (
            <Typography
              role="alert"
              variant="body2"
              sx={{ mb: 2, color: "error.main" }}
            >
              {error}
            </Typography>
          )}

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              label="FIRST NAME"
              name="firstName"
              autoComplete="given-name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              InputProps={{ sx: { borderRadius: 0 } }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="LAST NAME"
              name="lastName"
              autoComplete="family-name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              InputProps={{ sx: { borderRadius: 0 } }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              label="EMAIL ADDRESS"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              InputProps={{ sx: { borderRadius: 0 } }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              type="password"
              label="PASSWORD"
              name="password"
              autoComplete="new-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              InputProps={{ sx: { borderRadius: 0 } }}
            />

            <TextField
              margin="normal"
              fullWidth
              type="tel"
              label="PHONE NUMBER"
              name="phoneNumber"
              autoComplete="tel"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              InputProps={{ sx: { borderRadius: 0 } }}
            />

            <TextField
              margin="normal"
              fullWidth
              label="ADDRESS"
              name="address"
              autoComplete="street-address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              InputProps={{ sx: { borderRadius: 0 } }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                mt: 3,
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
              {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
            </Button>

            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              sx={{ fontSize: "0.75rem" }}
            >
              ALREADY HAVE AN ACCOUNT?{" "}
              <Link
                to="/login"
                style={{
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                SIGN IN
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
