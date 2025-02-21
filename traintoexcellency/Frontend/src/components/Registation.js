import React from 'react'

const Registation = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-blue-500 w-[50%] '>
      <div className="registation-header">
         <h2>DEV-ERA</h2>
      </div>
<div className="registation-form">
   <form action="">
<input type="text" name="" id="user-name" placeholder='name'/>

      <input type="email" value="" id='email' placeholder='email'/>
      <input type="password" id='password' placeholder='password'/>
      <input type="confirm-password" id='confirm-password' placeholder='confirm password'/>
      <select
          value=""
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">-- Choose a Role --</option>
          <option value="Student">Student</option>
          <option value="Developer">Developer</option>
          <option value="Educator">Educator</option>
        </select>
      <button>login</button>
   </form>
</div>
<div className="if_register">

</div>
    </section>
  )
}

export default Registation
