import "../App.css";
import { Link } from "react-router-dom";
import RoomComponent from "./RoomComponent";
import housePlant from "../images/house-plant.png";
function ControlliPage() {
    var nameRooms = ["Salone", "Camera 1", "Camera 2", "Bagno", "Studio", "Esterno"];
    var RoomElements = {
        "Salone": ["Lampada 1", "Lampada 2", "Antifurto"],
        "Camera 1": ["Lampada 1", "Lampada 2", "Tapparelle"],
        "Camera 2": ["Lampada 1", "Lampada 2", "Tapparelle"],
        "Bagno": ["Lampada 1", "Ventola"],
        "Studio": ["Lampada 1", "Lampada 2", "Tapparelle"],
        "Esterno": ["Lampada 1", "Lampada 2", "Cancello"]
    };

    return (
        <div className="containerControlliPage">
            <Link to={"/controlli"}>
                <img src={housePlant} alt="" width={"50%"} />
            </Link>
            <div className="gridRoomComponent" key={Math.floor(Math.random * 20)}>
                {nameRooms.map(room => <RoomComponent Room={room} Controlli={RoomElements[room]} key={Math.floor(Math.random * 66)} />)}
            </div>
        </div>
    );
}
export default ControlliPage;
