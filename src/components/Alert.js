import React from 'react'
//import PropTypes from 'prop-types'

  function Alert(props) {

   const capitalize = (word) =>{
   
     const lower = word.toLowerCase();
     return lower.charAt(0).toUpperCase() + lower.slice(1);

   } 

  return (
    // props.alert && or if(props.alert){} else{} is same // alert-warning == alert-${props.alert.type}
    props.alert &&
    <div>  
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {capitalize(props.alert.type)} <strong>: {props.alert.msg} </strong> 
        {/* <button  
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    </div>
  );
}

export default Alert