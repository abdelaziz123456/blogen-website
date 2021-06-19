import './Logout.css'

function Logout(){
    return (
        <div className='main-div'>
           <div className="bg-primary text-light">
               <div className="container py-2">
                   <i className='fa fa-user fa-3x'></i> <p className="h1 d-inline">Blogen Admin</p>
               </div>
           </div>


           <div className="container w-50 ">
               <div className="card  mx-4  my-4">
                   <div className="card-header">
                       <div className="card-title">
                           <p className="h5">Account Login</p>
                       </div>
                   </div>
                   <div className="card-body">
                       <div className="form-group">
                           <label htmlFor="">Email</label>
                           <input type="email" className="form-control" />
                           <label htmlFor="">Password</label>
                           <input type="password" className="form-control" />
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Logout;