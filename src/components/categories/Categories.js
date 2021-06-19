function Categories(){
    return (
        <div>
            <div className="bg-success text-light">
                <div className="container py-2">
                    <i className='fa fa-folder fa-3x'></i> <p className="h1 d-inline mx-2">Categories</p>
                </div>
            </div>
            <div className="bg-light py-4">
                <div className="container input-group">
                    <input type="search" className='form-control'  placeholder='Search Here'/>
                    <button className="btn btn-success">Search</button>

                </div>
            </div>

            <div className="container my-4">
                <div className="card">

                
                <div className="card-header">
                    <p className="h3">Latest Categories</p>

                </div>
                <div className="card-body p-0">
                    <table className="table table-striped">
                        <thead>
                            <tr className='bg-dark text-light'>
                                <th>#</th>
                                <th>Title</th>
                                <th>Date</th>
                            </tr>

                        </thead>
                        <tbody>
                        <tr>
                                <td>1</td>
                                <td>Web Development</td>
                                <td>	May 10 2018</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Tech Gadgets</td>
                                <td>	May 11 2018</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Business</td>
                                <td>	May 13 2018</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>health and wellness</td>
                                <td>	May 15 2018</td>
                            </tr>

                        </tbody>
                    </table>

                </div>
                
                </div>
            </div>
            
        </div>
    )
}


export default Categories