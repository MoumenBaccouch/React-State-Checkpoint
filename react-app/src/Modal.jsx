import React from 'react'

const Person = ({el,setOpenModal}) => {
    
    return (
    <div className='modal'>
        <div className="modal_container">
            <button className='delete' onClick={()=>setOpenModal(false)}>x</button>
            <span className="description">
            <h1>Full Name : {el.Fname}</h1>
            <h2>Bio : {el.bio}</h2>
            <img src={el.photo} alt=''></img>
            <h2> Profession: {el.profession}</h2>
            </span>
        </div>
    </div>
    )
}

export default Person
