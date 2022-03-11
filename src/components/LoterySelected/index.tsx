import React, { useEffect, useState } from "react";
import { IContests, lotteries } from "../../main/interfaces";
import styles from "./LoterySelected.module.css";

interface IProps {
  contests: IContests[] | null;
  selectedContest: number;
  nameSelectedContest: string;
  lotteries: lotteries[] | null;
  lotteryDate: string;
}

const LoterySelected: React.FC<IProps> = ({
  contests,
  selectedContest,
  nameSelectedContest,
  lotteries,
  lotteryDate
}) => {
  
  const [contestSelected, setContestSelected] = useState<number>(selectedContest);
  const [contest, setContest] = useState<IContests>();
  const [nameContest, setNameContest]= useState<string>("");
  
  useEffect(() => {
   if(contests) setContest(contests[contestSelected]);
   if(lotteries) setNameContest(lotteries[0]?.nome);
  }, [contests, contestSelected, lotteries]);
     
  useEffect(() => {
    setContestSelected(selectedContest);
    setNameContest(nameSelectedContest);
  }, [selectedContest, nameSelectedContest]);


  return contests && (
    <>
      <div className={styles['lotteries-name']}>
        <figure>
          <img width={60} src={require("../../img/mega-sena.png")} alt="loterias" />
        </figure>
        <p>{nameContest}</p>
      </div>

      <div className={styles['contest-number']}>
        <span>concurso nº {contest?.concursoId}</span>
        <span>{lotteryDate}</span>
      </div>
    </>
  )
}

export default LoterySelected;