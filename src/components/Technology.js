import React from "react";
import styles from "@/components/Header/Button/style.module.scss";
import { motion } from "framer-motion";
export default function () {
  return (
    <div className={styles.buttonn}>
      <div className={styles.slider}>
        <div className={styles.el}>
          <PerspectiveText label="technology" />
        </div>
      </div>
    </div>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
