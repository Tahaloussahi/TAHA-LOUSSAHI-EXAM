import React from "react";
import footer from "./footer";

export default function contact(){
    return<>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
            <span class="navbar-text">
            Navbar text with an inline element
            </span>
            </div>
            <navlink href={footer}></navlink>
        </nav>
    </>
}