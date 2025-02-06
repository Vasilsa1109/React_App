import  { useEffect, useState, FC } from "react";
import apiInstance from "../api/apiInstance";

interface User {
    id: number;
    name: string;
    email: string;
    age?: number; 
}

const UsersList:FC = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const response = await apiInstance.get('/users');
                setUsers(response.data);
            }
            catch(error){
                console.error('Error loading users:', error);
            }
            finally{
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>


    return (
        <div>
            <h1>List of users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    )
} 

export default UsersList;