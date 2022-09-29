export type lotteries = {
  id: number;
  nome: string;
}

export interface IContests {
  loteriaId: number;
  concursoId: string;
}

export interface ILotteryResult {
  id: string;
  loteria: number;
  numeros: string[];
  data: string
}

export interface LotteryStateRedux {
  lotterySelected: {
    selectedContest: number;
    nameSelectedContest: string;
    lotteryDate: string;
    contest: {
      concursoId: string;
      loteriaId: number;
    }
  }
}