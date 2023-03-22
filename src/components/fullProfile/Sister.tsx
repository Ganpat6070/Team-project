import React from 'react'

const Sister = () => {
  return (
    <div>
      <div className="text-center">Sister Information</div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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

export default Sister