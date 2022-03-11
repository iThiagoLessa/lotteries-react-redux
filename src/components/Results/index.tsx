import React, {Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./NumbersResult.module.css";

import { IContests, ILotteryResult } from "../../main/interfaces";
import { useFetch } from "../hooks/useFetch";

interface IProps {
  contest: IContests | null;
  setLotteryDate: Dispatch<SetStateAction<string>>;
}

const NumbersResult: React.FC<IProps> = ({
  contest,
  setLotteryDate
}) => {
  
  const { data } = useFetch<ILotteryResult>(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${contest?.concursoId}`);
  const [numbers, setNumbers] = useState<string[]>([]);
  

  useEffect(() => {
    if(data) {
      const date = new Date(data.data);

      setLotteryDate(date.toLocaleDateString())
      setNumbers(data?.numeros);
    } 
  }, [data, setLotteryDate]);

  return(
    <div className={styles.resultsContainer}>
      <div className={styles.resultsInfos}>
        <div>
          {numbers.map(number => {
            return(
              <div className={styles.number}>
                <span>{number}</span>
              </div>
            )
          })}
        </div>
        <div>
          <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</p>
        </div>
      </div>
      <div className={styles.resultsBackground}></div>
    </div>
  )
}

export default NumbersResult;