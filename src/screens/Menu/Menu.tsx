import { IconButton } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React from "react";
export const Menu = () => {
  const [book, setBook] = React.useState("");
  const [bookList, setBookList] = React.useState([]);
  const fetchBookByName = () => {
    const url = `https://openlibrary.org/works/OL45883W/${book}`;
    axios.get(url).then((res) => {
      console.log(res.data);
    });
  };
  const SearchButton = () => (
    <IconButton onClick={() => fetchBookByName()}>
      <SearchIcon />
    </IconButton>
  );
  return (
    <div>
      <Typography variant="h1" sx={{ fontWeight: "700" }} color={"#fff"}>
        Book Finder
      </Typography>
      <div className="formData">
        <FormControl sx={{ width: "100%" }}>
          <TextField
            id="standard-name"
            color="secondary"
            label="Ex: Harry Potter"
            sx={{ width: "100%" }}
            onChange={(e) => setBook(e.target.value)}
            InputProps={{ endAdornment: <SearchButton /> }}
          />
        </FormControl>
      </div>
    </div>
  );
};
