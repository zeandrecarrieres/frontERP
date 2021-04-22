import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import './navbar.css'
import Logo from "../assets/logo.png"
import HomeIcon from "../assets/home_icon.svg"
import ClientsIcon from "../assets/clients_icon.svg"
import ProductsIcon from "../assets/products_icon.svg"
import TransactionsIcon from "../assets/transactions_icon.svg"
import UsersIcon from "../assets/users_icon.svg"





function Navbar() {
    const {user, setUser} = useContext(UserContext); 
    


    //Logou function
    const logout = async () => {
        await fetch('http://localhost:3001/user/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });

        setUser(null);
        alert('logout')
    }



    return (
        <div className="side-menu">
             <img className='logo-top' src={Logo} alt=""/>
             <div className="menu-container">
             <ul>
                
                <li><Link to="/" className="menu-item"><img src={HomeIcon} alt=""/> Home</Link></li>
                <h3>TRANSACTION</h3>
                <li><Link to="/transaction" className="menu-item"><img src={TransactionsIcon} alt=""/>Add</Link></li>
                <h3>CLIENT</h3>
                <li><Link to="/register" className="menu-item"><img src={ClientsIcon} alt=""/>Add</Link></li>
                <li><Link to="/list" className="menu-item"><img src={ClientsIcon} alt=""/>List</Link></li>
                <h3>PRODUCT</h3>
                <li><Link to="/prod_register" className="menu-item"><img src={ProductsIcon} alt=""/>Add</Link></li>
                <li><Link to="/prod_list" className="menu-item"><img src={ProductsIcon} alt=""/>List</Link></li>
                {/* { !user ? 
                <>
                <h3>USER</h3>
                <li><Link to="/user_register" className="menu-item"><img src={UsersIcon} alt=""/>Add User</Link></li>
                </>
                :
                <>
                </>
                } */}
                <h3>USER</h3>
                <li><Link to="/user_register" className="menu-item"><img src={UsersIcon} alt=""/>Add</Link></li>
            </ul>
            { user ? <button onClick={logout} className="sign-out">SIGN-OUT</button> : ''}
             </div>
           
        </div>
    )
}

export default Navbar
