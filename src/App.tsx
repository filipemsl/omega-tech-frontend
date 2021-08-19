import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from "./pages/Home"
import { Dashboard } from './pages/Dashboard';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
