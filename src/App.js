import React, { useState, useEffect } from "react";
import ItemEdit from "./components/ItemEdit";
import ItemView from "./components/ItemView";
import { nanoid } from "nanoid";
export default function App() {
 
  const [users, setUsers] = useState(localStorage.getItem("item") ? JSON.parse(localStorage.getItem("item")) : []);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  //save local storage 
  useEffect(()=> {
    localStorage.setItem("item" , JSON.stringify(users));
  })
 
  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  //submit item
  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = {
      id: nanoid(),
      name,
    };
    setUsers([...users, newName]);
    setName("");
    
  };
  //delete item
  const handleDelete = (id) => {
    const DeletedItem = users.filter((item) => item.id !== id);
    setUsers(DeletedItem);
    
  };
  //edit item
  const handleEditClick = (e, item) => {
    e.preventDefault();
    setEditId(item.id);
    const EditName = {
      name: item.name,
    };
    setEditName(EditName);
  };
  //edit change
  const handleEditChange = (e) => {
    e.preventDefault();
    setEditName({ ...name, [e.target.name]: e.target.value });
  };
  //edit submit
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const newUser = [...users];
    console.log(newUser);
    let EditedData = {
      id: nanoid(),
      name: editName.name,
    };
    const index = users.findIndex((item) => item.id === editId);
    newUser[index] = EditedData;
    setUsers(newUser);
    setEditId(null);
    
  };
  //toggle complete item
  const handleComple = (index) => {
    const newItems = [...users];
    newItems[index].selected = !newItems[index].selected;
    setUsers(newItems);
    
  };
  return (
    <>
      {users.map((item, index) => (
        <>
          {editId === item.id ? (
            <ItemEdit
              editName={editName}
              handleEditChange={handleEditChange}
              handleEditSubmit={handleEditSubmit}
            />
          ) : (
            <ItemView
              handleDelete={handleDelete}
              item={item}
              handleEditClick={handleEditClick}
              index={index}
              handleComple={handleComple}
              selected={item.selected}
            />
          )}
        </>
      ))}
      <form onSubmit={handleSubmit}>
        <h1>Add Form</h1>
        <input name="name" value={name} onChange={handleChange} />
      </form>
    </>
  );
}
