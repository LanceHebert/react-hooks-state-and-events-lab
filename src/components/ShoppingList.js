import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setCategory] = useState("All")

function filterFunct(e){
  
  setCategory(selectedCategory=> selectedCategory=e.target.value)
}

const filteredList = items.filter(item=>{
  if(item.category === selectedCategory)
  {
    return true
  }
  else 
  { 
    return selectedCategory === "All"
  }
  
})

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterFunct}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
