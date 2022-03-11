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
  const [lotteryDate, setLotteryDate] = useState<string>("");


  const normalizeString = (text: string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
  }

  useEffect(() => {
    if(lotteries) setNameSelectedContest(normalizeString(lotteries[0].nome));
  }, [lotteries]);

  useEffect(() => {
    if(contests) {
      setContest(contests[selectedContest])
    }
  }, [contests, selectedContest]);

  return (
    <div className={`${styles.app} ${styles[nameSelectedContest.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')]}`}>

      <div className={styles['functional-content']}>
        <SelectLottery lotteries={lotteries} isFetching={loadingLotteries} selectedContest={selectedContest} setSelectedContest={setSelectedContest} setNameSelectedContest={setNameSelectedContest} />
        <LoterySelected contests={contests} selectedContest={selectedContest} nameSelectedContest={nameSelectedContest} lotteries={lotteries} lotteryDate={lotteryDate} />
      </div>

      <div className={styles['result-content']}>
        <NumbersResult contest={contest} setLotteryDate={setLotteryDate} />
      </div>
      
    </div>
  );
}

export default Lotteries;
