import { useEffect } from "react";
import SearchForm from "../component/SearchForm";
import { useSelector } from "react-redux";
import MovieCard from "../component/MovieCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Main() {
  const { items, isLoadingitems, cart, cartlength } = useSelector(
    (state) => state.movie
  );
  const loading = isLoadingitems;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartlength", JSON.stringify(cartlength));
  }, [cart, cartlength]);

  return (
    <>
      <div className="main-container">
        <SearchForm cart={cart} />
        {items.length === 0 ? (
          <p className="not-found-text ">Not Found !!!!</p>
        ) : (
          <>
            <div className="grid-container">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                  {items.map((items) => (
                    <MovieCard key={items.id} items={items} />
                  ))}
                </Grid>
              </Box>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Main;
