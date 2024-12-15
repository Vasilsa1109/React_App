
import "./Object_1.css";


const Object_1 = () =>{
//Поверхностное копирование
const someObject = {
    id: 1, 
    name: 'Ann',
    surname: 'Nnn',
    age: 24,
    city: 'Minsk',
    country: 'Belarus',
    profession: 'Developer',
    study: ['school 25', 'Oxford'],
    education: 'high',
    work_experience: 3
}

const clonedObject = {...someObject};

console.log(clonedObject);
}

export default Object_1;

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const new_arr = [...arr1, arr2];
// console.log('-- new array --', new_arr);
// const [arr, setValue] = useState(['World', 'peace']);
// setValue([...arr, 'new value', 'new...'])