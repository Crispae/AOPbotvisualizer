import React, { useEffect, useRef } from 'react';
import tippy from 'tippy.js';
import Col from 'react-bootstrap/Col';
import { TfiAngleDown } from 'react-icons/tfi';
import 'tippy.js/themes/light.css';

function Drop({ setValue, buttonConfigs,dropName }) {
  
  const dropdownButtonRef = useRef(null);
  const dropdownContentRef = useRef(null);

  useEffect(() => {
    const dropdownButton = dropdownButtonRef.current;
    const dropdownContent = dropdownContentRef.current;

    const tippyInstance = tippy(dropdownButton, {
      content: dropdownContent,
      interactive: true,
      trigger: 'click',
      arrow: false,
      theme: 'light',
      placement: 'bottom', // Set placement to 'bottom',
      moveTransition: 'transform 0.2s ease-out',
      onHide: () => {
        dropdownContent.style.display = 'none';
      },
      onShow: () => {
        dropdownContent.style.display = 'block';
      },
    });

    return () => {
      tippyInstance.destroy();
    };
  }, []);

  return (
    <>
      <Col className="layout_menu" id="layout" ref={dropdownButtonRef}>
        <table>
          <tbody>
            <tr className="drop_down">
              <td style={{ paddingRight: '5px' }}>
                <TfiAngleDown />
              </td>
              <td>{dropName}</td>
            </tr>
          </tbody>
        </table>
      </Col>

      <div id="dropdown-content" ref={dropdownContentRef} style={{ display: 'none' }}>
        <table>
          <tbody>
            {buttonConfigs.map((config, index) => (
              <tr key={index}>
                <td>
                  <button className="layout_menu layout_button" onClick={() => setValue(config.value)}>
                    {config.label}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Drop;
