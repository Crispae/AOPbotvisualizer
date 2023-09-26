// cytoscapeConfig.

var chemical_entity = ["chemical","Chemical","Chemical Entity"];
var gene_entity = ["gene","Gene","Protein","protein","Gene Product","gene/protein"];
var disease = ["Disease","disease"]

const cyConfig = { elements: null, // This is data we want to add
                   container: null, // Place where network will render

// list contains Nodes and Edge styling
style: [

//  This section handles the node styling
           {
               selector: 'node',
               style: 
                       {
                           shape: "circle",
                           label: 'data(value)',
                           'background-color': function (ele) 
                           { 
                               if (chemical_entity.includes(ele.data('entity_type'))) 
                               {
                                   return 'lightblue'; // Color for chemical nodes
                               } 
                                else if (gene_entity.includes(ele.data('entity_type'))) 
                                {
                                   return `pink`; // Color for disease nodes
                               } 
                               else if (disease.includes(ele.data('entity_type'))) 
                               {
                                   return 'lightgreen'; // Color for gene nodes
                               } 
                               else 
                               {
                                   return 'gray'; // Default color for other nodes
                               }
                           },
                           'text-wrap': 'wrap',
                           'text-max-width': 100,
                           'text-valign': 'center',
                           'text-halign': 'center',
                           'font-size': 8,
    
                       },
           },

           // This handles the edge styling
           {
               selector: "edge",
               style: {
                               'width': 0.6,
                               'line-color': 'gray',
                               'curve-style': 'bezier'
                       }
           },
     
           {

               selector:"node.highlight",
               style: {
                           "background-color": "#bfff00",
                           "border-color":"#FFF",
                           "border-width":"1px"
                       }
           },

           {
                   selector: 'node[id="group1"]',
                   style: {
                               'background-color': 'orange'
                         },
                       },

           {
               selector: "node.semitransp",
               style:{"opacity":"0.5"}
           },

           {
               selector: 'edge.highlight',
               style: { 'mid-target-arrow-color': ' #dbf511' }
            },

           {
               selector: 'edge.semitransp',
               style:{ 'opacity': '0.1' }
           },

       ],

    

layout: {
           name: 'random',
       },
}


export default cyConfig;
