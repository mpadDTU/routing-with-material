import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" style={{position: 'absolute', bottom: 0}}>
      <Toolbar>
        <Typography>My footer</Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Footer

