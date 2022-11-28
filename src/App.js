import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './dashboard/dashboard';
import Topup from './topup/topup';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
    <Navigation/>
    <Dashboard/>
    <Topup/>
    </>
  );
}

export default App;
