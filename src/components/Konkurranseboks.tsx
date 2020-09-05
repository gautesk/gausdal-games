import React, {useEffect, useState} from "react";
import {Konkurranse} from "../domain/domain";

interface Props {
    konkurranse: Konkurranse
}

export function Konkurranseboks({konkurranse} :Props) {
    const [bilde, setBilde] = useState();

    useEffect(() => {
        import(`./konkurranser/${konkurranse.bildelenke}.jpg`).then(bilde => setBilde(bilde))
    }, [])

    return (
        <div className="konkurranseboks-wrapper">
            <h3>{konkurranse.tittel}</h3>
            {bilde && <img src={bilde.default} className="konkurransebilde" />}
            <p>{konkurranse.regler}</p>
        </div>
    )
}