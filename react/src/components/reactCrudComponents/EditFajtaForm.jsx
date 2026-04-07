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
      <label>Név</label>
      <input type="text" name="nev" value={fajta.nev} onChange={handleInputChange}/>
      
      <button>Fajta frissítése</button>
      <button onClick={() => props.setEditing(false)}>Cancel</button>
    </form>
  );
};
export default EditFajtaForm;
