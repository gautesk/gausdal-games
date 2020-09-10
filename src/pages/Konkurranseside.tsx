import React from "react";
import {konkurranser} from "../static/konkurranser";
import {Konkurranseboks} from "../components/Konkurranseboks";
import "./Konkurranseside.css";

export default function Konkurranseside() {
    return (
        <div className="konkurranser-wrapper">
            <h2>Konkurranser</h2>
            <p>Konkurransene som skal utgjøre denne syvkampen vil annonseres fortløpende i tiden frem mot Gausdal Games 2020.</p>
            <div className="konkurranse-liste-wrapper">
                {konkurranser.map((konkurranse, index) => <Konkurranseboks konkurranse={konkurranse} index={index+1} />)}
            </div>
        </div>
    )
}