// 1.	Показать значок для незавершенных элементов с ? :
// Используйте условный оператор (cond ? a : b) для отображения ❌, если isPacked не является true.


function Item({ name, isPacked }) { 
    return ( 
        <li className="item"> 
            {name} {isPacked ? ' ' : '❌'} 
        </li> 
    ); 
} 
// способ через &&:  {name} {!isPacked && '❌'} 
export default function PackingList() { 
    return ( 
        <section> 
            <h1>Sally Ride's Packing List</h1> 
            <ul> 
                <Item isPacked={true} name="Space suit" /> 
                <Item 
                    isPacked={true} 
                    name="Helmet with a golden leaf" 
                /> 
                <Item 
                    isPacked={false} 
                    name="Photo of Tam" 
                /> 
            </ul> 
        </section> 
    ); 
}





