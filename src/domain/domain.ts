

export interface Deltaker {
    navn: string;
    tittel: string;
    arbeidsgiver: string;
    detaljer: {
        alder: string;
        styrke: string;
        svakhet: string;
    }
}

export interface Konkurranse {
    tittel: string;
    bildelenke: string;
    regler: string;
}