import React, { PropTypes } from 'react'

const UserDetailsWrapper = (props) => {
  return (
      <div className='col-sm-6'>
        <p className='lead'>{props.header}</p>
        {props.children}
      </div>
  )
};

UserDetailsWrapper.propTypes = {
  header: PropTypes.string.isRequired
};

export default UserDetailsWrapper;