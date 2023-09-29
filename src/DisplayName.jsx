// component to change display name of the nodes
import React,{useState,useEffect} from 'react'
import Drop from './Drop'
import { useElementContext } from './ElementContext';


function DisplayName() {

  const {cyObj} = useElementContext();

  // state to capture the display name
  const [displayName,setDisplayName] = useState(()=>1)

  const displayNameConfigs=[
    { label: 'Normalized name', value: "normalized_term" },
    { label: 'Raw name', value: "query_term" },
    { label: 'ID', value: "db_id" }
  ]

  // NOTE: Think a way to update the layout and display without using useEffect
  // NOTE: Build custom Hooks, which will handle all the changes, we want to implement in the 
  useEffect(()=>{

 if (cyObj.current){
    cyObj.current.nodes().forEach((node_element)=>{

      node_element.css({
        content: node_element.data(displayName)
      })

    })}


  },[displayName])



  return (

    <Drop setValue={setDisplayName} buttonConfigs={displayNameConfigs} dropName={"Display Name"}></Drop>


  )
}

export default DisplayName