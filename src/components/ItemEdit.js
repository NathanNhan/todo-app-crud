import React from "react";

export default function ItemEdit({
  editName,
  handleEditChange,
  handleEditSubmit,
}) {
  return (
    <>
      <form onSubmit={handleEditSubmit}>
        <h1>Edit Form</h1>
        <input name="name" value={editName.name} onChange={handleEditChange} />
      </form>
    </>
  );
}
