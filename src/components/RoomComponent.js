import React from "react";
import "../App.css";
import lightOff from "../images/light-off.png";
import lightOn from "../images/light-on.png";
import offButton from "../images/off-button.png";
import onButton from "../images/on-button.png";

export default function RoomComponent(props) {
    var eventOnClickButton = {
        "Lampada 1": 0,
        "Lampada 2": 0,
        Ventola: 0,
        Tapparelle: 0,
        Cancello: 0,
        Antifurto: 0,
    };
    function _chooseIcon(controllo) {
        if (controllo.includes("Lampada")) {
            return lightOff;
        } else if (
            controllo.includes("Antifurto") ||
            controllo.includes("Tapparelle") ||
            controllo.includes("Cancello") ||
            controllo.includes("Ventola")
        ) {
            return offButton;
        }
    }
    function buttonClick(control, room) {
        if (eventOnClickButton[control] === 0 && control.includes("Lampada")) {
            eventOnClickButton[control] = 1;
            document.getElementById(room + control + "Img").src = lightOn;
            window.location.href = "/controlli#ledON";
        } else if (eventOnClickButton[control] === 1 && control.includes("Lampada")) {
            eventOnClickButton[control] = 0;
            document.getElementById(room + control + "Img").src = lightOff;
            window.location.href = "/controlli#ledOFF";
        }
        if (eventOnClickButton[control] === 0 && !control.includes("Lampada")) {
            eventOnClickButton[control] = 1;
            document.getElementById(room + control + "Img").src = onButton;
        } else if (eventOnClickButton[control] === 1 && !control.includes("Lampada")) {
            eventOnClickButton[control] = 0;
            document.getElementById(room + control + "Img").src = offButton;
        }
        console.log(control + "-" + eventOnClickButton[control]);
        var xhr = new XMLHttpRequest();
        xhr.send(control + "-" + eventOnClickButton[control]);
    }
    return (
        <div className="containerRoomComponent">
            <h2>{props.Room}</h2>
            {props.Controlli.map((control) => (
                <button
                    id={props.Room + control}
                    className="buttonRoomComponent"
                    onClick={() => buttonClick(control, props.Room)}
                >
                    <img
                        id={props.Room + control + "Img"}
                        src={_chooseIcon(control)}
                        width="40vh"
                        alt="#"
                    />
                    <h3 style={{ textAlign: "center" }}>{control}</h3>
                </button>
            ))}
        </div>
    );
}
