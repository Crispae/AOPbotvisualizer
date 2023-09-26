import React, { useEffect, useRef,useState } from 'react';
import tippy from 'tippy.js';
import Col from 'react-bootstrap/Col';
import { TfiAngleDown} from "react-icons/tfi";
import 'tippy.js/themes/light.css';
import { useElementContext } from './ElementContext';

function DropdownMenu({setValue}) {

  const {setLayoutStyle} = useElementContext()

  const dropdownButtonRef = useRef(null);
  const dropdownContentRef = useRef(null);


  useEffect(() => {
    const dropdownButton = dropdownButtonRef.current;
    const dropdownContent = dropdownContentRef.current;

    const tippyInstance = tippy(dropdownButton, {
      content: dropdownContent,
      interactive: true,
      trigger: 'click', // Use 'click' to show the dropdown on click
      arrow: false,
      theme: "light",
      moveTransition: 'transform 0.2s ease-out',
      onHide: () => {
        dropdownContent.style.display = 'none';
      },
      onShow: () => {
        dropdownContent.style.display = 'block';
      },
    });

    return () => {
      tippyInstance.destroy(); // Clean up Tippy instance when component unmounts
    };
  }, []);

  return (
    <>

      {/** This is drop down layout menu,*/}
      <Col className='layout_menu' id="layout" ref={dropdownButtonRef}>
            <table>
                <tbody>
            <tr className='drop_down'>
                <td style={{"paddingRight": "5px"}}>
                <TfiAngleDown/>
                </td>
                <td>
                    layout
                </td>
            </tr>
            </tbody>
            </table>
        </Col>


      <div id="dropdown-content" ref={dropdownContentRef} style={{ display: 'none' }}>
        <table>
          <tr>
            <td>
              <button className='layout_menu layout_button' onClick={()=>{setLayoutStyle("concentric")}} >Concentric</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className='layout_menu layout_button' onClick={()=>{setLayoutStyle("random")}} >Random</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className='layout_menu layout_button' onClick={()=>{setLayoutStyle("cose")}}>Cose</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className='layout_menu layout_button' onClick={()=>{setLayoutStyle("grid")}}>Grid</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className='layout_menu layout_button' onClick={()=>{setLayoutStyle("circle")}}>Circle</button>
            </td>
          </tr>


        </table>
      </div>
    </>
  );
}

export default DropdownMenu;
