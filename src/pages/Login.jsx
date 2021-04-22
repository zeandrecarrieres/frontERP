import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../UserContext";
import './login.css'
import Logo from "../assets/logo.png"


const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    

    await fetch(process.env.REACT_APP_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const response = await fetch(process.env.REACT_APP_API, {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const content = await response.json();
    console.log(content)

    if (content._id) {
      setUser(content);
      setRedirect(true);
    }

  };

  if (user) {
    return <Redirect to="/transaction" />;
  }
  if (redirect) {
    return <Redirect to="/transaction" />;
  }

  return (
    <div className="home">
    <div className="login-container" >
    <img className="logo" src={Logo} alt="logo"/>
    <div className="form-group">
      <form onSubmit={submit}>
        

        <input
          type="email"
          placeholder="name@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>
        
      </form>
    </div>
    </div>
    {/* // Si vous n'avez pas de compte inscrivez-vous <Link to='/user_register'> */}
    </div>
  );
};

export default Login;

// import React, { useContext, useState } from 'react'
// import { Redirect } from 'react-router-dom'
// import { UserContext } from '../UserContext';
// import './login.css'
// import Logo from "../assets/logo.png"

// const Login = () => {
//     const {user, setUser} = useContext(UserContext);

//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");
//     const [redirect,setRedirect] = useState(false);

//     const submit = async (e)=>{
//         e.preventDefault();

//         await fetch('http://localhost:3001/user/login', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             credentials: 'include',
//             body: JSON.stringify({
//                 email,
//                 password
//             })
//         });

//         const response = await fetch('http://localhost:3001/user', {
//             headers: {'Content-Type': 'application/json'},
//             credentials: 'include',
//         })

//         const content = await response.json();

//         if(content._id){
//             setUser(content);
//         }

//         setRedirect(true);
//     }

//     if(user){
//         return <Redirect to="/" />;
//     }
//     if(redirect){
//         return <Redirect to="/transaction" />;
//     }

//     return (
//         <div className="home">
//             <div className="login-container" >
//             <img className="logo" src={Logo} alt="logo"/>
//                 <form onSubmit={submit}>
//                 <input type="email" required value = {email} placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)} />
//                 <input type="password" required value = {password}  placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
//                 <button type="submit" className="login-btn">ENTRAR</button>
//                 <a href="//user_register" className="login-create">CRIAR CONTA</a>
//                 </form>

//             </div>
//         </div>
//     )
// }

// export default Login
