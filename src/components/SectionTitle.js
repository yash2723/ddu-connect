import React from 'react'

export default function SectionTitle(props) {
  return (
    <div>
      <div className="section-title">
        <h2>{props.name}</h2>
        <div className="section-title-underline"></div>
      </div>
    </div>
  )
}
