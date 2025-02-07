import  React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from "../../src/store/usersSlice";
import { RootState, AppDispatch } from "../../src/store"

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const UserList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    user.email.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  
  const handleSearchChange = (event: InputChangeEvent) => {
    setSearchTerm(event.target.value);
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="">
      <h2 className="">Список пользователей</h2>

      {/* Поле поиска */}
      <input
        type="text"
        placeholder="Поиск по имени или email"
        value={searchTerm}
        onChange={handleSearchChange}
        className=""
      />

      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.id} className="p-2 border-b flex justify-between">
              <span>{user.name} ({user.email})</span>
              <button 
                className=""
                onClick={() => dispatch(deleteUser(user.id))}
              >
                Удалить
              </button>
            </li>
          ))
        ) : (
          <p>Пользователи не найдены</p>
        )}
      </ul>
    </div>
  );
};

export default UserList;


