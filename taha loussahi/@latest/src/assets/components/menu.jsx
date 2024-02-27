import React from "react";
import 'react-router-dom'
import acceuil from "./accueil";
import contact from "./contact";
import footer from "./footer";



export default function menu(){
    return<>
        <ul>
            <li>
                <navlink href={acceuil}></navlink>
                <navlink href={contact}></navlink>
                <navlink href={footer}></navlink>
            </li>
        </ul>
    
    </>
}