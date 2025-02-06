import { FC } from "react";
import "./Component_sum.css";

const Component_sum: FC = () => {
    const array_numb: number[] = [10, 22, 5, -19];

    function checkNumb(number: number): boolean {
        return number % 2 === 0;
    }

    function checkNumb2(number: number): boolean {
        return number > 0;
    }

    const new_array: number[] = array_numb.filter(checkNumb);
    console.log(new_array);

    const result: number = new_array.reduce((sum: number, current: number) => {
        return sum + current;
    }, 0);

    const new_array2: number[] = array_numb.filter(checkNumb2);

    const result2: number = new_array2.reduce((sum2: number, current2: number) => {
        return sum2 + current2;
    }, 0);
    
    return (
      <div>
          <h3>Значение суммы чётных элементов: {result} </h3>
          <div className="marquee">
                <div className="marquee-content">
                    <img src="https://static.vecteezy.com/system/resources/previews/036/050/868/non_2x/ai-generated-green-snake-isolated-on-transparent-background-free-png.png" alt="" />
                </div>
            </div>
          <h3>Значение элементов больше 0: {result2}</h3>
        </div>
    );
}

export default Component_sum;

