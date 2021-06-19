import { NavLink } from "react-router-dom";
import avatar from '../img/avatar.png';

function Edit(){
    return (
        <div>
            <div className="bg-primary py-2 text-light">
                <div className="container">
                    <i className='fa fa-user fa-3x'></i><p className="h1 d-inline mx-2">Edit Profile</p>
                </div>
            </div>


            <div className="bg-light py-4 mb-3">
                <div className="container row border-box">
                    <NavLink to='/'  className="col-md btn btn-light m-1 ">Back To Dashboard</NavLink>

                   
                    <NavLink to='#' className="col-md btn btn-success m-1"><i className='fa fa-lock '></i> Change Pass</NavLink>

                    <NavLink to='#' className="col-md btn btn-danger m-1"><i className='fa fa-trash '></i> Delete Account</NavLink>
                </div>
            </div>

            <div className=" row px-4 ">
                <div className="col-sm-12 col-md-9 card  p-0">
                    <div className="card-header ">
                        <div className="h2">Edit Profile</div>
                    </div>
                    <div className="card-body ">
                        <div className="form-group">
                            <label className='my-2' >Name</label>
                            <input type="text" className="form-control" placeholder='Brad Traversy' />
                            <label  className='my-2'>Email</label>
                            <input type="email" className="form-control" placeholder='test@test.com' />
                            <label  className='my-2'>Bio</label>
                            <textarea name="" id="" cols="30" rows="10" className="form-control my-2"></textarea>


                        </div>
                    </div>

                </div>

                <div className="col-sm-12 col-md-3 ">
                    <p className="h1">Your Avatar</p>
                    <img src={avatar} className='img-fluid' alt="" />
                    
                    <button className="btn btn-primary w-100">Edit Image</button>
                    <button className="btn btn-danger my-2 w-100 ">Delete image </button>
                    

                </div>

            </div>





        </div>
    )
}


export default Edit;