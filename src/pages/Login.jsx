<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./Login.module.css";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("ali@example.com");
  const [password, setPassword] = useState("12345");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true }); // replace wadakat  ka la  app login bum  dwtala login/cities/ ka backm dagrt bgaretawa pysh app ka la chwe bwa
      // gar tru bwa yaksa har dahatawa shwyne xoy wata gar law shwyna garanawam da grtbwaya labar away user logine krdwa la shwyne xoy damawa
    },
    [isAuthenticated, navigate]
  );
=======
import { useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";

export default function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
>>>>>>> 8db943725b5ac4d337ba1f73294ee385d05f8df1

  return (
    <main className={styles.login}>
      <PageNav />
<<<<<<< HEAD

      <form className={styles.form} onSubmit={handleSubmit}>
=======
      <form className={styles.form}>
>>>>>>> 8db943725b5ac4d337ba1f73294ee385d05f8df1
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
<<<<<<< HEAD
          <Button type="primary">Login</Button>
=======
          <button>Login</button>
>>>>>>> 8db943725b5ac4d337ba1f73294ee385d05f8df1
        </div>
      </form>
    </main>
  );
}
