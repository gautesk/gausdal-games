import React from "react";
import hytta from "../static/bilder/Hytta.jpg";
import "./Forside.css";

function Forside() {

    return (
        <div className="forside-wrapper">
            <p>18.-20. september skal Gausdal Games avholdes for første gang. Arrangementet finner sted på Solbu, en hytte lokalisert like ovenfor Kleiven gård i Øvre Svatsum.
                I en syvkamp med varierte øvelser skal deltakerne utfordres både fysisk og psykisk, for å kåre den ultimate utøver og vinneren av Gausdal Games I.
            </p>
            <img src={hytta} alt="Bilde av hytta" className="hyttebilde"/>

        </div>
    )
}

export default Forside;