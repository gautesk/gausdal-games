import React from "react";
import "./Pakkeliste.css"

export default function Pakkeliste() {
    return(
        <>
            <h2>Pakkeliste</h2>
            <ul className="pakkeliste-wrapper">
                <li>Sengetøy</li>
                <li>Enkeltlaken (Larry/Magna: Dobbeltlaken)</li>
                <li>Håndkle</li>
                <li>Toalettsaker</li>
                <li>Varme klær for utendørsleker (husk at det er høst, det kan bli kjølig å stå i ro)</li>
                <li>Klær egnet for en liten (og bratt) gåtur</li>
                <li>Klær egnet for innendørshygge</li>
                <li>Termokopp (dersom du vil ha med deg kaffe ut)</li>
                <li>Vannflaske</li>
                <li>Alkohol. Vi ser for oss kosedrikking fredag, kanskje noen birras under konkurransene lørdag og at man får brukbar promille lørdag kveld. Suit yourself.</li>
            </ul>
        </>
    )
};