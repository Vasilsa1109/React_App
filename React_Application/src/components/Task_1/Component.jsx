
import { useState } from "react";
import "./Component.css";

const Component_sum = () => {
    var array_numb = [10, 22, 5, -19];
    function checkNumb(number) {
    if (number % 2 == 0) 
      return true;
    else return false;
  }
  function checkNumb2(number) {
    if (number > 0) 
      return true;
    else return false;
  }

  let new_array = array_numb.filter(checkNumb);
    console.log(new_array);

var result = new_array.reduce(function(sum, current) {
  return sum + current;
}, 0);


  let new_array2 = array_numb.filter(checkNumb2);

    var result2 = new_array2.reduce(function(sum2, current2) {
        return sum2 + current2;
    }, 0);

    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const new_arr = [...arr1, arr2];
    console.log('-- new array --', new_arr);

    // const [arr, setValue] = useState(['World', 'peace']);
    // setValue([...arr, 'new value', 'new...'])
    

    return (
        <div className="container">
          <h3>Значение суммы чётных элементов: {result}</h3>
          <h3>Значение элементов больше 0: {result2}</h3>
        </div>
    );

}

export default Component_sum;
