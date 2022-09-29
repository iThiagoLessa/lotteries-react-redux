import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IContests } from "../../main/interfaces";


const initialState = {
    selectedContest: 0,
    nameSelectedContest: "",
    contest: {
        concursoId: "",
        loteriaId: 0
    },
    lotteryDate: ""
}


const lotteriesSlice = createSlice({
    name: 'lotteries',
    initialState,
    reducers: {
        setSelectedContest: (state, action: PayloadAction<number>) => {
            const selectedContest = action.payload;
            return {
                ...state,
                selectedContest
            }
        },
        setNameSelectedContest: (state, action: PayloadAction<string>) => {
            const nameSelectedContest = action.payload;
            return {
                ...state,
                nameSelectedContest
            }
        },
        setContest: (state, action: PayloadAction<IContests>) => {
            const contest = action.payload;

            return {
                ...state,
                contest
            }
        },
        setLotteryDate: (state, action: PayloadAction<string>) => {
            const lotteryDate = action.payload;

            return {
                ...state,
                lotteryDate
            }
        }
    }
});



export const { 
    setSelectedContest,
    setNameSelectedContest, 
    setContest, 
    setLotteryDate 
} = lotteriesSlice.actions;

export default lotteriesSlice.reducer;