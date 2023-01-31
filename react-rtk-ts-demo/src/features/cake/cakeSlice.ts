import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type initialState = {
  numOfCakes: number
}

const initialState: initialState = {
  numOfCakes: 10,
}
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload
    },
  },
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions
