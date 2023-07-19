import React, { useState } from 'react'
import Modal from './Modal'
const Profile = ({el}) => {
  const [isOpenModal, setisOpenModal]=useState(false)
    return (
      <div className='Profile'>
        {isOpenModal?<Modal el={el} setOpenModal={setisOpenModal}/> :null}
          <h1>Full Name : {el.Fname}</h1>
          <h2>Bio : {el.bio}</h2>
          <img src={el.photo} alt=''></img>
          <h2> Profession: {el.profession}</h2>
          <button onClick={()=>setisOpenModal(true)}>Click Me</button>       
      </div>
    )
  }
export default Profile 