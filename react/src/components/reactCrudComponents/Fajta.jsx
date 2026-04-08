import React from "react";

const Fajta = props => (
  <div className="card bg-neutral text-neutral-content w-96">


    {props.fajtak.length > 0 ? (
      props.fajtak.map(fajta => (

        <div className="card-body items-center text-center" key={fajta.id}>
          <h2 className="card-title">{fajta.nev}</h2>
          <div className="justify-end card-actions">
            <button className="btn btn-primary" onClick={() => { props.editRow(fajta); }}>Modosítás</button>
            <button className="btn btn-primary" onClick={() => props.deleteFajta(fajta.id)}>Törölés</button>
          </div>
        </div>
      ))
    ) : (
      <div className="card-body items-center text-center">
        <h2 className="card-title">Nincs adat!</h2>
        <p>Jelenleg nincsenek adatok.</p>

      </div>
    )}

  </div>

);
export default Fajta;