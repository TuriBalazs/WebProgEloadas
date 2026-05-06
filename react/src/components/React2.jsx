import React, { useState } from "react";
import Fajta from "./reactCrudComponents/Fajta"
import Form from "./reactCrudComponents/FajtaForm"

const React2 = () => {

    const fajtakData = [
        { id: 1, nev: "papír" },
        { id: 2, nev: "elem" },
        { id: 3, nev: "hungarocel" },
        { id: 4, nev: "festék" },
        { id: 5, nev: "zöldhulladék" },
        { id: 6, nev: "lom" }
    ];
    const [fajtak, setFajtak] = useState(fajtakData);
    const [currentFajta, setCurrentFajta] = useState("");
    const [editing, setEditing] = useState(false);

    const addFajta = fajta => {
        fajta.id = fajtak.length + 1;
        setFajtak([...fajtak, fajta]);
    };
    const deleteFajta = id => {
        setFajtak(fajtak.filter(fajta => fajta.id !== id));
    };
    const editRow = fajta => {
        setEditing(true);
        setCurrentFajta(fajta);
    };
    const updateFajta = (id, updatedFajta) => {
        setEditing(false);
        setFajtak(fajtak.map(fajta => (fajta.id === id ? updatedFajta : fajta)));
    };


    return (
        <div className="w-full">
            <h1 className="badge badge-primary badge-xl m-2">React CRUD aplikáció!</h1>
            <div className="w-full items-center">
                <div className="badge badge-primary badge-lg m-2"><h2>{editing ? "Edit fajta" : "Add fajta"}</h2></div>
                    <Form
                        addFajta = {addFajta}
                        editing={editing}
                        updatedFajta={currentFajta}
                        updateFajta={updateFajta}
                    />
            </div>
            <h2 className="badge badge-primary badge-lg m-2">Fajták listája:</h2>
            <div className="w-full">
                <div>
                    <Fajta fajtak={fajtak} editRow={editRow} deleteFajta={deleteFajta} />
                </div>
            </div>
        </div>
    )
}

export default React2