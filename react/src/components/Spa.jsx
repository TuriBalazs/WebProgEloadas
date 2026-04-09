import { useState } from 'react'
import Base64Converter from './apps/Base64converter';
import Tetris from "./apps/tetris/components/Tetris";
import "./apps/tetris/style/tetris.css";

function Spa() {
    const [menu, setMenu] = useState("app1");

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><button onClick={() => setMenu("app1")}>Base 64 konverter</button></li>
                    <li><button onClick={() => setMenu("app2")}>Tetris</button></li>
                </ul>
            </details>

            <div className='items-center'>
                {menu === "app1" && <Base64Converter />}
                {menu === "app2" && <Tetris />}
            </div>
        </div>
    )
}


export default Spa