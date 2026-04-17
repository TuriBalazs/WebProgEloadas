function Javascript() {
    return (
        <div>
            <div class="employee-form">
                <form onsubmit="event.preventDefault();onFormSubmit();">
                    <div>
                        <label>Kerület</label>
                        <input type="text" name="kerulet" id="kerulet"/>
                    </div>
                    <div>
                        <label>Cím</label>
                        <input type="text" name="cim" id="cim"/>
                    </div>
                </form>
            </div>
            <br />
            <div className="overflow-x-auto">
                <table className="table table-xs" id="hely">
                    <thead>
                        <tr>
                            <th>Kerület</th>
                            <th>Cím</th>

                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Javascript