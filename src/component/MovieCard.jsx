import { useState } from "react";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addCart } from "../features/movie/movieSlice";

function MovieCard({ items }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (num) => {
    if (num === 1) {
      dispatch(addCart(items));
    }
    setOpen(false);
  };
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <div className="card-container" onClick={handleClickOpen}>
          <div
            className="card-pic"
            style={{
              backgroundImage: `url("http://image.tmdb.org/t/p/w342/${items.poster_path}")`,
            }}
          ></div>
          <p className="movie-name">{items.title}</p>

          <div className="rating-box">
            <p className="rating-num">{items.vote_average}</p>
          </div>
        </div>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to add to cart?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(0)}>Disagree</Button>
          <Button onClick={() => handleClose(1)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default MovieCard;
