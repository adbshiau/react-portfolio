import { Grid, Container } from "semantic-ui-react";
import "./About.css";

export default function About() {
  return (
    <Grid>
      <Grid.Row className="about">
        <h1>About</h1>
        <Container fluid>
          <p>
            I am a curiosity driven full stack developer with a background in
            customer service, education, account management, and passion for
            design. I love the entire process of turning a vision into a
            tangible, usable reality that leads to delightful user experiences.
            Currently, I'm hoping to contribute to an exciting industry where I
            can showcase my skills and work collaboratively to deliver
            high-quality, interactive experiences directly to end-users.
          </p>
        </Container>
      </Grid.Row>
    </Grid>
  );
}
