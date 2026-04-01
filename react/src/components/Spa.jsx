import { useState } from 'react'
import Base64Converter from './apps/Base64converter';
import Tetris from "./apps/tetris/components/Tetris";
import "./apps/tetris/style/tetris.css";

function Spa() {
    const [menu, setMenu] = useState("app1");

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <button className="btn btn-ghost text-xl" onClick={() => setMenu("app1")}>Base 64 konverter</button>
                <button className="btn btn-ghost text-xl" onClick={() => setMenu("app2")}>Tetris</button>
            </div>
            <div>
                {menu === "app1" && <Base64Converter />}
                {menu === "app2" && <Tetris />}
            </div>
        </div>
    )
}


export default Spa