import React, { useEffect, useState } from 'react';
import styles from './Lotteries.module.css';
import SelectLottery from "../components/SelectLottery";
import LoterySelected from "../components/LoterySelected";
import NumbersResult from "../components/Results";

import { useFetch } from "../components/hooks/useFetch";
import { IContests, lotteries } from './interfaces';

const Lotteries: React.FC = () => {

  const { data: lotteries, isFetching: loadingLotteries } = useFetch<lotteries[] | null>("https://brainn-api-loterias.herokuapp.com/api/v1/loterias");
  const {data: contests} = useFetch<IContests[] | null>("https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos");
  
  const [selectedContest, setSelectedContest] = useState<number>(0);
  const [nameSelectedContest, setNameSelectedContest] = useState<string>("");
  const [contest, setContest] = useState<IContests | null>(null);

  useEffect(() => {
    console.log("PAI", nameSelectedContest.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-'));
  }, [nameSelectedContest]);

  useEffect(() => {
    if(lotteries) setNameSelectedContest(lotteries[0].nome.replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-'));
  }, [lotteries]);

  useEffect(() => {
    if(contests) {
      console.log("pai", contests[selectedContest])
      setContest(contests[selectedContest])
    }
  }, [contests, selectedContest]);

  return (
    <div className={`${styles.app} ${styles[nameSelectedContest.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')]}`}>

      <div className={styles['functional-content']}>
        <SelectLottery lotteries={lotteries} isFetching={loadingLotteries} selectedContest={selectedContest} setSelectedContest={setSelectedContest} setNameSelectedContest={setNameSelectedContest} />
        <LoterySelected contests={contests} selectedContest={selectedContest} nameSelectedContest={nameSelectedContest} lotteries={lotteries} />
      </div>

      <div className={styles['result-content']}>
        <NumbersResult contest={contest}  />
      </div>
      
    </div>
  );
}

export default Lotteries;
