import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Welcome from './components/Welcome';
import { Word } from './components/Word';

function App () {
  return(
    <>
          <Header />
          <main> 
            <Routes>
              <Route path='/home'element= {<Welcome/>} />
              <Route path='/:word'element= {<Word/>} />
              <Route path='/:word/:color/:bg' element= {<Word/>} />
            </Routes>
          </main>
      <Footer />
    </>
  )
}
export default App;
