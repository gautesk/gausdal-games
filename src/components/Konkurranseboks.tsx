import React, {useEffect, useState} from "react";
import {Konkurranse} from "../domain/domain";

interface Props {
    konkurranse: Konkurranse
    index: number
}

export function Konkurranseboks({konkurranse, index} :Props) {
    const [bilde, setBilde] = useState();

    useEffect(() => {
        if (konkurranse.bildelenke) {
            import(`./konkurranser/${konkurranse.bildelenke}.jpg`).then(bilde => setBilde(bilde))
        }
    }, [konkurranse.bildelenke])

    return (
        <div className="konkurranseboks-wrapper">
            <h3>{index + ". " + konkurranse.tittel}</h3>
            {bilde && <img src={bilde.default} className="konkurransebilde" alt={`Bilde av ${konkurranse.tittel}`} />}
            <p>{konkurranse.regler}</p>
            {konkurranse.favoritt && <p><strong>Forhåndsfavoritt:</strong> {konkurranse.favoritt}</p>}
        </div>
    )
}