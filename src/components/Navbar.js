
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'; 

export default function Navbar(props) {

return( 
    
    <nav className={`navbar text-light navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}> 
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.title}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.link}</Link>
        </li>
      </ul>
  
  {/* onclick wants function not function call */} 

      <div className='d-flex'>

        <div className='bg-primary rounded mx-2' onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px' ,cursor:'pointer'}}></div>
        <div className='bg-success rounded mx-2' onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px' ,cursor:'pointer'}}></div>
        <div className='bg-warning rounded mx-2' onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px' ,cursor:'pointer'}}></div>
        <div className='bg-danger rounded mx-2' onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px' ,cursor:'pointer'}}></div> 
      </div>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
{/* // back ticks also given in curly braces {} i.e. {``} */}
      <div className={`form-check form-switch  text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch"id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode('null')}}/> 
  <label className={`"form-check-label" htmlFor="flexSwitchCheckDefault"`}>{props.mode==='light'?'Enable Dark Mode':'Enable Light Mode'}</label>
</div>
      
    </div>
  </div>
</nav>
);
}

//proptypes

// Navbar.propTypes = {

//     title: PropTypes.string.isRequired,
//     link:PropTypes.string
// }  

Navbar.defaultProps={

  title: 'Set title here',
  link:'About Text here'
};
  