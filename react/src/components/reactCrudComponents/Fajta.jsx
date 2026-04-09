import React from "react";

const Fajta = props => (
  <div>



    {props.fajtak.length > 0 ? (
      props.fajtak.map(fajta => (
        <div className="card lg:card-side bg-base-100 shadow-sm m-10">
          <div className="card-body items-center text-center" key={fajta.id}>
            <h2 className="card-title text-lg">{fajta.nev}</h2>
            <div className="justify-end card-actions">
              <button className="btn btn-primary" onClick={() => { props.editRow(fajta); }}>Modosítás</button>
              <button className="btn btn-primary" onClick={() => props.deleteFajta(fajta.id)}>Törölés</button>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="card lg:card-side bg-base-100 shadow-sm m-10">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-lg">Nincs adat!</h2>
          <p>Jelenleg nincsenek adatok.</p>
        </div>
      </div>
    )}


  </div>
);
export default Fajta;