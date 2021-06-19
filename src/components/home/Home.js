
import { NavLink } from 'react-router-dom';
import './Home.css'
function Home(){
    return(
        <div>
            <div className='bg-primary py-2'>
            <div className="container text-light font-weight-bold">
            <i className="fa fa-cog fa-3x  " aria-hidden="true"></i>
            <h1 className="display-5 d-inline mx-3">Dashboard</h1>
            </div>
            </div>


            {/*section of buttons */}
            <div className="container py-4">
                <a href='#' className="btn btn-primary mx-4" data-toggle='modal' data-target='#addPost'><i class="fa fa-plus" aria-hidden="true"></i> Add Post</a>
                <a href='#' className="btn btn-success mx-4" data-toggle='modal' data-target='#addCategory'><i class="fa fa-plus" aria-hidden="true"></i> Add Categoriy</a>
                <a href='#' className="btn btn-warning mx-4" data-toggle='modal' data-target='#addUser'><i class="fa fa-plus" aria-hidden="true"></i> Add User</a>


            {/*section of modals */}
                <div className="modal fade" id='addPost' >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header bg-primary text-white">
                                <h5 className='modal-title'>Add Post</h5>
                                <button className='close btn' data-dismiss='modal'><span>&times;</span></button>
                            </div>
                            <div className="modal-body">
                              <form>
                                  <div className="form-group">
                                      <label For="title">Title</label>
                                      <input type="text" id='title' class='form-control' />
                                      <label For="category">Category</label>
                                      <select className='form-control'>
                                          <option value="web-development">Web Development</option>
                                          <option value="Tech-Gadgects">Tech Gadgects</option>
                                          <option value="business">Business</option>
                                          <option value="health-willnesses">health willnesses</option>

                                      </select>
                                      <label htmlFor="image"></label>
                                      <input id='image' type="file" className='form-control' />
                                      <p className="form-text">max size 3mb</p>
                                      <label for='body'>Body</label>
                                      <textarea name="message" id="body" cols="30" rows="7" className="form-control"></textarea>
                                  </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                                <button className='btn btn-primary' data-dismiss='modal'>Save Changes</button>
                                
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

            <div className="modal fade" id='addCategory'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-success text-light">
                            <h5 className="modal-title ">Add Category</h5>
                            <button className='close btn'><span>&times;</span></button>

                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" />
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button data-dismiss='modal' className='btn btn-success'>Save Changes</button>

                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id='addUser'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-warning text-light">
                            <h5 className="modal-title">Add user</h5>
                            <button className="close btn" data-dismiss='modal'><span>&times;</span></button>
                        </div>


                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className='form-control my-2' />
                                <label htmlFor="email">Email</label>
                                <input type="email" className='form-control my-2' />
                                <label htmlFor="password">Password</label>
                                <input type="password" className='form-control my-2' />
                                <label htmlFor="conPassword">Confirm Password</label>
                                <input type="password" className='form-control my-2' />
                            </div>

                        </div>


                        <div className="modal-footer">
                            <button class='btn btn-warning' data-dismiss='modal'>Save Changes</button>

                        </div>
                    </div>
                </div>

            </div>

            {/* post tables section*/ }
            <div className="px-3 row border-box justify-content-center ">
                <div className="col-sm-12 col-md-9">
                <table className="table table-striped  table-bordered col-sm-6">
                    <thead>
                    <tr className='bg-dark bg- text-light font-size-large'>
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
                <div className="col-md-3 col-sm-8 ">
                    <div className='text-center text-light bg-primary px-2 py-3 border rounded' >
                        <h5>Posts</h5>
                        <i className='fa fa-pencil fa-3x'></i> <span className="display-3 ">6</span>
                        <br></br>
                        <NavLink to='/posts' className="btn btn-primary border border-light mt-3" >View</NavLink>

                    </div>
                    <div className='text-center text-light bg-success  mt-3 p-3 border rounded' >
                        <h5>Categories</h5>
                        <i className='fa fa-folder fa-3x'></i> <span className="display-3 ">6</span>
                        <br></br>
                        <NavLink to='/categories' className="btn btn-success border border-light mt-3" >View</NavLink>

                    </div>
                    <div className='text-center text-light bg-warning  mt-3 p-3 border rounded' >
                        <h5>Users</h5>
                        <i className='fa fa-users fa-3x'></i> <span className="display-3 ">6</span>
                        <br></br>
                        <NavLink to='/users' className="btn btn-warning border text-light border-light mt-3" >View</NavLink>

                    </div>

                </div>

                



            </div>












            



          







            
        </div>
    )
}

export default Home;