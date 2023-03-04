import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section className={styles.section} id="about">
      <h1 style={{ textAlign: "center", color: "#fff", fontSize: "3rem" }}>
        About Sanjay’s Catering
      </h1>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img className={styles.img} src="/about.jpg" alt="" />
        </div>
        <div className={styles.desc}>
          <h3 className={styles.h3}>
            Sanjay Catering offers catering services for your personal and
            business needs.{" "}
          </h3>
          <p className={styles.p}>
            Our Catering services range from the most elegant affair to a
            business luncheon or a picnic at the park. From an array of food
            items to choose from, Sanjay Catering bring to you the best from all
            suites your event,tastes adn pocket even. So while you leave your
            food worries to us, we let you enjoy those special moments in all
            the glory.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
