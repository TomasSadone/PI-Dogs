import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Landing } from './components/Landing/Landing';
import store from './redux/store';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Form } from './components/Form/Form';
import { Detail } from './components/Detail/Detail';

function App() {
  const { pathname } = useLocation();
  return (
    <Provider store={store}>
      {pathname !== '/' && <Navbar />}
      {/* quizas la navbar no vaya aca y vaya en una home solo */}
      <div className='App'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/post' element={<Form />} />
          <Route path='/dog/:id' element={<Detail />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
