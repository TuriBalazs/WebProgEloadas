import React, { useState } from "react";
import Fajta from "./reactCrudComponents/Fajta"
import EditFajtaForm from "./reactCrudComponents/EditFajtaForm"
import AddFajtaForm from "./reactCrudComponents/AddFajtaForm"

const React2 = () => {

    const fajtakData = [
        { id: 1, name: "papír" },
        { id: 2, name: "elem" },
        { id: 3, name: "hungarocel" },
        { id: 4, name: "festék" },
        { id: 5, name: "zöldhulladék" },
        { id: 6, name: "lom" }
    ];
    const [fajtak, setFajtak] = useState(fajtakData);
    const [currentFajta, setCurrentFajta] = useState("");
    const [editing, setEditing] = useState(false);

    const addFajta = fajta => {
        fajta.id = fajtak.length + 1;
        setFajtak([...fajtak, fajta]);
    };
    const deleteFajta = id => {
        setEditing(false);
        setFajtak(fajtak.filter(fajta => fajta.id !== id));
    };
    const editRow = fajta => {
        setEditing(true);
        setCurrentFajta(fajta);
    };
    const updateFajta = (id, updatedFajta) => {
        setEditing(false);
        setFajta(fajtak.map(fajta => (fajta.id === id ? updatedFajta : fajta)));
    };


    return (
        <div>
            <h1>CRUD App with Hooks</h1>
            <div>
                <h2>{editing ? "Edit fajta" : "Add fajta"}</h2>
                {!editing ? (
                    <AddFajtaForm
                        addFajta={addFajta}
                    />
                ) : (
                    <EditFajtaForm
                        setEditing={setEditing}
                        currentFajta={currentFajta}
                        setCurrentFajta={setCurrentFajta}
                        updateFajta={updateFajta}
                    />
                )}
            </div>
            <h2>Fajták listája</h2>
            <div className="w-full lg:max-w-full lg:flex">
                <div className="grid grid-cols-3 items-center p-10">
                    <Fajta fajtak={fajtak} editRow={editRow} deleteFajta={deleteFajta} />
                </div>
            </div>
        </div>
    )
}

export default React2