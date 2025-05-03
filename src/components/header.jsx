import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './style.css'
export default function Header() {
    return (
        <header className="anaHeader">
            <img className="logo" src="public/assets/iteration-1/logo.svg" />
            <p className="firsat">fırsatı kaçırma</p>
            <p className="kod">KOD ACIKTIRIR </p>
            <p className="pizza">PIZZA, DOYURUR </p>
            <Link to="/siparis"><button type="button" className="btnaciktim">ACIKTIM</button></Link>
        </header>
    )
}