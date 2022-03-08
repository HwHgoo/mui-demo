import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

export interface IImgCard {
    src: string,
    alt?: string,
    keyName?: string,
}

let initialState: IImgCard[] = [];

export const storeImgCard = createSlice({
    name: 'imgcard',
    initialState,
    reducers: {
        push: (state, action: PayloadAction<IImgCard[]>) => {
            return action.payload
        },
        pop: (state) => {
            console.log('pop', state)
        },
        pull: (state) => {
            console.log('pull ', state)
        }
    }
});

export default storeImgCard.reducer;
export const { push, pop, pull } = storeImgCard.actions;
export const selectImgCard = (state: RootState) => state.imgs;