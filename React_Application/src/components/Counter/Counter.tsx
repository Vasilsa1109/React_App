interface RootState {
    counter: {
      count: number;
    };
  }

interface CounterProps {
    //props type
}

const Counter: FC<CounterProps> = () => {
    const count = useSelector((state: RootState) => state.counter.count);
}

// import React, { FC, useState } from "react";
// import "./Counter.css";
// import Button from "../common/ClickButton/Button";
// import { useEffect } from "react";
// import { useLayoutEffect } from "react";

// const Counter:FC = () => {
//     const [count, setCount] = useState(0);
//     const [discount, setDisCount] = useState(0);
//     useEffect(()=>{console.log('Count was changed')}, [count, discount]) 

//     useLayoutEffect(()=>{
//        console.log("something")
//     }, [count])

//     useEffect(()=>{
//         console.log("something 2")
//      }, [count])
//     //если ничего не указывать в [] - пустом массиве, то будет вызываться один раз

//     return (
//         <div id="container">
//             <Button
//                 onClick={() => setCount(count+1)}
//             >
//                 Like
//             </Button>
//             <svg id="Glyph" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M29.845,17.099l-2.489,8.725C26.989,27.105,25.804,28,24.473,28H11c-0.553,0-1-0.448-1-1V13  c0-0.215,0.069-0.425,0.198-0.597l5.392-7.24C16.188,4.414,17.05,4,17.974,4C19.643,4,21,5.357,21,7.026V12h5.002  c1.265,0,2.427,0.579,3.188,1.589C29.954,14.601,30.192,15.88,29.845,17.099z" id="XMLID_254_"></path><path d="M7,12H3c-0.553,0-1,0.448-1,1v14c0,0.552,0.447,1,1,1h4c0.553,0,1-0.448,1-1V13C8,12.448,7.553,12,7,12z   M5,25.5c-0.828,0-1.5-0.672-1.5-1.5c0-0.828,0.672-1.5,1.5-1.5c0.828,0,1.5,0.672,1.5,1.5C6.5,24.828,5.828,25.5,5,25.5z" id="XMLID_256_"></path></svg>
//             <h3>{count} likes</h3>
//             <Button
//                 onClick={() => setDisCount(discount+1)}
//             >
//                 Dislike
//             </Button>
             
//             <svg id="Glyph2" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M2.156,14.901l2.489-8.725C5.012,4.895,6.197,4,7.528,4h13.473C21.554,4,22,4.448,22,5v14  c0,0.215-0.068,0.425-0.197,0.597l-5.392,7.24C15.813,27.586,14.951,28,14.027,28c-1.669,0-3.026-1.357-3.026-3.026V20H5.999  c-1.265,0-2.427-0.579-3.188-1.589C2.047,17.399,1.809,16.12,2.156,14.901z" id="XMLID_259_"></path><path d="M25.001,20h4C29.554,20,30,19.552,30,19V5c0-0.552-0.446-1-0.999-1h-4c-0.553,0-1,0.448-1,1v14  C24.001,19.552,24.448,20,25.001,20z M27.001,6.5c0.828,0,1.5,0.672,1.5,1.5c0,0.828-0.672,1.5-1.5,1.5c-0.828,0-1.5-0.672-1.5-1.5  C25.501,7.172,26.173,6.5,27.001,6.5z" id="XMLID_260_"></path></svg>
//             <h3>{discount} dislikes</h3>
//             <Button
//                 onClick={() => setCount(count-1)}
//             >
//                  Delete like
//             </Button>
//             <Button
//                 onClick={() => setDisCount(discount-1)}
//             >
//              Delete  dislike
//             </Button>

    
//         </div>
//     );
// }

// export default Counter;