import { useEffect, useState } from "react";
import axios from "axios";

function Axios() {
    const [hely, setHely] = useState([]);
    const [message, setMessage] = useState("");
    const [cim, setCim] = useState("");
    const [kerulet, setKerulet] = useState("");
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchHely();
    }, []);

    const fetchHely = async () => {
        const res = await axios.get("api.php");
        setHely(res.data.readData);
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

    const editHely = (hely) => {
        setEditId(hely.id);
        setKerulet(hely.kerulet);
        setCim(hely.cim);
    };

    const deleteHely = async (id) => {
        if (!confirm("Kitöröli ezt a helyet?")) return;
        const res = await axios.delete("api.php", { data: { id } });
        setMessage(res.data.status);
        fetchUsers();
    };

    return (
        <div>
            <p>{message}</p>
            <h3>React + PHP CRUD</h3>
            <div>
                <input value={kerulet} onChange={(e) => setKerulet(e.target.value)} placeholder="Kerület" />
                <input value={cim} onChange={(e) => setCim(e.target.value)} placeholder="Cím" />
                <button onClick={submit}> {editId ? "Update" : "Add"}</button>
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
                        {hely?.map((hely) => (
                            <>
                                <tr>
                                    <td>{hely.id}</td>
                                    <td>{hely.kerulet}</td>
                                    <td>{hely.cim}</td>
                                    <td>
                                        <button onClick={() => editHely(hely)}>Edit</button>
                                        <button onClick={() => deleteHely(hely.id)}>Delete</button>
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