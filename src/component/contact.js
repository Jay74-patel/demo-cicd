import React, { useState } from 'react'

export const Contact = () => {

const [count, Setcount] = useState(10);

// const handleIncrement = () => {
//   if (count < 25){
//     Setcount(count + 1)
//   }
// }

// const handleDecrement = () => {
//   if (count > 0){
//     Setcount(count - 1)
//   }
// }

  return (
    <>
    <div>Contact</div>
    { count < 25 && <button onClick={() => Setcount(count + 1)}>+</button>}
    <button>{count}</button>
    { count > 0 && <button onClick={() => Setcount(count -1 )}>-</button>}
    </>
  )
}
