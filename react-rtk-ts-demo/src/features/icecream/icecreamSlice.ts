import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ordered as cakeOrdered } from "../cake/cakeSlice"

type initialState = {
  numOfIcecreams: number
}

const initialState: initialState = {
  numOfIcecreams: 20,
}

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIcecreams += action.payload
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIcecreams--
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--
    })
  },
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions
