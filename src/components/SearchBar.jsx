import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";

export default function CustomizedInputBase() {
  return (
    <Paper
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
