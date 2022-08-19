import {
  CardHeader,
  CardMedia,
  IconButton,
  Box,
  CircularProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Character from "../../character";
import React from "react";
import { fetchCharacterByName, doesDataExist } from "../../utils/methods";
export const Menu = () => {
  const [character, setCharacter] = React.useState("");
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    setCharacters([]);
    const data = await fetchCharacterByName(character);
    if (doesDataExist(data)) {
      setCharacters(data);
      setAlert(false);
    } else {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
    setLoading(false);
  };
  const SearchButton = () => (
    <IconButton onClick={() => handleSubmit()}>
      <SearchIcon />
    </IconButton>
  );
  return (
    <div>
      <Snackbar autoHideDuration={6000} open={alert}>
        <Alert severity="info" sx={{ width: "100%" }}>
          No characters found.
        </Alert>
      </Snackbar>
      <Typography variant="h1" sx={{ fontWeight: "700" }} color={"#fff"}>
        Breaking Bad Finder
      </Typography>
      <div className="formData">
        <FormControl sx={{ width: "100%" }}>
          <TextField
            id="standard-name"
            color="secondary"
            label="Ex: Walter White"
            sx={{ width: "100%" }}
            onChange={(e) => setCharacter(e.target.value)}
            InputProps={{ endAdornment: <SearchButton /> }}
          />
        </FormControl>
      </div>
      <div className="mt-5 flex justify-around">
        {characters.length > 0 &&
          characters.map((item: Character) => (
            <React.Fragment key={item.char_id}>
              <Card
                sx={{ maxWidth: 250, textAlign: "center", flex: "1 1 33%" }}
              >
                <CardHeader
                  className="flex"
                  titleTypographyProps={{
                    height: 80,
                    alignItems: "center",
                    lineHeight: "25px",
                  }}
                  title={item.name}
                ></CardHeader>
                <CardMedia
                  sx={{ width: 250, height: 312 }}
                  image={item.img}
                  component="img"
                  alt="Walter White"
                ></CardMedia>
                <CardContent>
                  <Typography variant="body2" color="text secondary">
                    Status: {item.status}
                  </Typography>
                  <Typography variant="body2" color="text secondary">
                    Nickname: {item.nickname}
                  </Typography>
                  <Typography variant="body2" color="text secondary">
                    Portrayed: {item.portrayed}
                  </Typography>
                  <Typography variant="body2" color="text secondary">
                    Birthday: {item.birthday}
                  </Typography>
                </CardContent>
              </Card>
            </React.Fragment>
          ))}
      </div>
      {loading && (
        <Box className="mt-5 flex justify-center">
          <CircularProgress color="success" />
        </Box>
      )}
    </div>
  );
};
