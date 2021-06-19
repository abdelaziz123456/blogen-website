function Users(){
    return(
        <div>
            <div className="bg-warning">
                <div className="container text-light py-3">
                    <i className='fa fa-users fa-2x'></i> <p className="h1 d-inline">Users</p>
                </div>
            </div>

            <div className="bg-light">
                <div className="container input-group py-4">
                    <input type="search" className="form-control" placeholder='Search Here' />
                    <button className="btn btn-warning">Search</button>

                </div>
            </div>

            <div className="container mb-4">
                <div className="card">
                    <div className="card-header">
                        <h2>latest Users</h2>

                    </div>
                    <div className="card-body p-0">
                        <table className="table table-striped">
                            <thead>
                                <tr className='bg-dark text-light'>
                                    <th>#</th>
                                    <th>name</th>
                                    <th>Email</th>
                                </tr>

                            </thead>
                            <tbody>

                                <tr>
                                    <td>1</td>
                                    <td>John Doe</td>
                                    <td>jdoe@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Harry White</td>
                                    <td>harry@yahoo.com</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Mary Johnson</td>
                                    <td>mary@gmail.com</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>



        </div>
    )
}


export default Users;