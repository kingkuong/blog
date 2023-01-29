import React from "react";
import Link from "next/link";

import MenuIcon from "@mui/icons-material/Menu";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const Navbar = () => {
  const pages = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Posts",
      href: "/posts",
    },
    {
      title: "About Me",
      href: "/about-me",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                sx={{
                  my: 2,
                  display: "block",
                }}
              >
                <Link href={page.href} passHref>
                  <Typography
                    variant="subtitle1"
                    color="white"
                    sx={{ textDecoration: "none" }}
                  >
                    {page.title.toUpperCase()}
                  </Typography>
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
