import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tippy.js/dist/tippy.css'; // optional for styling
import Nav from './Nav';
import Input from './Input';
import Body from './Body';

import Footer from './Footer';
import ElementContext from './ElementContext';


function App() {
  return (
    <>
    <ElementContext>
    <Nav></Nav>
    <Input></Input>
    <Body></Body>
    <Footer></Footer>

    </ElementContext>
    </>
  );
}

export default App;
