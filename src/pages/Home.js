import React from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.h1}>
            Best Catering Services Provider in Bokaro
          </h1>
          <button className={styles.button}>Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
