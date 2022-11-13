import React from 'react'
import './Header.css'
import { VscBellDot,VscAccount,VscChevronDown } from "react-icons/vsc";
import Logo from './ICSLOGO.png'

function Header() {
  return (
    <div className="header">
      <seclion><img src={Logo} className="Logo" alt='Logo'></img></seclion>
      <ul className="ManuBar">
        <li className="Manu-Down"> <a><VscChevronDown /></a> </li>
        <li className="Manu-Name"> <a>Akkarapol</a> </li>
        <li className="Manu-Acc"> <a><VscAccount /></a> </li>
        <li className="Manu-Bell"> <a><VscBellDot /></a> </li>
       </ul>  
    </div>
  )
}

export default Header