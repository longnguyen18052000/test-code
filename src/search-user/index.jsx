import React, { useState, useEffect } from "react";
import UserList from "./user-list";
import { get } from "../ulits/api-user";

const SearchUserName = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get("/users");
        setUsers(data);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-5">
      <p className="text-3xl font-bold">User List</p>
      <input
        className="py-2 my-2"
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default SearchUserName;
