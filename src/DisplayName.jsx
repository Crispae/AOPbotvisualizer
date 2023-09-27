// component to change display name of the nodes
import React,{useState,useEffect} from 'react'
import Drop from './Drop'


function DisplayName() {

  const [displayName,setDisplayName] = useState(()=>1)

  const displayNameConfigs=[
    { label: 'Normalized name', value: 1 },
    { label: 'Raw name', value: 2 },
    { label: 'ID', value: 3 }
  ]


  // NOTE: Think a way to update the layout and display without using useEffect
  // NOTE: Build custom Hooks, which will handle all the changes, we want to implement in the 
  useEffect(()=>{

    console.log(displayName)


  },[displayName])



  return (

    <Drop setValue={setDisplayName} buttonConfigs={displayNameConfigs} dropName={"Display Name"}></Drop>


  )
}

export default DisplayName