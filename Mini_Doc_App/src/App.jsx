import './App.css';
import Background from './components/Background.jsx';
import Foreground from './components/Foreground.jsx';

function App() {
  return (
    <>
      <div className='relative w-screen h-screen bg-zinc-800'>
        <Background />
        <Foreground />
      </div>
    </>
  );
}

export default App;
