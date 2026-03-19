import {Link} from "react-router-dom";

function Header({ headerText }) {

    return (
        <div className="bg-info-content navbar py-10">
            <h1 className="text-3xl font-bold mx-5 navbar-start">{headerText}</h1>
            <div className="drawer drawer-end navbar-end mx-5">
                <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-1" className="btn drawer-button">Menü</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><Link to='/'>Címlap</Link></li>
                        <li><Link to='/Javascript'>Javascript</Link></li>
                        <li><Link to='/React'>React</Link></li>
                        <li><Link to='/Spa'>SPA</Link></li>
                        <li><Link to='/Fetchapi'>Fetch</Link></li>
                        <li><Link to='/Axios'>Axios</Link></li>
                        <li><Link to='/Oojs'>OOJS</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header