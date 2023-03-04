import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        margin: "1rem",
        backgroundImage: 'url("/about.jpg")',
        backgroundSize: "cover",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "whitesmoke",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        CONTACT US
      </h1>
      <form className={styles.form}>
        <label className={styles.label} for="name">
          Name:
        </label>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          required
        />

        <label className={styles.label} for="email">
          Email:
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          required
        />

        <label className={styles.label} for="phone">
          Phone:
        </label>
        <input
          className={styles.input}
          type="tel"
          id="phone"
          name="phone"
          required
        />

        <label className={styles.label} for="event-type">
          Type of Event:
        </label>
        <select
          className={styles.select}
          id="event-type"
          name="event-type"
          required
        >
          <option className={styles.select_option} value="">
            Select an option
          </option>
          <option className={styles.select_option} value="Wedding">
            Wedding
          </option>
          <option className={styles.select_option} value="Corporate Event">
            Corporate Event
          </option>
          <option className={styles.select_option} value="Private Party">
            Private Party
          </option>
          <option className={styles.select_option} value="Other">
            Other
          </option>
        </select>

        <label className={styles.label} for="event-date">
          Event Date:
        </label>
        <input
          className={styles.input}
          type="date"
          id="event-date"
          name="event-date"
          required
        />

        <label className={styles.label} for="event-location">
          Event Location:
        </label>
        <input type="text" id="event-location" name="event-location" required />

        <label className={styles.label} for="guest-count">
          Guest Count:
        </label>
        <input
          className={styles.input}
          type="number"
          id="guest-count"
          name="guest-count"
          required
        />

        <label className={styles.label} for="message">
          Message:
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          required
        ></textarea>

        <input className={styles.input} type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Contact;
