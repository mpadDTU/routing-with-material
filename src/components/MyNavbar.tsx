import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <Link to="/"><HomeIcon style={{ color: "white" }}/></Link>
        </IconButton>
        <Typography>My Navbar</Typography>
        <span style={{margin: '0 10px'}}>
          <Link to="/about-us"> About Us</Link>
        </span>
        
      </Toolbar>
    </AppBar>
  )
}

export default Navbar