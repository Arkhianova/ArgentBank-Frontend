import { RouterProvider } from 'react-router-dom';
import { router } from "./router.jsx";
import './sass/main.scss';

function App() {
  return (
        <RouterProvider router={ router }/>
  );
}

export default App