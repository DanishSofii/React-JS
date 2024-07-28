import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent'
import ConditionalRendering from './components/ConditionalRendering';
import FormComponent from './components/FormComponent';
import Refs from './components/Refs';
import RefsParent from './components/RefsParent';
import NewCounter from './components/NewCounter';
import { UserProvider } from './components/userContext';
import ContextComponent from './components/ContextComponent';
function App() {
  return (
    <div className="App">
      {/* <Greet name="Danish"><button>Action</button></Greet>
      <Greet name="Sahil"/>
      <Greet name="Rahul"/> */}
      {/* <Welcome/> */}
      {/* <Hello/> */}
      {/* <Message/> */}
      {/* <Counter/>
       */}
       {/* <ParentComponent/> */}
       {/* <ConditionalRendering/> */}
        {/* <Lists/> */}
        {/* <FormComponent/> */}
        {/* <Refs/> */}
        {/* <RefsParent/> */}
        {/* <NewCounter/> */}
        <UserProvider value="Danish">
          <ContextComponent/>
        </UserProvider>
    </div>
  );
}

export default App;
