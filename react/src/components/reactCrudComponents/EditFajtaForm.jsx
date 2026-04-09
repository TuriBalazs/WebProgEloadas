import React, { useState, useEffect } from "react";

const EditFajtaForm = props => {
  const [fajta, setFajta] = useState(props.currentFajta);

  const handleInputChange = event => {
    const { nev, value } = event.target;
    setFajta({ ...fajta, [nev]: value });
  };

  useEffect(() => {
    setFajta(props.currentUser);
  }, [props]);
  
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateFajta(fajta.id, fajta);
      }}
    >
      <label className="input m-2">
        <span className="label">Név</span>
        <input type="text" className="input" name="nev" value={fajta.nev} onChange={handleInputChange} />
      </label>
      
      <button className="btn">Fajta frissítése</button>
      <button className="btn" onClick={() => props.setEditing(false)}>Cancel</button>
    </form>
  );
};
export default EditFajtaForm;
