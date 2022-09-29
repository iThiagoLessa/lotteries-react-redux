import React, { useEffect, useState } from "react";
import styles from "./NumbersResult.module.css";

import { IContests, ILotteryResult } from "../../main/interfaces";
import { useFetch } from "../hooks/useFetch";
import { useDispatch } from "react-redux"; 
import { setLotteryDate } from "../../store/Reducers";

interface IProps {
  contest: IContests | null;
}

const NumbersResult: React.FC<IProps> = ({
  contest
}) => {
  
  const { data } =  useFetch<ILotteryResult>(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${contest?.concursoId}`);
  const [numbers, setNumbers] = useState<string[]>([]);
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (data) {
      const date = new Date(data.data);
      dispatch(setLotteryDate(date.toLocaleDateString()));
      setNumbers(data?.numeros);
    } 
  }, [data, dispatch]);

  return(
    <div className={styles.resultsContainer}>
      <div className={styles.resultsInfos}>
        <div>
          {numbers.map((number, index) => {
            return(
              <div key={index} className={styles.number}>
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