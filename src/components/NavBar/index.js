import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav className="navbar navbar-light bg-primary">
            <span className="navbar-brand">Clicky Game</span>
            <div className="scoring">
                <h3 className="scores">Current Score: {props.currentscore}</h3>
                <h3 className="highscore">High Score: {props.highscore}</h3>
                <h5 className="message">{props.message}</h5>
            </div>
        </nav>
    );
}

export default NavBar;
