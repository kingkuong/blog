import React from "react";
import { Navbar, Footer } from ".";

export const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
