import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { lotteries } from "../../main/interfaces";
import styles from "./SelectLottery.module.css";



interface IProps {
  lotteries: lotteries[] | null;
  isFetching: boolean;
  selectedContest: number;
  setSelectedContest: Dispatch<SetStateAction<number>>;
  setNameSelectedContest: Dispatch<SetStateAction<string>>;
}

const SelectLottery: React.FC<IProps> = ({
  lotteries,
  isFetching,
  selectedContest,
  setSelectedContest,
  setNameSelectedContest
}) => {
  const [nameContest, setNameContest] = useState<string>("");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => { 
    const textvalue = e.target.selectedOptions[0].text;
    setSelectedContest(Number(e.target.value));
    if(textvalue) setNameContest(textvalue);
  }

  useEffect(() => {
    setNameSelectedContest(nameContest);
  }, [nameContest, setNameSelectedContest]);

  return (
    <header className={styles['select-lotery']}>
      <select onChange={(e) => handleSelect(e)}>
        { isFetching ?
          (
            <option>Carregando..</option>
          ) :
          lotteries?.map(item => {
            return(
              <option key={item.id} defaultValue={selectedContest} value={item.id}>{item.nome}</option>
            )
          })
        }
      </select>
    </header>
  )
}

export default SelectLottery;