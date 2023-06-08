import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar tital="TextMASTER" Abouttext="About Us" />
      <div className="container my-3">
        <TextForm  heading="Enter The Text To Analyze Below"/>
      </div>
    </>
  );
}

export default App;
