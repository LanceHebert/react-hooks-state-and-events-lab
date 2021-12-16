import React,{useState} from "react";

function Item({ name, category }) {
  const [cart,setCart] = useState(false)

function handleClick(){
  setCart(cart=>cart=!cart)
}
  return (
    <li className={cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
