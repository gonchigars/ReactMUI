import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../store/moviesSlice";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const MovieList = () => {
  const dispatch = useDispatch();
  const { popularMovies, status, error } = useSelector((state) => state.movies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getPopularMovies());
    }
  }, [status, dispatch]);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClose = () => {
    setSelectedMovie(null);
  };

  if (status === "loading") {
    return <CircularProgress />;
  }

  if (status === "failed") {
    return <Typography color="error">Error: {error}</Typography>;
  }

  if (!popularMovies || popularMovies.length === 0) {
    return <Typography>No movies found.</Typography>;
  }

  return (
    <div>
      <Grid container spacing={3}>
        {popularMovies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={movie.id}>
            <Card
              onClick={() => handleCardClick(movie)}
              style={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <CardMedia
                component="img"
                height="300"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <CardContent style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <Typography gutterBottom variant="h6" component="div">
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Release Date: {movie.release_date}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedMovie && (
        <Dialog
          open={!!selectedMovie}
          onClose={handleClose}
          aria-labelledby="movie-details-title"
        >
          <DialogTitle id="movie-details-title">{selectedMovie.title}</DialogTitle>
          <DialogContent>
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              style={{ width: '100%' }}
            />
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
              Release Date: {selectedMovie.release_date}
            </Typography>
            <Typography variant="body1" style={{ marginTop: '10px' }}>
              {selectedMovie.overview}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default MovieList;
