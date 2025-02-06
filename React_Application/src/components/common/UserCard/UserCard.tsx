
interface CardProps {
    name: string;
    isOnline: boolean;
    age?: number; 
}

const UserCard = ({name, isOnline, age} : CardProps) => {
    return (
      <div>
        <h2>Name: {name}</h2>
        <p>Status: {isOnline ? 'online' : 'offline'}</p>
        <p>Age: {age ? age : 'Not specified (не указан)'}</p>
      </div>
    )
} 

export default UserCard;