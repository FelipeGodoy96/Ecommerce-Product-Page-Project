import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'


const pages = ['Collections', 'Men', 'Women', 'About', 'Contact'];
const settings = ['My Account', 'Logout'];
const cart = ['teste']

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElCart, setAnchorElCart] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenCart = (event) => {
    setAnchorElCart(event.currentTarget)
  }

  const handleCloseCart = () => {
    setAnchorElCart(null)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" color="white" sx={{boxShadow: 'none'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          {/* LOGO medium devices and desktop */}
          <Box sx={{display: { xs: 'none', md: 'block'}, marginRight: '3rem'}}>
            <Link href="/">
              <img src='src/assets/images/logo.svg' />   
            </Link>
          </Box>
          {/* Menu Mobile devices */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
           
            </Menu>
             {/* LOGO mobile/small devices*/}
            <Box sx={{display: { xs: 'block', md: 'none'}, alignSelf: 'center'}}>
            <img src='src/assets/images/logo.svg' />   
          </Box>
          </Box>
          {/* LOGO mobile/small devices*/}
         

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'grey', marginBottom: '0', paddingBottom: '16px', display: 'block', borderBottom:'solid 5px transparent', '&:hover': {color: 'black', borderBottom: 'solid 5px', borderColor: 'hsl(26, 100%, 55%)', background: 'none', borderRadius: '0'} }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton onClick={handleOpenCart} sx={{ p: 0, '&:hover': {background: 'none'} }}>
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="cart-appbar"
              anchorEl={anchorElCart}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElCart)}
              onClose={handleCloseCart}
            >
              
                <MenuItem  onClick={handleCloseCart}>
                  <Typography textAlign="center">{cart}</Typography>
                </MenuItem>
              
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 , '&:hover': {background: 'none'}}}>
                <Avatar alt="avatar" src="src/assets/images/avatar.png" sx={{width: '2.5rem', height: '2.5rem', marginX: '1rem', border: 'solid 2px transparent', '&:hover': {border: 'solid 2px', borderColor: 'hsl(26, 100%, 55%)'}}} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
