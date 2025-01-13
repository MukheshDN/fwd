import React from 'react';
import './PatientList.css';
import PatientListCard from './PatientListCard';
const PatientList = ({ patients }) => {
  return (
    <div>
    <PatientListCard name={"mukhesh"} phone={"9663746863"}/>
    <PatientListCard name={"akash"} phone={"9663746863"}/>
    <PatientListCard name={"sriguru"} phone={"9663746863"}/>
    <PatientListCard name={"raju"} phone={"9663746863"}/>
    <PatientListCard name={"adithya"} phone={"9663746863"}/>
    
   </div>
  )
};

export default PatientList;