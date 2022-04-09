import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="Navbar">
            <div className="HeaderContainer">
                <h1 className="Header-h1">Casa Domotica Arduista</h1>
                <div className="Header-Pages">
                    <Link
                        className="App-link-selected App-link"
                        to={""}
                        id="Home-link"
                        onClick={() => {
                            document
                                .getElementById("Home-link")
                                .classList.add("App-link-selected");
                            document
                                .getElementById("Controlli-link")
                                .classList.remove("App-link-selected");
                        }}
                    >
                        Home
                    </Link>
                    <Link
                        className="App-link"
                        to={"/controlli"}
                        id="Controlli-link"
                        onClick={() => {
                            document
                                .getElementById("Controlli-link")
                                .classList.add("App-link-selected");
                            document
                                .getElementById("Home-link")
                                .classList.remove("App-link-selected");
                        }}
                    >
                        Controlli
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
