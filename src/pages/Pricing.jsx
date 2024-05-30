// Uses the same styles as Product
import { Outlet } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <Outlet />

          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Explore extraordinary deals and competitive prices with
            KurdWanderer! Our commitment to providing exceptional value ensures
            you can embark on unforgettable journeys without breaking the bank.
            Discover the world with confidence, knowing you are getting the best
            prices available.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
