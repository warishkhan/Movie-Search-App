import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../actions/movieActions';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({search,setSearch}) => {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    if (search.trim()) {
      navigate(`/search?query=${search}`);
    }
  };

  return (
   
    <nav className="navbar navbar-expand-lg bgColor">
  <div className="container">
    <Link className="navbar-brand text-white" to="/">MovieDb</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link text-light" to="/"> Popular</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-light" to="/top-rated">
             Top Rated
           </Link>
        </li>
        
        <li className="nav-item">
        <Link className="nav-link text-light" to="/upcoming">
             Upcoming
           </Link>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
        <input className="form-control me-2" type="search" placeholder="Movie Name" aria-label="Search"  value={search}
            onChange={(event) => setSearch(event.target.value)}/>
        <button className="btn btn-outline-secondary bg-secondary text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
};

export default Navbar;