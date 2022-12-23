import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export const Navbar = () => {
  const links = [
    {
      title: "Posts",
      href: "/posts",
    },
    {
      title: "About Me",
      href: "/about-me",
    },
  ];

  const [isOpened, setIsOpened] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box>
            {links.map((link) => {
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                key={link.title}
              >
                <Link href={link.href}>{link.title}</Link>
              </Typography>;
            })}
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
