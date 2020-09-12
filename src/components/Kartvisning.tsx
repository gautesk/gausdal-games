import React from "react";
import "./Kart.css";


export default function Kartvisning() {

    return (
        <div className="kart-wrapper">
            <h2>Veibeskrivelse</h2>
            <p>Adressen er Øverbygd 831, Svatsum. Finner du ikke frem, får du ringe Gaute eller Julie.</p>
            <iframe
                title="Solbu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1913.2177587056517!2d9.782196916372543!3d61.34561428240917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466ab8abd3021c35%3A0x8eac4aec982daa3c!2s%C3%98verbygd%20831%2C%202657%20Svatsum!5e0!3m2!1sno!2sno!4v1599921621469!5m2!1sno!2sno"
                className={"kart"}
                aria-hidden="false"
                tabIndex={0}
            />
        </div>
    )
}