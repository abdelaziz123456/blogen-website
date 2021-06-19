import './Posts.css'

function Posts(){
    return (
        <div>
            <div className='bg-primary py-2 '>
                <div className="container text-light">
                <i className='fa fa-pencil fa-3x '></i><p className='display-4 d-inline mx-3'>Posts</p>

                </div>

            </div>
            <div className='bg-light py-2 mb-4'>
                <div className="container text-light navbar ">
                    <form className='input-group'>
                        <input type="search" className="form-control" placeholder='Search here' />
                        <button className='btn btn-primary d-inline' type='submit'>Search</button>
                    </form>
                

                </div>

            </div>


            {/*posts table */}

            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>Latest Posts</h3>

                    </div>
                    <div className="card-body p-0">
                    <table className="table table-striped ">
                    <thead>
                        <tr className='bg-dark text-light'>
                            <th>#</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Date</th>
                        </tr>

                    </thead>
                    <tbody>
                    <tr >
                        <td>1</td>
                        <td>Post One</td>
                        <td>Web Development</td>
                        <td>May 10 2018</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Post Two</td>
                        <td>Tech Gadgets</td>
                        <td>May 11 2018	
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Post Three</td>
                        <td>Web Development</td>
                        <td>May 13 2018</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Post Four</td>
                        <td>Business</td>
                        <td>May 15 2018</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Post Five</td>
                        <td>Web Development</td>
                        <td>May 17 2018</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Post Six</td>
                        <td>Health and wellness</td>
                        <td>May 20 2018</td>
                    </tr>


                    </tbody>
                </table>

                    </div>
                    <div className="card-footer">
                        <nav>
                            <ul className="pagination justify-content-center">
                                <li classNmae="page-item">
                                    <a href="#" className="page-link">Previous</a>

                                </li>
                                <li classNmae="page-item">
                                    <a href="#" className="page-link">1</a>
                                    

                                </li>
                                <li classNmae="page-item">
                                <a href="#" className="page-link">2</a>

                                </li>
                                <li classNmae="page-item">
                                <a href="#" className="page-link">3</a>

                                </li>
                                <li classNmae="page-item">
                                <a href="#" className="page-link">next</a>

                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default Posts;