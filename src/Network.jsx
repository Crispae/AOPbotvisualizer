import React,{useRef,useEffect} from 'react'
import cytoscape from 'cytoscape';
import popper from 'cytoscape-popper';
import cyConfig from './cytoscapeConfig'; // Import the configuration
import { useElementContext } from './ElementContext';
import {nodepopper,edgepopper} from './poppers';
import setupEventListeners from './PopEvents'
cytoscape.use( popper );


function Network() {

    const {element,layoutStyle,reset,cyObj} = useElementContext()
    const cyRef = useRef(null);

    // useEffect just to change the layout
    // TODO: set the Layout style state in local context only.
    useEffect(()=>{
      if (cyObj.current){

        console.log("layout changes")

      cyObj.current.layout({
        name:layoutStyle
      }).run()}

    },[layoutStyle])

    // TODO: When rest is used, ti loose the capbility to click on edge and node why?
    useEffect(() => {
      
      if (cyObj.current && element) {


        // Clear the existing network
        cyObj.current.remove(cyObj.current.elements());
  
        // Add new elements from the element prop
        cyObj.current.add(element);

        //NOTE: Convert the intilization part into a seprate func
        // Reinitialize popper for nodes and edges
        cyObj.current.nodes().forEach((node_element) => {
        nodepopper(node_element);
        });

      cyObj.current.edges().forEach((edge_element) => {
      edgepopper(edge_element);
      });

  
        cyObj.current.layout({
          name:'random'
        }).run()


  
      }
    }, [reset,]);


  useEffect(() => {
            
            cyConfig.container = cyRef.current;

            // Here elements will get updated
            cyConfig.elements = element;

            // updating the layout
            cyConfig.layout.name = layoutStyle;

            const cy = cytoscape(cyConfig);

            // Refrencing the cytoscape object for other work
            cyObj.current = cy;

            // Once loaded then start including pop over
            cyObj.current.ready(function()
            {

              // In each feeding pop-up content
              cyObj.current.nodes().forEach(function(node_element){
              
              // Calculate the degree of nodes
              const degree = node_element.connectedEdges().length;
              node_element.data('degree',degree) // stores in their object

                // populating the nodeinfo
                nodepopper(node_element)

              })

              // In each feeding pop-up content
              cyObj.current.edges().forEach(function(edge_element){

                // populating edge data
                edgepopper(edge_element)

              })


            })

            // Adding eventListerns to node, edge and blank space
            setupEventListeners(cyObj.current)

           
            // Cleanup on unmount
            return () => {
              cyObj.current.destroy();
            };
  }, [element]);



  return (

     <div ref={cyRef} style={{ width: '100%', height: '100%' }} />

   
  )
}

export default Network
