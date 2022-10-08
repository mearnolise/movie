import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MovieIcon from "@mui/icons-material/Movie";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const { cartlength } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  return (
    <div className="headerbox">
      <div className="header-container">
        <div className="headertext-flex" onClick={() => navigate("/")}>
          <div className="header-icon">
            <MovieIcon sx={{ color: " white ", fontSize: 40 }} />
          </div>

          <p className="headertext">MOVIE FOR YOU</p>
        </div>
        <div className="headertext-flex" onClick={() => navigate("/cartpage")}>
          <div className="header-icon">
            <ShoppingBagOutlinedIcon sx={{ color: " white ", fontSize: 40 }} />
            <p className="cart-num">{cartlength}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
