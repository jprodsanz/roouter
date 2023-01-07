import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Welcome from './components/Welcome';
import LandingPage from './screens/LandingPage/LandingPage';

function App () {
  return(
    <>
          <Header />
          <main> 
            <Routes>
              <Route path='/'element= {<LandingPage/>} exact/>
              <Route path='/welcome'element= {<Welcome/>} />
            </Routes>
          </main>
      <Footer />
    </>
  )
}
export default App;
