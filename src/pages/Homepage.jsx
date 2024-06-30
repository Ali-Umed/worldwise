<<<<<<< HEAD
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
=======
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
>>>>>>> 8db943725b5ac4d337ba1f73294ee385d05f8df1

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
<<<<<<< HEAD

=======
>>>>>>> 8db943725b5ac4d337ba1f73294ee385d05f8df1
      <section>
        <h1>
          You travel the world.
          <br />
          KurdWanderer keeps track of your adventures.
        </h1>
        <h2>
<<<<<<< HEAD
          KurdWanderer A world map that tracks your footsteps into every city
          you can think of. Never forget your wonderful experiences, and show
          your friends how you have wandered the world.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
=======
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/app" className="cta">
          start tracking now{" "}
>>>>>>> 8db943725b5ac4d337ba1f73294ee385d05f8df1
        </Link>
      </section>
    </main>
  );
}
