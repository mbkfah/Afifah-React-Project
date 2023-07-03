import React, { useState, useEffect } from "react";

export const BlogList = () => {
  const [blog, setBlog] = useState([]);
  const [users, setUsers] = useState([]);

  console.log(users);

  const ambilData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setBlog(data);
  };

  const ambilUser = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    ambilData();
    ambilUser();
  }, []);

  return (
    <div className="space-y-8 p-8 text-4xl">
      <div>BlogList</div>
      <div className="space-y-4 p-8">
        {blog.map((item) => {
          const index = item.userId;
          // const user = users.find((user) => user.id === item.userId);
          return (
            <div key={item.id}>
              <h3 className="text-2xl text-slate-600">{item.title}</h3>
              <p className="text-indigo-500 text-xs">{users[index - 1].name}</p>
              <p className="text-indigo-500 text-xs">
                {users[index - 1].email}
              </p>
              <p className="text-indigo-500 text-xs">
                {users[index - 1].address.city}
              </p>
              <p className="text-xs text-slate-400">{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
