import React from "react";
import styles from "./NumbersResult.module.css";

const NumbersResult: React.FC = () => {

  return(
    <div className={styles.results}>

      <div>
        <div className={styles.number}>
          <span>06</span>
        </div>
        
        <div className={styles.number}>
          <span>07</span>
        </div>
      </div>

      <div>
        <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</p>
      </div>

    </div>
  )
}

export default NumbersResult;