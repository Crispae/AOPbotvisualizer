import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from './Search';
import { TfiPlus,TfiSearch,TfiFilter} from "react-icons/tfi";

import Network from './Network';


function Body() {

  return (

    <Container fluid>
        <Row className='main_row'>
            
            <Col md={9} className='display_column'>
                <Network></Network>
            </Col>

            {/** NOTE: All Inside this should be a seprate component */}
            <Col md={3} className='edit_column'>

                {/** Search area*/}
                <Search></Search>
                
                <Row className='edit_'>
                <button className='edit_button' ><TfiFilter></TfiFilter> Filter </button>
                </Row>

                <Row className='edit_'>
                <button className='edit_button' ><TfiPlus></TfiPlus> Enrichment </button>
                </Row>
                <Row className='edit_'>
                <button className='edit_button' ><TfiPlus></TfiPlus> Selected Evidences </button>
                </Row>

            </Col>

        </Row>


    </Container>
    
  )
}

export default Body
