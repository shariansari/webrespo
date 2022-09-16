import React from 'react'

export const Contact = () => {
  return (
    <div className='Contact'>
      <h1>CONTACT FORM</h1>
      <form action="/" id="form">
  <div>Name</div>
  <input type="text" id="input1" placeholder="enter your name" />
  <div id="id1" />
  <br />
  <div>Email</div>
  <input type="text" id="input2" placeholder="userid@gamil.com" />
  <div id="id2" />
  <br />
  <div>Phone no</div>
  <input type="text" id="input3" placeholder=" your phone no" maxLength={10} />
  <div id="id3" />
  <br />
  <div>Password</div>
  <input type="password" id="input4" placeholder="password" />
  <div id="id4" />
  <br />
  <div>
    Confirm password
    <div>
      <input type="password" id="input5" placeholder="confirm password" />
      <div id="id5" />
      <br />
      <button id="submit" type="submit">
        Submit
      </button>
    </div>
  </div>
</form>

    </div>
  )
}
