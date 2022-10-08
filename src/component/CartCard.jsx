import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteCart } from "../features/movie/movieSlice";

function CartCard({ cart }) {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    dispatch(deleteCart(cart));
  };

  return (
    <div className="cartcard-container">
      <div className="cartcard-start">{cart.title}</div>
      <div className="cartcard-end">
        <DeleteIcon className="cartcard-logo" onClick={handleDelete} />
      </div>
    </div>
  );
}

export default CartCard;
