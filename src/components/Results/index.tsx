import React from "react";
import styles from "./NumbersResult.module.css";

import { IContests } from "../../main/interfaces";

interface IProps {
  contest: IContests | null;
}

const NumbersResult: React.FC<IProps> = ({
  contest
}) => {

  console.log("contest", contest)

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