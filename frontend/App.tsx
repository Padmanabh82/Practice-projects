import { Link, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"

function App() {

  if (window.matchMedia('(prefers-color-scheme: dark)')) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <>
      <nav id='header' className='m-1 flex top-0 bg-sky-300 rounded h-16 justify-start items-center'>
        <Link to="/" className='text-2xl font-2 pl-2'>Practice</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
