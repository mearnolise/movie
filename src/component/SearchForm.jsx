import { getMovies } from "../features/movie/movieSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

function SearchForm() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message !== "") {
      dispatch(getMovies(message));
      setMessage("");
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <form className="formbox" onSubmit={handleSubmit}>
        <input
          className="formtext"
          value={message}
          onChange={handleChange}
        ></input>
        <button className="formbutton">
          <p>click</p>
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
