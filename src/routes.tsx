import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Error from './components/error';
import Collaborators from './components/collaborators';

const RoutesApp = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/collaborators" element={<Collaborators/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    )
  }

export default RoutesApp;