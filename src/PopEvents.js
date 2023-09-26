export default function setupEventListeners (cyObject) {

    // Add Node click event
    cyObject.on('tap','node',(event)=>{

        // capture the node
        let node = event.target

        // Hide all other pop-ups
        cyObject.elements().forEach((element)=>{

            // Element should not be node and must have tippy
            if (element !== node && element.tippy){
                element.tippy.hide();
            }

            // Toggle the pop-up for the clicked node
            if (node.tippy) {
                node.tippy.show();
            }
        });});

    
    // Add Edge click Event
    cyObject.on("tap","edge",(event)=>{

        console.log("Edge clicked")

        //capture the edge
        let edge = event.target;

        // Hide all other pop-ups
        cyObject.elements().forEach((element)=>{

            if(element !== edge && element.tippy){
                element.tippy.hide();
            }
        });

        // Toggle the pop-up for clicked edge
        if (edge.tippy) {

            edge.tippy.show();
        };});

     
    // Handle blank space tap

    cyObject.on("tap",(event)=>{

        let target = event.target;

        // Check if the target is the blank space

        if (target === cyObject) {

            // Hide all pop-ups

            cyObject.elements().forEach((element)=>{

                if (element.tippy){
                    element.tippy.hide();
                }});}});





};