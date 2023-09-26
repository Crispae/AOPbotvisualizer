import React,{useEffect, useState,useRef} from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import Collapse from 'react-bootstrap/Collapse';
import { TfiPlus,TfiSearch,TfiFilter} from "react-icons/tfi";
import { useElementContext } from './ElementContext';
import Drop from './Drop';

function Search() {
    const {cyObj} = useElementContext()
    const [hop,setHop] = useState(1)
    const [open, setOpen] = useState(false);
    const searchRef = useRef()


function searchSubmit (){

    const inputValue = searchRef.current.value; // Get input value using ref

    // NOTE: Instead of using useEffect use the event
    
    if (cyObj && cyObj.current){
        
        let selectedNode = cyObj.current.$(`node[name="${inputValue}"]`);
        
        let subgraph;
          
          if (hop === 1) {
            // Select neighbors of selected node
            let neighbors = selectedNode.neighborhood();
            subgraph = cyObj.current.collection(neighbors);
        
          } else if (hop === 2) {
            // Select second step neighbors of selected node
            let secondStepNeighbors = selectedNode.neighborhood().neighborhood();
            subgraph = cyObj.current.collection(secondStepNeighbors);
          }
        
          // Add the selected node to the subgraph
          subgraph = subgraph.merge(selectedNode);
        
          // Batch function to make it fast to hide nodes
          cyObj.current.batch(() => {
            cyObj.current.nodes().hide();
            subgraph.show()
          });
    
        }
}

   const buttonConfigs=[
        { label: 'First Neighbourhood', value: 1 },
        { label: 'Second Neighbourhood', value: 2 },
      ]


  return (

    <>

    {/** Collapsable button */}
    <Row className='edit_'>
                <button onClick={() => setOpen(!open)}
                        aria-expanded={open}            
                        className='edit_button' >
                <TfiSearch></TfiSearch> Search </button>
    </Row>

    <Collapse in={open}>
    <Row className='edit_search' id="search_coll">
        <Container>

            {/** Need to coorect it, as the size changes,css get diturbed */}
            <Row style={{"paddingTop":"5px"}}>
                
                <Col md={2}>
                    <div><strong>Query</strong></div>
                </Col>

                <Col style={{textAlign:"left"}}>
                <input id='query' 
                ref={searchRef}
                
                style={{
                    
                    border: "1px solid #ccc", // Add a border for a clean look
                    borderRadius: "4px", // Add rounded corners
                    boxShadow: "inset 0 1px 1px rgba(0, 0, 0, 0.075)", // Add a subtle inset shadow
                    fontSize: "14px", }}>
                </input>
                </Col>

            </Row>

            <Row style={{height:"80px",textAlign:"left",paddingTop:"20px"}}>
            {/** In this column DropDown menu will be shifted */}
            
            <Col >
            <Drop setValue={setHop} buttonConfigs={buttonConfigs} dropName={"Hops"}></Drop>
            </Col>

            <Col>
                <button className="edit_button layout_button" onClick={searchSubmit} type="submit">Submit</button>
            </Col>

            </Row>


        </Container>
    </Row>

    </Collapse>

</>



    
  )
}

export default Search
