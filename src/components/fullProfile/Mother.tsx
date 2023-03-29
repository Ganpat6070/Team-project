import React from 'react'

const Mother = () => {
  return (
    <div>
      <div className="text-center">Mother Information</div>
      <br />
      <br />
      <div className="d-flex justify-content-lg-evenly">
        <div className="text-start ml-4">
          <li style={{ listStyle: "none" }}>
            <ul>Mother Name</ul>
            <ul>Mother Designation</ul>
            <ul>Education</ul>
          </li>
        </div>
        <div className="text-start">
          <li style={{ listStyle: "none" }}>
            <ul>---</ul>
            <ul>---</ul>
            <ul>---</ul>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Mother