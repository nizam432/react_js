import React from 'react'





function child(props) {
const data="this data form child";
  props.onChildData(data);
  return (
    <div>{props.name}</div>
  )
}

export default child