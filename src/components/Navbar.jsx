import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Link from '@mui/material/Link'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import avatar from '../assets/images/avatar.png'
import logo from '../assets/images/logo.svg'
import product1thumb from '../assets/images/image-product-1-thumbnail.jpg'
import Divider from '@mui/material/Divider';
import deleteBtn from '../assets/images/icon-delete.svg'


const pages = ['Collections', 'Men', 'Women', 'About', 'Contact']
const settings = ['My Account', 'Logout']
const textCart = "Autumn Limited Edition Sneakers"
const cart = (
<Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "90%"}}>
<h2 sx={{}}>Cart</h2>
  <Divider />
  <ul style={{whiteSpace: "pre-wrap", wordWrap: "break-word", display: "flex", justifyContent: "start", alignItens: "start"}}>
    <li style={{width: "25%"}}><img src={product1thumb}  style={{width: "80%", borderRadius: "0.5rem"}}/></li>
    <li style={{width: "60%"}}>{`${textCart.substring(0, 18)}... `}$125.00 x 3 <span style={{fontWeight: "bold"}}>$375.00</span></li>
    <li style={{width: "15%"}}><Button ><img src={deleteBtn} /> </Button></li>
  </ul>
  <Button sx={{borderRadius: "0.5rem", paddingLeft: "20px", color: "#FFF", paddingRight: "20px", width: "100%", textAlign: "center", justifyContent: "center", backgroundColor: "HSL(26, 100%, 55%)"}}>checkout</Button>
</Box>)

function ResponsiveAppBar(props) {

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [anchorElCart, setAnchorElCart] = React.useState(null)

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleOpenCart = event => {
    setAnchorElCart(event.currentTarget)
  }

  const toggleDrawer = (state) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key  === 'Shift')) {
      return
    }
    setAnchorElNav(state)
  }

      
  const handleCloseCart = () => {
    setAnchorElCart(null)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="sticky" color="white" sx={{ boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO medium devices and desktop */}
          <Box
            sx={{ display: { xs: 'none', md: 'block' }, marginRight: '3rem' }}
          >
            <Link href="/">
              <img src={logo} />
            </Link>
          </Box>
          {/* Menu Mobile devices */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label=""
              aria-controls="menu-sidebar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          <Drawer
            anchor={'left'}
            open={Boolean(anchorElNav)}
            onClose={toggleDrawer(anchorElNav)}
          >
             <Box
      sx={{ width: '60vw'}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((text,index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
            
          </Drawer>
            {/* LOGO mobile/small devices*/}
            <Box
              sx={{ display: { xs: 'block', md: 'none' }, alignSelf: 'center' }}
            >
              <img src="src/assets/images/logo.svg" />
            </Box>
          </Box>
          {/* LOGO mobile/small devices*/}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'grey',
                  marginBottom: '0',
                  paddingBottom: '16px',
                  display: 'block',
                  borderBottom: 'solid 5px transparent',
                  '&:hover': {
                    color: 'black',
                    borderBottom: 'solid 5px',
                    borderColor: 'hsl(26, 100%, 55%)',
                    background: 'none',
                    borderRadius: '0'
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton
                onClick={handleOpenCart}
                sx={{ p: 0, '&:hover': { background: 'none' } }}
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Menu
            sx={{ mt: '50px'}}
              id="cart-appbar"
              anchorEl={anchorElCart}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElCart)}
              onClose={handleCloseCart}
            >
              <MenuItem onClick={handleCloseCart} sx={{width: "90vw", height: "250px"}}> 
                {cart}
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, '&:hover': { background: 'none' } }}
              >
                <Avatar
                  alt="avatar"
                  src={avatar}
                  sx={{
                    width: '2.5rem',
                    height: '2.5rem',
                    marginX: '1rem',
                    border: 'solid 2px transparent',
                    '&:hover': {
                      border: 'solid 2px',
                      borderColor: 'hsl(26, 100%, 55%)'
                    }
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
