import React, {useEffect, useState} from "react";
import {Deltaker} from "../domain/domain";

interface Props {
    deltaker: Deltaker
}

export default function DeltakerBoks({deltaker} : Props) {
    const [bilde, setBilde] = useState();

    useEffect(() => {
        import(`./deltakere/${deltaker.navn}.jpeg`).then(bilde => setBilde(bilde))
    }, [deltaker.navn])
    return (
        <ul className="deltakerboks-liste">
            {bilde && <img src={bilde.default} alt={"Bilde av " + deltaker.navn} className="deltakerbilde"/>}
            <li><strong>{deltaker.navn}</strong></li>
            <li><i>{deltaker.tittel}</i></li>
            <li style={{marginBottom: "10px"}}><i>{deltaker.arbeidsgiver}</i></li>
            {Object.entries(deltaker.detaljer).map(entry => <li className="deltaker-liste-detalj"><strong>{storForbokstav(entry[0])}: </strong>{entry[1]}</li>)}
        </ul>
    )
}

function storForbokstav(ord: string) : string {
    return ord.slice(0,1).toUpperCase() + ord.slice(1)
}