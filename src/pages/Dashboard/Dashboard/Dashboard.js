import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { Button } from '@mui/material';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AddProduct from '../Products/AddProduct/AddProduct';
import AllOrders from '../Order/AllOrders/AllOrders';
import ProductsMaintain from '../Products/ProductsMaintain/ProductsMaintain';
import AddAdmin from '../AddAdmin/AddAdmin';
import UserReviews from '../UserReviews/UserReviews';
import MyOrders from '../Order/MyOrders/MyOrders';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import useAuth from '../../../hooks/useAuth';
import Payment from '../Payment/Payment';


const drawerWidth = 240;

function Dashboard(props) {
  const {admin, user, logout} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
    const { path, url } = useRouteMatch();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <Toolbar sx={{backgroundColor: 'black'}}/> */}
      <Divider />
      <List>
        <Button >
          <Link className="nav-link text-black" to='/'> <AppsOutlinedIcon /> Home</Link>
        </Button>
        <Button >
          <Link className="nav-link text-black" to={`${url}/myOrders`}> <BorderAllOutlinedIcon /> My Orders</Link>
        </Button>
        <Button >
          <Link className="nav-link text-black" to='/payment'> <i class="fas fa-dollar-sign"></i> Payment</Link>
        </Button>
        <Button >
          <Link className="nav-link text-black" to={`${url}/addReview`}> <ReviewsOutlinedIcon /> Review</Link>
        </Button>
        {
          admin &&
          <div>
            <Button >
              <Link className="nav-link text-black" to={`${url}/addAdmin`}> <PersonAddOutlinedIcon /> Add Admin</Link>
            </Button>
            <Button >
              <Link className="nav-link text-black" to={`${url}/productsMaintain`}> <StoreMallDirectoryOutlinedIcon /> Products Maintain</Link>
            </Button>
            <Button >
              <Link className="nav-link text-black" to={`${url}/allOrders`}> <ReorderOutlinedIcon /> All Orders</Link>
            </Button>
            <Button >
              <Link className="nav-link text-black" to={`${url}/addProduct`}> <AddBoxOutlinedIcon /> Add Product</Link>
            </Button>
          </div>
        }
          <div className="text-center m-3 mt-5">
            {user?.email && <Link className="nav-link nav-link-custom dashboard-log-out" onClick={logout}><i class="fas fa-sign-out-alt"></i> Log Out</Link>}
          </div>
      </List>
      </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{backgroundColor: 'seaGreen'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            STEAM LAND
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>

          </Route>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/allOrders`}>
            <AllOrders />
          </AdminRoute>
          <AdminRoute path={`${path}/productsMaintain`}>
            <ProductsMaintain />
          </AdminRoute>
          <AdminRoute path={`${path}/addAdmin`}>
            <AddAdmin />
          </AdminRoute>
          <Route path={`${path}/addReview`}>
            <UserReviews />
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders />
          </Route>
        </Switch>
        </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;