/** This component takes variable to be feeded in tippy.js node pop-up */
import React from 'react'
import ReactDOM from 'react-dom/client';
import tippy from 'tippy.js';
import 'tippy.js/themes/light.css';
import { TfiClose} from "react-icons/tfi";


export default function nodepopper(ele,cyObj){
  
  // extracting data from nodes
  let node_data = ele.data()
  let {url,value,degree, id} = node_data;

  // setting refrence for poups
  let ref = ele.popperRef(); // used for positioning
  let node_content = document.createElement("div"); // dummy element
  document.body.appendChild(node_content); // resolve parent null issue

  // pop-up content
  let content = document.createElement("div");
  content.classList.add("node_info");
  content.innerHTML = ReactDOM.createRoot(content).render(<NodeContent url={url} value={value} degree={degree} id={id} cyObj={cyObj}/>)

  // instansiating tippy element in 
  ele.tippy = tippy(node_content,{
  getReferenceClientRect: ref.getBoundingClientRect,
  content: content ,
  trigger:"manual",
  interactive:true,
  hideOnClick:false,
  arrow:false,
  maxWidth:500,
  theme:"light",
  allowHTML: true,
  zIndex: 9999,

})}

/** This can be customized with React icons and other stuff */
function NodeContent({ value, degree, url, id,cyObj}) { 

  // Function to delete the node
  function DeleteNode() {
    
    // selecting the node and removing it
    let selected_node = cyObj.current.$(`node[id="${id}"]`)
    selected_node["0"].tippy.hide()



    let deleted_node = selected_node.remove()

  }


  return (
        <>
  <div className={"node_info"}>
  
  <table style={{ borderCollapse: 'collapse', width: '100%' }}>
    <tbody>

      <tr>

        <td>
                <p style={{align:"left", margin:"5px"}}>
                          <b>{value}</b>
                </p>
        </td>

        {/** Button to remove the node */}
        <td style={{textAlign:"right"}}>
        <button className='input_button' onClick={DeleteNode}><TfiClose></TfiClose></button>
        </td>

      </tr>

      <tr>
        <td style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left', position: 'relative' }}>
          <strong>Degree:</strong>
        </td>
        <td style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'justify' }}>
          {degree}
        </td>
      </tr>

      <tr>

        <td style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'left', position: 'relative' }}>
          <strong>Identifier:</strong>
        </td>


        <td style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'justify' }}>
          <a href={url}>{value}</a>
        </td>

      </tr>

    </tbody>
  </table>
</div>

        </>
      
  );
}





