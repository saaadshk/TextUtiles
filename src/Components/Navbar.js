import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // const [mystyle, setmystyle] = useState({
  //   color:'black',
  //   backgroundColor: 'white'
  // })
  // const [btntext, setbtntext] = useState("Enable Dark Mode")

  // const togglestyle = () =>{
  //   if (mystyle.color === 'white') {
  //     setmystyle({
  //       color:'black',
  //   backgroundColor: 'white'
  // })
  // console.log("Dark mode enabled");
  //     setbtntext("Enable Dark mode");
  //   }
  //   else{
  //     setmystyle({
  //       color:'white',
  //   backgroundColor: 'black'
  //     })
  //     setbtntext("Enable Light Mode")
  //   }
  // }

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} `} >
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/" style={{color:"#0000fd"}}>TextUtiles</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link style={{color:"#0000fd"}} className="nav-link active" aria-current="page" to="/">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:"#0000fd"}} className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <button type='button' className='setcolorbtn setcolorbtnblue' onClick={props.togglemodeblue}>  </button>
      <button type='button' className='setcolorbtn setcolorbtnred' onClick={props.togglemodered}>  </button>
      <button type='button' className='setcolorbtn setcolorbtngreen' onClick={props.togglemodegreen}>  </button>
      <button type='button' className='setcolorbtn setcolorbtnyellow' onClick={props.togglemodeyellow}>  </button>
      <form className="d-flex" role="search">
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'?'grey':'white'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      </form>
    </div>
  </div>
</nav>
  )
}
