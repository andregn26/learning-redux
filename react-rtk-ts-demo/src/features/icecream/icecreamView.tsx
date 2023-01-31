import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { ordered, restocked } from "./icecreamSlice"
import { useState } from "react"

const icecreamView = () => {
  const numOfIcecreams = useAppSelector(
    (state) => state.icecream.numOfIcecreams
  )
  const dispatch = useAppDispatch()
  const [value, setValue] = useState(1)
  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock ice creams
      </button>
    </div>
  )
}

export default icecreamView
