import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Home from "./pages/Home/Home/Home";
import Products from "./pages/Products/Products";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Login from "./pages/Login/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Register from "./pages/Login/Register/Register";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Order from "./pages/Order/Order";
import Payment from "./pages/Dashboard/Payment/Payment";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <PrivateRoute path = "/product" >
              <Products />
            </PrivateRoute> 
            <Route path="/productDetails/:_id">
              <ProductDetails />
            </Route>
            <PrivateRoute path="/order/:_id">
              <Order />
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
