import React, { useState } from 'react'

function Title({ title }) {

  return (
    < h1 className="title" > To Do list < span htmlFor="" > {title}</span></h1 >
  )
}

export default Title