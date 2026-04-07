import React, { useState} from "react";

const AddFajtaForm = props => {
  const [fajta, setFajta] = useState({fajta:""});
  
  const handleInputChange = event => {
    const { nev, value } = event.target;
    setFajta({ ...fajta, [nev]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!fajta.nev) return;
        props.addFajta(fajta);
        setFajta({nev:""});
      }}
    >
      <label>Név</label>
      <input type="text" name="nev" value={fajta.nev} onChange={handleInputChange}/>
      
      <button>Fajta hozzáadása</button>
    </form>
  );
};
export default AddFajtaForm;
