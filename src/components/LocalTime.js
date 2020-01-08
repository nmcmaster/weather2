import React from 'react';

function LocalTime(props){
  let time = props.time.split(" ");
  return time[1];
}

export default LocalTime;
