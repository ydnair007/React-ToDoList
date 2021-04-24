import { Container } from "@material-ui/core";
import React, { useEffect } from "react";

export default function AboutMe() {
  useEffect(() => {
    document.title = "To-Do | About Me";
  }, []);
  return (
    <div style={{ paddingTop: "1rem" }}>
      <h1
        style={{
          fontWeight: 800,
          color: "#49a6e9",
        }}
      >
        About Me
      </h1>
      <br />
      <h3>Name : Yadukrishnan Nair</h3>
      <p>Build with ❤️</p>
      <br />
      <Container style={{ textAlign: "left" }}>
        <h4>
          A BSc-IT Graduate from Mumbai University, who loves cooking, anime,
          coding. building shell scripts and python bots so that he can act
          lazy.
        </h4>
        <br />
        <h4>his Handels :</h4>
        <section className="m-2">
          <a href="https://github.com/ydnair007">Github 🎨 </a>
          <a href="https://www.instagram.com/ydnair007/">Insta 🤡 </a>
          <a href="https://github.com/ydnair007">Github 🎨</a>
        </section>
      </Container>
    </div>
  );
}
