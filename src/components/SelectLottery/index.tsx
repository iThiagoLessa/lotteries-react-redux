import React from "react";
import styles from "./SelectLottery.module.css";

const SelectLottery: React.FC = () => {

  return (
    <header className={styles['select-lotery']}>
      <select>
        <option>Mega-sena</option>
      </select>
    </header>
  )
}

export default SelectLottery;