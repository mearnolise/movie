import { useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "../component/CartCard";
import { useDispatch } from "react-redux";
import { reset } from "../features/movie/movieSlice";

function CartPage() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.movie);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    setValue(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      dispatch(reset());
      setValue("");
    }
  };

  return (
    <div className="cartpage-div">
      <div className="cartpage-start">
        {cart.map((cart) => (
          <CartCard cart={cart} key={cart.idu} />
        ))}
      </div>
      <div className="cartpage-end">
        <p className="cartpage-end-text">Pay what you want</p>
        <form className="formbox" onSubmit={handleSubmit}>
          <input
            type="text"
            className="formtext"
            value={value}
            onChange={handleChange}
          ></input>
          <button className="formbutton">
            <p>PAY</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CartPage;
