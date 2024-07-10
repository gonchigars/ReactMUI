import React from "react";
import { Box } from "@mui/material";
import ButtonAppBar from "./AppBar";
import PermanentDrawerLeft from "./PermanentDrawer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Counter from "./components/usestatecounterbeautified";
import MovieList from "./components/MovieList";
import { Counterr } from "./components/Counterr";

function App() {
  return (
    <Provider store={store}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <ButtonAppBar />
        <PermanentDrawerLeft />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 3,
            marginTop: "64px", // AppBar height
            marginLeft: "140px", // Drawer width
            display: "flex",
            flexDirection: "column", // Stack items vertically
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: "calc(100vh - 64px)", // Full viewport height minus AppBar height
          }}
        >
          <MovieList />
          <Box sx={{display:"flex"}}>
          <Box sx={{ marginTop: "auto" }}> {/* Pushes Counter to the bottom */}
            <h1>REDUX COUNTER</h1>
            <Counter />
          </Box>
          <Box sx={{ marginTop: "auto",marginLeft:"25px" ,marginBottom:"200px"}}> {/* Pushes Counter to the bottom */}
            <Counterr />
          </Box>
          </Box>
        </Box>
      </Box>
    </Provider>
  );
}

export default App;
