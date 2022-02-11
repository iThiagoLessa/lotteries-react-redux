import React from "react";
import styles from "./LoterySelected.module.css";

const LoterySelected: React.FC = () => {

  return (
    <>
      <div className={styles['lotteries-name']}>
        <figure>
          <img width={60} src={require("../../img/mega-sena.png")} alt="loterias" />
        </figure>
        <p>Mega-SENA</p>
      </div>

      <div className={styles['contest-number']}>
        <span>concurso</span>
      </div>
    </>
  )
}

export default LoterySelected;