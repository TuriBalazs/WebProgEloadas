import React from "react";

const Fajta = props => (
  <div className="card w-96 bg-base-100 card-xl shadow-sm m-5">


    {props.fajtak.length > 0 ? (
      props.fajtak.map(fajta => (

        <div className="card-body" key={fajta.id}>
          <h2 className="card-title">{fajta.nev}</h2>
          <div className="justify-end card-actions">
            <button className="btn btn-primary" onClick={() => { props.editRow(fajta); }}>Modosítás</button>
            <button className="btn btn-primary" onClick={() => props.deleteFajta(fajta.id)}>Törölés</button>
          </div>
        </div>
      ))
    ) : (
      <div className="card-body">
        <h2 className="card-title">Nincs adat!</h2>
        <p>Jelenleg nincsenek adatok.</p>

      </div>
    )}

  </div>

);
export default Fajta;