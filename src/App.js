import Todo from './components/Todo'

function App() {
  return (
    <div>
      <h1>My ToDos</h1>
      <Todo text='Learn React' />
      <Todo text= 'Master React'/>
      <Todo text='Be React Guru'/>
    </div>
  );
}

export default App;
