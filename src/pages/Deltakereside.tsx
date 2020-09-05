import React from "react";
import { deltakere } from "../static/deltakere";
import DeltakerBoks from "../components/DeltakerBoks";
import "./Deltakerside.css"

export default function Deltakereside() {
    return (
        <>
            <h2>Deltakere 2020</h2>
            <div className="deltakerboks-wrapper">
                {deltakere.map((deltaker) => <DeltakerBoks deltaker={deltaker} />)}
            </div>
        </>
    )
}