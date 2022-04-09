import React from "react";
import { Link } from "react-router-dom";
import housePlant from "../images/house-plant.png";
import "../App.css";

function Home() {
    return (

        <div className="home" style={{ textAlign: "center", padding: "10px" }}>
            <Link to={"/controlli"} onClick={() => {
                document
                    .getElementById("Controlli-link")
                    .classList.add("App-link-selected");
                document
                    .getElementById("Home-link")
                    .classList.remove("App-link-selected");
            }}>
                <img src={housePlant} alt="" width={"70%"} style={{ borderRadius: "10px" }} />
            </Link>
        </div>
    )
}
export default Home;
