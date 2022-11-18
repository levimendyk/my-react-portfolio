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
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <div class="my-4">
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
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
