import React from 'react'
import {
    Link,
    Routes,
  } from "react-router-dom";

export default function header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Main</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">TODO <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link" to="/calculator">Calculator <span className="sr-only"></span></Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link" to="/recipe">Recipe <span className="sr-only"></span></Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link" to="/downloader">Downloader <span className="sr-only"></span></Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link" to="/instagram">Instagram <span className="sr-only"></span></Link>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    )
}
