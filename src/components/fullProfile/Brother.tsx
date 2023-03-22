import React from 'react'

const Brother = () => {
  return (
    <div>
      <div className="text-center">Brother Information</div>
      <br />
      <br />
      <div className='d-flex justify-content-evenly'>
        <div className="text-start ml-4">
          <li style={{ listStyle: "none" }}>
            <ul>No. of Brother</ul>
            <ul>Education</ul>
          </li>
        </div>
        <div className="text-start">
          <li style={{ listStyle: "none" }}>
            <ul>---</ul>
            <ul>---</ul>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Brother