import SimpleInput from './components/SimpleInput';
import BasicForm from './components/BasicForm';

function App() {
  return (
    <div className="app">
      {/* use useInputReducer */}
      <h2>Simple input use useInputReducer</h2>
      <SimpleInput />
      <hr />
      <h2>Basic input use useInput</h2>
      {/* use useInput */}
      <BasicForm />
    </div>
  );
}

export default App;
