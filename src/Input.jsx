import React,{useRef} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TfiCloudUp,TfiCloudDown,TfiSave,TfiReload} from "react-icons/tfi";
import { useElementContext } from './ElementContext';
import Drop from './Drop';
import DisplayName from './DisplayName';


function Input() {

const {element,setElement,setReset,setLayoutStyle,reset} = useElementContext()

// Drop Down options
const layoutConfigs = [
    { label: 'Concentric', value: "concentric" },
    { label: 'Random', value: "random" },
    { label: 'Cose', value: "cose" },
    { label: 'Grid', value: "grid" },
    { label: 'Circle', value: "circle" },
  ]


const fileInputRef = useRef(null);

function fileDialog(){
    fileInputRef.current.click();
}


function uploadFile(event) {

    const file = event.target.files[0];

    if (file){

        const reader = new FileReader();

        reader.onload = (event) =>{

            try {
                const jsonData = JSON.parse(event.target.result)
                setElement(jsonData)
            } catch (error){
                console.error("Error parsing JSON file",error)
            }
    
        };

        reader.readAsText(file);
    }


}

  return (

// Container to Contain Different Inputs

<Container fluid className='input_section'>
    <Row xs="auto">
        {/** Upload Button */}
        <Col>
        <button className='input_button' onClick={fileDialog}><TfiCloudUp></TfiCloudUp> upload </button>
        <input
              type="file"
              accept=".json"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={uploadFile}
            />
        </Col>

        {/** Save Button (This will save the network in uer's repository) */}

        <Col>
        <button className='input_button' ><TfiSave></TfiSave> save </button>
        </Col>

        {/** Download button */}
        <Col>
        <button className='input_button'><TfiCloudDown></TfiCloudDown> download </button>
        </Col>

        {/** Layout DropDown */}
        <Drop setValue={setLayoutStyle} buttonConfigs={layoutConfigs} dropName={"layout"}></Drop>

        {/** Rest Button */}
        <Col>
        <button className='input_button' onClick={()=>{setReset(!reset)}}><TfiReload></TfiReload> Reset </button>
        </Col>

        {/** Drop Down menu to show node naming option*/}
        <DisplayName></DisplayName>


      </Row>

</Container>
  )
}

export default Input
