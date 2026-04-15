function Fetchapi() {
    return (
        <div>
            <h2>Fetch API - CRUD Application</h2>
        <p id="message"></p>
        <h3 id="addedit"></h3>
        <form id="userForm">
            <input type="hidden" id="id"/>
            <div>
                <div>
                    <input type="text" id="name" placeholder="Name" required/>
                </div>
                <div>
                    <input type="email" id="email" placeholder="Email" required/>
                </div>
                <div>
                    <button>Save</button>
                </div>
            </div>
        </form>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody id="userTable">
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Fetchapi