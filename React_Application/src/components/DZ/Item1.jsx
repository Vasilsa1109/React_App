// 1.	Показать значок для незавершенных элементов с ? :
// Используйте условный оператор (cond ? a : b) для отображения ❌, если isPacked не является true.

function Item({ name, isPacked }) {
    return (
        <div>
            <h1>List</h1>
            <li className="item">
                {name} {isPacked && 'x'}
            </li> : (
                <p>There is no data</p>
            )
        </div>
    ); 
}

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

// 2.	Показать важность элемента с помощью &&¶
// В этом примере каждый Item получает числовой параметр importance. Используйте оператор &&, чтобы отобразить "(Важность: X)" курсивом, но только для тех элементов, которые имеют ненулевую важность. В итоге ваш список предметов должен выглядеть следующим образом:
// ●	Космический скафандр (Важность: 9).
// ●	Шлем с золотым листом
// ●	Фотография Тама (Важность: 6)
// Не забудьте добавить пробел между двумя метками!

function Item({ name, importance }) {
    return <li className="item">{name}</li>;
}
export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item importance={9} name="Space suit" />
                <Item
                    importance={0}
                    name="Helmet with a golden leaf"
                />
                <Item importance={6} name="Photo of Tam" />
            </ul>
        </section>
    );
}

// 3.	Рефакторинг серии ? : на if и переменные
// Этот компонент Drink использует серию ? : условий для отображения различной информации в зависимости от того, является ли name пропс "чай" или "кофе". Проблема в том, что информация о каждом напитке распределена по нескольким условиям. Переработайте этот код, чтобы использовать один оператор if вместо трех ? : условий.

function Drink({ name }) {
    return (
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
                <dt>Caffeine content</dt>
                <dd>
                    {name === 'tea'
                        ? '15–70 mg/cup'
                        : '80–185 mg/cup'}
                </dd>
                <dt>Age</dt>
                <dd>
                    {name === 'tea'
                        ? '4,000+ years'
                        : '1,000+ years'}
                </dd>
            </dl>
        </section>
    );
}

export default function DrinkList() {
    return (
        <div>
            <Drink name="tea" />
            <Drink name="coffee" />
        </div>
    );
}



