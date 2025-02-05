
import { FC } from "react";
import "./Component_sum.css";

const Component_sum:FC = () => {
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
    
    return (
      <div>
          <h3>Значение суммы чётных элементов: {result} </h3>
          <marquee behavior="alternate"  ><img src="https://static.vecteezy.com/system/resources/previews/036/050/868/non_2x/ai-generated-green-snake-isolated-on-transparent-background-free-png.png" alt="" /></marquee>
          <h3>Значение элементов больше 0: {result2}</h3>
        </div>
    );
}

export default Component_sum;

