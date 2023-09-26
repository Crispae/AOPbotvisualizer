import tippy from 'tippy.js';
import 'tippy.js/themes/light.css';
import 'font-awesome/css/font-awesome.min.css';



export function nodepopper(ele){
    
    let node_data = ele.data()

    let {url,value,degree} = node_data;
    
    let ref = ele.popperRef(); // used for positioning
    let node_content = document.createElement("div"); // dummy element
    document.body.appendChild(node_content); // resolve parent null issue
  
  
    // instansiating tippy element in 
    ele.tippy = tippy(node_content,
    
    {
      getReferenceClientRect: ref.getBoundingClientRect,
      content: ()=>{
        let content = document.createElement("div");
        content.classList.add("node_info");
        content.innerHTML = `
        
        <p align="Left"> <b>${value}</b></p>

        <hr>
            <table>
            <tr>
                <td align="left"><strong>Degree:</strong></td>
                <td align="right">${degree}</td>
            </tr>

            <tr>
                <td align="left"><strong>Identifier:</strong></td>
                <td align="right"><a href=${url}>${value}</a></td>
            </tr>

            </table>

         `
         return content;
    
    },
    trigger:"manual",
    interactive:true,
    hideOnClick:false,
    arrow:false,
    maxWidth:500,
    theme:"light",
    allowHTML: true,
    zIndex: 9999,
  
  })}



function buildDiv(information)
  {
  
      let content = document.createElement("div");
  
      // Information of the build div will be added in these like this
      let display = `
      <style>
  /* Add your custom CSS styles here */
  #edge_tb {
    border-collapse: collapse;
    width: 100%;
  }
  #edge_tb, #edge_tb th, #edge_tb td {
    border: 1px solid #ccc;
  }
  #edge_tb th {
    background-color: #f2f2f2;
    color: gray;
    padding: 10px;
    text-align: left;
    position: relative; /* Add this to make it relative */
  }
  #edge_tb th .buttons {
    position: absolute; /* Position buttons absolutely within the th */
    top: 0;
    right: 0;
    margin-top:5px;
    margin-right:10px;
  }
  #edge_tb td {
    padding: 10px;
    text-align: justify;
  }
  hr {
    border: none;
    height: 1px;
    background-color: #ccc;
    margin: 10px 0;
  }
</style>
<table id="edge_tb">
  <tr>
    <th colspan="2">
      Evidence
      <div class="buttons">
      <!-- Thumbs-up icon -->
      <i id="upvote" class="fa fa-thumbs-up fa-lg" style="color: #3cc48a;"></i></i>
      <!-- Thumbs-down icon -->
      <i id="downvote" class="fa fa-thumbs-down fa-lg" style="color: #ba051c;"></i>
      </div>
    </th>
  </tr>
  <tr>
    <td><strong>PMID</strong></td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/${information.id}/m">${information.id}</a></td>
  </tr>
  <tr>
    <td><strong>Extraction Method</strong></td>
    <td>${information.extraction_method}</td>
  </tr>
  <tr>
    <td><strong>Text</strong></td>
    <td>${information.evidence}</td>
  </tr>
  <tr>
    <td><strong>Line Number</strong></td>
    <td>${information.line_number}</td>
  </tr>
</table>
`;
  
    content.innerHTML = display;

  
    return content;
  
  }


function PopupContent(ele)
        
{
  
          // Extracting elements to show on edge
          let evidence_data = ele._private.data["evidence"]

          // Create the parent container element
          var parentContainer = document.createElement("div");
          parentContainer.style.maxHeight = '400px';
          parentContainer.style.overflow = 'auto';
          parentContainer.classList.add("node_info");


          // Extracting constant source and target 
          let source = evidence_data[0].Entity_1
          let target = evidence_data[0].Entity_2
  
          // Create the div for source and target
          var headerDiv = document.createElement("div");
          headerDiv.innerHTML = `<h3 align="Left"><strong>${source} (-) ${target}</strong></h3>`;
          parentContainer.appendChild(headerDiv);
  
          // The information in loop will be feeded in the buildDiv function
          evidence_data.forEach((information)=>{

            // In this build information we need to add the the element so, it can render the evidence
            let info_element = buildDiv(information)
            parentContainer.appendChild(info_element)

          })
          
  
          return parentContainer
  }


export function edgepopper(ele)
{   
    // Pop up content created
    let edge_html_content = PopupContent(ele)

    // Pop uo content postioning
    let ref = ele.popperRef(); 
    let edge_content = document.createElement("div"); // dummy element
    document.body.appendChild(edge_content); // resolve parent null issue

    // Instansiating tippy
    ele.tippy = tippy(edge_content,
        {getReferenceClientRect:ref.getBoundingClientRect,
            content: edge_html_content,
            trigger: "manual",
            arrow:false,
            interactive: true,
            hideOnClick: false,
            theme:"light",
            maxWidth:500,
            placement: "bottom",
            
            
        }
        )

}


