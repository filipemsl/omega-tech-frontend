import { Router } from 'react-router-dom';
import Modal from 'react-modal';
import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes';
import history from './history';


Modal.setAppElement('#root');

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  );
}


export default App;
