import React from 'react'
import PropTypes from 'prop-types'

function Profile(props) {
   
  return (
    <div >
        <h1>{props.person.fullName}</h1>
        <h1>{props.person.bio}</h1>
        <h1>{props.person.profession}</h1>
        {props.children}
         
       
        </div>
  )


}
Profile.defaultProps={
    fullName:"This a default name",
    bio:"This a default bio",
    profession:"This is a default profession"
}
Profile.propTypes={
    fullName:PropTypes.string.isRequired,
    bio:PropTypes.string.isRequired,
    profession:PropTypes.string.isRequired,


}
export default Profile