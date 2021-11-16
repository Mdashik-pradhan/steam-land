import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Home from "./pages/Home/Home/Home";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Register from "./pages/Login/Register/Register";
import Order from "./pages/Order/Order";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/product">
              <Products />
            </Route> 
            
            <Route path="/order/:_id">
              <Order />
            </Route>
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
