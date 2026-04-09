import { useEffect, useState } from "react";
import axios from "axios";

function Axios() {
    const [helyek, setHelyek] = useState([]);
    const [message, setMessage] = useState("");
    const [cim, setCim] = useState("");
    const [kerulet, setKerulet] = useState("");
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchHelyek();
    }, []);

    const fetchHelyek = async () => {
        const res = await axios.get("api.php");
        setHelyek(res.data.readData);
        setMessage(a => a + " " + res.data.status);
    };

    const submit = async () => {
        var res;
        if (editId) {
            res = await axios.put("api.php", { id: editId, kerulet, cim });
            setEditId(null);
        } else {
            res = await axios.post("api.php", { kerulet, cim });
        }
        setMessage(res.data.status);
        setKerulet("");
        setCim("");
        fetchHely();
    };

    const editHelyek = (hely) => {
        setEditId(hely.id);
        setKerulet(hely.kerulet);
        setCim(hely.cim);
    };

    const deleteHelyek = async (id) => {
        if (!confirm("Kitöröli ezt a helyet?")) return;
        const res = await axios.delete(".api.php", { data: { id } });
        setMessage(res.data.status);
        fetchUsers();
    };

    return (
        <div>
            <p className="badge badge-success badge-xl m-2">{message}</p>
            <h3 className="badge badge-primary badge-xl m-2">React + PHP CRUD</h3>
            <div>
                <input className="input input-neutral m-2" value={kerulet} onChange={(e) => setKerulet(e.target.value)} placeholder="Kerület" />
                <input className="input input-neutral m-2" value={cim} onChange={(e) => setCim(e.target.value)} placeholder="Cím" />
                <button className="btn m-2" onClick={submit}> {editId ? "Update" : "Add"}</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Kerület</th>
                            <th>Cím</th>
                        </tr>
                    </thead>
                    <tbody>
                        {helyek.map((hely) => (
                            <>
                                <tr key={hely.id}>
                                    <td>{hely.id}</td>
                                    <td>{hely.kerulet}</td>
                                    <td>{hely.cim}</td>
                                    <td>
                                        <button className="btn m-2" onClick={() => editHelyek(hely)}>Edit</button>
                                        <button className="btn m-2" onClick={() => deleteHelyek(hely.id)}>Delete</button>
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Axios