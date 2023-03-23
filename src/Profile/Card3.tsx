// import logo from '../../public/images/dropdown-img/logo.svg';
// import user from '../../src/dropdown-img/user.png';
import edit from '../../src/dropdown-img/edit.png';
import inbox from '../../src/dropdown-img/envelope.png';
import settings from '../../src/dropdown-img/settings.png';
import help from '../../src/dropdown-img/question.png';
import logout from '../../src/dropdown-img/log-out.png';
// import './App.css';

import React, {useState, useEffect, useRef} from 'react';

function Card3() {

  const [open, setOpen] = useState(true);

  let menuRef = useRef(null);
  // let menuRef2 = menuRef.current.va

  useEffect(() => {
    let handler = (e:any)=>{
      if(!menuRef.current)
      {
        setOpen(false);
        console.log(menuRef.current);
      }     
      else{

      } 
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={"https://qph.cf2.quoracdn.net/main-qimg-54166a525ee4fb3097d260173688c157-lq"}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>The Kiet<br/><span>Website Designer</span></h3>
          <ul>
            <DropdownItem img = {"https://qph.cf2.quoracdn.net/main-qimg-54166a525ee4fb3097d260173688c157-lq"} text = {"My Profile"}/>
            <DropdownItem img = {edit} text = {"Edit Profile"}/>
            <DropdownItem img = {inbox} text = {"Inbox"}/>
            <DropdownItem img = {settings} text = {"Settings"}/>
            <DropdownItem img = {help} text = {"Helps"}/>
            <DropdownItem img = {logout} text = {"Logout"}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props:any){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default Card3;
