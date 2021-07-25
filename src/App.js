

import Categories from './components/categories/Categories';
import Home from './components/home/Home';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import Edit from './components/edit/Edit';
import Logout from './components/logout/Logout';
import './App.css';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <header>
      <nav className='navbar navbar-expand-md  navbar-dark bg-dark' >
      <div className="container">
      <NavLink className='navbar-brand' to='/blogen-website'>Blogen</NavLink>
      <button className="navbar-toggler" data-toggle='collapse' data-target='#links'>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse  justify-content-between">
        <ul className="navbar-nav">
          <li className="nav-item"><NavLink to="/blogen-website" className="nav-link">Dashboard</NavLink></li>
          <li className="nav-item"><NavLink to="/posts" className="nav-link">Posts</NavLink></li>
        
          <li className="nav-item"><NavLink to="/categories" className="nav-link">Categories</NavLink></li>
          <li className="nav-item"><NavLink to="/users" className="nav-link">Users</NavLink></li>
          </ul>


        <ul className=" navbar-nav">
          

          <li className="nav-item"><NavLink to="/edit" className="nav-link ml-auto"><i className="fa fa-user"></i> Welcome Brad</NavLink></li>
          <li className="nav-item"><NavLink to="/logout" className="nav-link ml-auto"><i className="fa fa-user-times"></i> Logout</NavLink></li>

          
          

          </ul>
          
        
      </div>
      </div>
      </nav>
      </header>




      <section>
        <Route path='/blogen-website' exact component={Home}/>
        <Route path='/categories' exact component={Categories}/>
        <Route path='/users' exact component={Users}/>
        <Route path='/posts' exact component={Posts}/>
        <Route path='/edit' exact component={Edit}/>
        <Route path='/logout' exact component={Logout}/>
       
      </section>











      <footer  className='text-light  bg-dark text-center py-5'>
        <p  >Copyright © 2021 Blogen</p>

      </footer>


     
      
       
    </BrowserRouter>
  );
}

export default App;
