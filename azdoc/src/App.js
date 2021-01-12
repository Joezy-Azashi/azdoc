import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/custom.css';
import MainRoutes from './pages/MainRoutes';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <MainRoutes/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
