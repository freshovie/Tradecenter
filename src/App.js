import './App.css'; // Importing global CSS styles
import Display from './Components/Display'; // Importing the Display component
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Importing MDB React UI Kit CSS

function App() {
  return (
    <div className="App">
      {/* Rendering the Display component */}
      <Display />
    </div>
  );
}

export default App;
