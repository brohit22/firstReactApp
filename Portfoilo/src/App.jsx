import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import './App.css';

function App() {
  const router = (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path=''>Home</Route>
      </Route>
    </Routes>
  );

  return (
    <>
      <Router>{router} </Router>
    </>
  );
}

export default App;
