import logo from './logo.svg';
import './App.css';
import Validaion from './validation/Validaion';
import Childtopre from './Props/Childtopre';
import Screen from './Screendivide/Screen';
import Crudid from './crudopration/Crudid';
import Ref from './Ref/Ref';
import Undo from './undo/Undo';
import { BrowserRouter } from 'react-router-dom';
import RoutiingButton from './Routing-6/component/RoutiingButton';
import FormSwitch from './switchcaseForm/FormSwitch';

function App() {
  return (<div>
    {/* <Validaion/>
    <Childtopre/>
    <Screen/> */}
    {/* <Crudid/> */}
    {/* <Ref/> */}
   {/* <BrowserRouter>
   <Undo/>
      <RoutiingButton/>

   </BrowserRouter> */}
   <FormSwitch/>
    </div>
      );
}

export default App;
