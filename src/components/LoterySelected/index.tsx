import React from "react";
import { IContests } from "../../main/interfaces";
import styles from "./LoterySelected.module.css";

interface IProps {
  contests: IContests[] | null;
  selectedContest: number;
  nameSelectedContest: string;
  lotteryDate: string;
}

const LoterySelected: React.FC<IProps> = ({
  contests,
  selectedContest,
  nameSelectedContest,
  lotteryDate
}) => {     

  return contests && (
    <>
      <div className={styles['lotteries-name']}>
        <figure>
          <img width={60} src={require("../../img/mega-sena.png")} alt="loterias" />
        </figure>
        <p>{ nameSelectedContest }</p>
      </div>

      <div className={styles['contest-number']}>
        <span>concurso nº {contests[selectedContest]?.concursoId}</span>
        <span> { lotteryDate } </span>
      </div>
    </>
  )
}

export default LoterySelected;