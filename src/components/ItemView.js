import React from "react";

export default function ItemView(props) {
  return (
    <ul key={props.item.id}>
      <li onClick={() => props.handleComple(props.index)}>{props.selected ? (
        <span className="completed">{props.item.name}</span>
      ) : (<span>{props.item.name}</span>)}</li>
      <button onClick={(e) => props.handleEditClick(e, props.item)}>
        Edit
      </button>
      <button onClick={() => props.handleDelete(props.item.id)}>Delete</button>
      
    </ul>
  );
}
