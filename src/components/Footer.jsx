import React from 'react'
import { Facebook, Twitter,Instagram,LinkedIn,GitHub } from "@mui/icons-material/";

export const Footer = () => {
  return (
    <div className="footer">
      <Facebook />
      <Twitter />
      <Instagram />
      <LinkedIn />
      <GitHub />
      <h4>
        © 2022 Copyright : <a href="">Design By Devendra yadav</a>
      </h4>
    </div>
  );
}
