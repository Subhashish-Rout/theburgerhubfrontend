import React from "react";
import { AiFillInstagram, AiFillGithub,AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>The Burger Hub</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @theburgerhub</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.linkedin.com/in/subhashis-rout-03b914151/">
          <AiFillLinkedin/>
        </a>
        <a href="https://leetcode.com/routsubhashish2/">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/Subhashish-Rout">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;