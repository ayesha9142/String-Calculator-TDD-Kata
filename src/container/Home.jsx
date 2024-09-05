import React, { useState } from "react";
import { add } from "../StringCalculator";

import styles from './HomePage.module.css'

const HomePage = () => {
  const [value, setValue] = useState("");
  const [dynamicResult, setDynamicResult] = useState("");
  const [error, setError] = useState("")
  const handleCalculate = () => {
    try {
        const result = add(value);
        setDynamicResult(result)
        setError("")
    } catch(err) {
        setError(err.message);
        setDynamicResult("");
    }
  }
  return (
    <div className={styles.container}>
      <h1>String Calculator TDD Kata</h1>
      <input
        type="text"
        placeholder="Enter numbers:"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleCalculate}>Submit</button>
      {dynamicResult && <div className={styles.result}>Result: {dynamicResult}</div>}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default HomePage;
