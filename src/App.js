import { Router, RouterProvider } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import { router } from './Router/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <AuthProvider>
      <div className="">
        <RouterProvider router={router}>
        </RouterProvider>
        <Toaster
          position='top-center'
        />
      </div>
    </AuthProvider>
  );
}

export default App;
