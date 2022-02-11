import React from 'react';
import styles from './Lotteries.module.css';
import SelectLottery from "../components/SelectLottery";
import LoterySelected from "../components/LoterySelected";
import NumbersResult from "../components/Results";

const Lotteries: React.FC = () => {
  return (
    <div className={`${styles.app} ${styles['mega-sena']}`}>

      <div className={styles['functional-content']}>
        <SelectLottery />
        <LoterySelected />
      </div>

      <div className={styles['result-content']}>
        <NumbersResult />
      </div>
      
    </div>
  );
}

export default Lotteries;
