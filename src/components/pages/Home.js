import MovingText from "react-moving-text";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <div class="jumbotron">
        <h1 class="display-4">
          <MovingText
            type="unfold"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            Hi friend....I'm Levi!
          </MovingText>
        </h1>
        <p class="lead">
          If you came her to learn more about me, well you came to the right spot. This site details my professional information as a programmer.
        </p>
        <div class="my-4">
          <p>
            Please contact me with any questions.
          </p>
        </div>
      </div>

      <h2>Quick Overview</h2>
      <div className="overview-div">
        <div id="current-status">
          <h4>Current Status:</h4>
          <p>
            Student at the University of Denver's Full-Stack Web Development
            program expected to graduate on December 6th, 2022 that has been
            exposed to a variety of programming languages such as HTML/CSS,
            JavaScript, React, etc.{" "}
          </p>
        </div>
        <div id="future-goals">
          <h4>Future Goals:</h4>
          <p>
            After graduating, I would like to find a position in Web Development
            that would allow me to expand my knowledge of Full-Stack while also
            dive deeper into React as my passion for this program increases.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
