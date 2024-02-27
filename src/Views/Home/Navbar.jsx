import { useState, useEffect } from "react";
import {Link} from "react-scroll";

function Navbar(){
    //useState is a hook to manage the state of variable 'NavActive'. 
    //The useState hook returns an array with two elements: the current state value (NavActive) and a function to update that value (setNavActive).
    const [NavActive, setNavActive] = useState(false);        

    const toggleNav = () => {
        setNavActive(!NavActive)
    }
    const closeMenu = () => {
        setNavActive(false)
    }
    useEffect(()=>{

    })
}