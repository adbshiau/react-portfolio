import { Grid, Container, Button } from "semantic-ui-react";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="photo-bio">
        <div>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/freelance-job-2578974-2147144.png" />
        </div>
        <div id="bio">
        <h1 id="label">Welcome!</h1>
        <p>
          Hey! I'm Angelica. A full stack engineer with a background in customer
          service, education, account management, and passion for design. I love
          the entire process of turning a vision into a tangible, usable
          reality. Currently, I'm hoping to contribute to an exciting industry
          where I can showcase my skills and work collaboratively to deliver
          high-quality, interactive experiences directly to end-users.
        </p>
        <Button content="Learn More" color="red"/>
        </div>
      </div>
    </section>
  );
}
