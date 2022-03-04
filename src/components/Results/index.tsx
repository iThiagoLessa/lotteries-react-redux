import React, { useEffect, useState } from "react";
import styles from "./NumbersResult.module.css";

import { IContests, ILotteryResult } from "../../main/interfaces";
import { useFetch } from "../hooks/useFetch";

interface IProps {
  contest: IContests | null;
}

const NumbersResult: React.FC<IProps> = ({
  contest
}) => {
  
  const { data } = useFetch<ILotteryResult>(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${contest?.concursoId}`);
  const [numbers, setNumbers] = useState<string[]>([]);
  console.log("contestId", contest?.concursoId);

  useEffect(() => {
    if(data) setNumbers(data?.numeros);
  }, [data]);

  return(
    <div className={styles.results}>
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
  )
}

export default NumbersResult;