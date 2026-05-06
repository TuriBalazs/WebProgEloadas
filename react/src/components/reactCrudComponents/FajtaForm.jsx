import React, { useState, useEffect } from "react";


const Form = ({ addFajta, updateFajta, updatedFajta, editing }) => {

    // állapot: aktuális űrlap adatok
    const [adat, setAdat] = useState({
        nev: ""
    });

    // ha szerkesztünk, betöltjük az adatot
    useEffect(() => {
        if (updatedFajta) {
            setAdat(updatedFajta);
        }
    }, [updatedFajta]);

    // input változás kezelése
    const valtozas = (e) => {
        const { name, value } = e.target;
        setAdat({ ...adat, [name]: value });
    };

    // mentés
    const kuldes = (e) => {
        e.preventDefault();

        if (!adat.nev) {
            alert("Minden mezőt ki kell tölteni!");
            return;
        }

        if (editing) {
            updateFajta(adat.id, adat);
        } else {
            addFajta(adat);
        }
        console.log(adat)
        // reset
        setAdat({ nev: "" });
    };

    return (
        <form onSubmit={kuldes}>
            <label className="input ml-3">
            <span className="label">Fajta</span>
                <input name="nev" value={adat.fajta} onChange={valtozas} /><br />
            </label>
            
            <button className="ml-5">{editing ? "Módosítás" : "Hozzáadás"}</button>
        </form>
    );
};

export default Form;