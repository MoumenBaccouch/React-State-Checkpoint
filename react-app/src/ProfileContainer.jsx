import React from 'react'
import Profile from './Profile'

const Profile_Container = ({ppl}) => {
    return (
      <div >
         {ppl.map(el=><Profile el={el}/>)}
      </div>
    )
  }
  
export default Profile_Container
