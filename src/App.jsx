import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <>
        {/* navigation */}

        <Routes>
          <Route path='/users' element={<Users />} />
          <Route path='/products' element={<Products />} />

          {/* default route and not-found route */}
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
