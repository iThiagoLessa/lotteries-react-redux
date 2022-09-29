import React, { useEffect } from 'react';
import styles from './Lotteries.module.css';
import SelectLottery from "../components/SelectLottery";
import LoterySelected from "../components/LoterySelected";
import NumbersResult from "../components/Results";

import { useFetch } from "../components/hooks/useFetch";
import { IContests, lotteries, LotteryStateRedux } from './interfaces';

import { useSelector, useDispatch } from 'react-redux';
import { setNameSelectedContest, setContest } from '../store/Reducers';


const Lotteries: React.FC = () => {
  const dispatch = useDispatch();

  const { data: lotteries, isFetching: loadingLotteries } = useFetch<lotteries[] | null>("https://brainn-api-loterias.herokuapp.com/api/v1/loterias");
  const { data: contests } = useFetch<IContests[] | null>("https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos");
  const { lotterySelected } = useSelector((state: LotteryStateRedux) => state);



  const normalizeString = (text: string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
  }

  useEffect(() => {
    if (lotteries) dispatch(setNameSelectedContest(normalizeString(lotteries[0].nome)))
  }, [lotteries, dispatch]);

  useEffect(() => {
    if (contests) {
      dispatch(setContest(contests[lotterySelected.selectedContest]));
    }
  }, [contests, lotterySelected.selectedContest, dispatch]);

  return (
    <div className={`${styles.app} ${styles[lotterySelected.nameSelectedContest.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')]}`}>

      <div className={styles['functional-content']}>

        <SelectLottery
          lotteries={lotteries}
          isFetching={loadingLotteries}
        />

        <LoterySelected
          contests={contests}
          selectedContest={lotterySelected.selectedContest}
          nameSelectedContest={lotterySelected.nameSelectedContest}
          lotteryDate={lotterySelected.lotteryDate}
        />
      </div>

      {
        lotterySelected.contest.concursoId && (
          <div className={styles['result-content']}>
            <NumbersResult
              contest={lotterySelected.contest}
            />
          </div>
        )
      }
    </div>
  );
}

export default Lotteries;
