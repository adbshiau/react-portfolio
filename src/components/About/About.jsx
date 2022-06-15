import { Grid, Container } from "semantic-ui-react";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div>
        <h1 id="label">About</h1>
      </div>
      <div className="photo-bio">
        <div className>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/freelance-job-2578974-2147144.png" />
        </div>
        <p id="bio">
          I am a full stack engineer with a background in customer service,
          education, account management, and passion for design. I love the
          entire process of turning a vision into a tangible, usable reality.
          Currently, I'm hoping to contribute to an exciting industry where I
          can showcase my skills and work collaboratively to deliver
          high-quality, interactive experiences directly to end-users.
        </p>
      </div>
      <div>
        <h1 id="label">Skills</h1>
      </div>
    </section>
  );
}
