import { FC } from "react";

//задача 1
let age: number = 25;

//задача 2
let names: string[] = ["Alice", "Bob", "Charlie"];
typeof(names);

//задача 3
interface User{
    id: number;
    name: string;
}

let user: User = {id: 10, name: 'Alex'};

//задача 4
interface Props{
    name: string;
    message?: string;
}

const Greeting:FC<Props> = ({ name, message }) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Message from user: {message ? message : 'Not specified (не указано)'}</p>
        </div>
    );
};

export default Greeting;

//задача 5
interface Product {
    id: number;
    name: string;
}

interface ProductProps {
    products: Product[];
}

const ProductList:FC<ProductProps> = ({ products }) => {
    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>{product.name}</li>
            ))}
        </ul>
    );
};

export default ProductList;

//задача 6
function identity <T> (a: T): T {
    return a;
}

const numberIdentity = identity(42); 

const stringIdentity = identity("Hello, world!"); 

const arrayIdentity = identity([1, 2, 3, 4, 5]);

const booleanIdentity = identity(true);

//задача 7

// interface ListProps<T> {
//     items: T[];
//     renderItem: (item: T, index: number) => React.ReactNode;
// }

// import React from 'react';

// const List = <T,>({ items, renderItem }: ListProps<T>) => {
//     return (
//         <ul>
//             {items.map((item, index) => (
//                 <li key={index}>{renderItem(item, index)}</li>
//             ))}
//         </ul>
//     );
// };

// export default List;


// const App:FC = () => {
//     const names = ["Alice", "Bob", "Charlie"];

//     return (
//         <div>
//             <h1>Names List</h1>
//             <List
//                 items={names}
//                 renderItem={(name) => <p>{name}</p>}
//             />
//         </div>
//     );
// };

// export default App;

