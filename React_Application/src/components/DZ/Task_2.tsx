// 2.	Показать важность элемента с помощью &&¶
// В этом примере каждый Item получает числовой параметр importance. Используйте оператор &&, чтобы отобразить 
// "(Важность: X)" курсивом, но только для тех элементов, которые имеют ненулевую важность. 
// В итоге ваш список предметов должен выглядеть следующим образом:
// ●	Космический скафандр (Важность: 9).
// ●	Шлем с золотым листом
// ●	Фотография Тама (Важность: 6)
// Не забудьте добавить пробел между двумя метками!

function Item2({ name, importance }) { 
    return (
        <li className="item">
            {name} {importance > 0 && <i> ( Важность : {importance} )</i>} 
        </li>
    ); 
} 

export default function PackingList2() { 
    return ( 
        <section> 
            <h1>Sally Ride's Packing List</h1> 
            <ul> 
                <Item2 importance={9} name="Space suit" /> 
                <Item2 
                    importance={0} 
                    name="Helmet with a golden leaf" 
                /> 
                <Item2 importance={6} name="Photo of Tam" /> 
            </ul> 
        </section> 
    ); 
}

