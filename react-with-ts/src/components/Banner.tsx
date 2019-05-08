import React from 'react'

interface Head{
    name:string;age:number;
}
const Banner = (props:Head) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>
  )
}

export default Banner;