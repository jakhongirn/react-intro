import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1>My ToDos</h1>
      <Todo text='Learn React' />
      <Todo text= 'Master React'/>
      <Todo text='Be React Guru'/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
