// Uses the same styles as Product
<<<<<<< HEAD
=======
import { Outlet } from "react-router-dom";
>>>>>>> 8db943725b5ac4d337ba1f73294ee385d05f8df1
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
<<<<<<< HEAD
=======
          <Outlet />

>>>>>>> 8db943725b5ac4d337ba1f73294ee385d05f8df1
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
<<<<<<< HEAD
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
=======
            Explore extraordinary deals and competitive prices with
            KurdWanderer! Our commitment to providing exceptional value ensures
            you can embark on unforgettable journeys without breaking the bank.
            Discover the world with confidence, knowing you are getting the best
            prices available.
>>>>>>> 8db943725b5ac4d337ba1f73294ee385d05f8df1
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
