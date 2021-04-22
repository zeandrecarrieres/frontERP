import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect, useMemo, useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import List from "./pages/List";
import ListProduct from "./pages/ListProduct";
import EditProduct from "./pages/EditProduct";
import RegisterProduct from "./pages/RegisterProduct";
import AddTransaction from "./pages/AddTransaction";
import RegisterUser from "./pages/RegisterUser";
import { UserContext } from "./UserContext"

function App() {
  const [user,setUser] = useState(null);

  const value = useMemo(()=> ({user,setUser}), [user,setUser]);

  useEffect(()=>{
    (
        async () => {
            // const response = await fetch('http://localhost:3001/user', {
            const response = await fetch(REACT_APP_API_URL, {
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
            })

            const content = await response.json();

            if(content._id){
                setUser(content);
            }

        }
    )()
  }, [])
  return (

   

      <div className="App">
        <BrowserRouter>
        <UserContext.Provider value={value}>
          <div className="menu"></div>

          <Navbar />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/transaction" component={AddTransaction} />
            <Route path="/register" component={Register} />
            <Route path="/list" component={List} />
            <Route path="/prod_register" component={RegisterProduct} />
            <Route path="/prod_edit/:id" component={EditProduct} />
            <Route path="/prod_list" component={ListProduct} />
            <Route path="/user_register" component={RegisterUser} />
            
            <Register />
          </Switch>
          </UserContext.Provider>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
