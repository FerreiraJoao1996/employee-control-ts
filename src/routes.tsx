import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Error from './components/error';

const RoutesApp = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    )
  }

export default RoutesApp;