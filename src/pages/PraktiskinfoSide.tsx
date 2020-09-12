import React from "react";
import Pakkeliste from "./Pakkeliste";
import Kartvisning from "../components/Kartvisning";

export default function PraktiskinfoSide() {
    return (
        <div>
            <Kartvisning />
            <Pakkeliste />
        </div>
    )
}