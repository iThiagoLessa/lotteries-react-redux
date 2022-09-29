import React from "react";
import { lotteries, LotteryStateRedux } from "../../main/interfaces";
import styles from "./SelectLottery.module.css";

import { useSelector, useDispatch } from 'react-redux';
import { setSelectedContest, setNameSelectedContest } from "../../store/Reducers";



interface IProps {
  lotteries: lotteries[] | null;
  isFetching: boolean;
}

const SelectLottery: React.FC<IProps> = ({
  lotteries,
  isFetching
}) => {
  const dispatch = useDispatch();

  const { lotterySelected } = useSelector((state: LotteryStateRedux) => state);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => { 
    const textvalue = e.target.selectedOptions[0].text;
    dispatch(setSelectedContest(Number(e.target.value)));
    if(textvalue) dispatch(setNameSelectedContest(textvalue));
  }

  return (
    <header className={styles['select-lotery']}>
      <select onChange={(e) => handleSelect(e)}>
        { isFetching ?
          (
            <option>Carregando..</option>
          ) :
          lotteries?.map(item => {
            return(
              <option key={item.id} defaultValue={lotterySelected.selectedContest} value={item.id}>{item.nome}</option>
            )
          })
        }
      </select>
    </header>
  )
}

export default SelectLottery;