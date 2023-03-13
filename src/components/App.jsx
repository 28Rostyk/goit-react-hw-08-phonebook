import { BrowserRouter } from 'react-router-dom';
import AuthLayout from './AuthLayout/AuthLayout';
import Navbar from './Navbar/Navbar';
import UserRoutes from './UserRoutes';

const App = () => {
  return (
    <AuthLayout>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <Navbar />
        <UserRoutes />
      </BrowserRouter>
    </AuthLayout>
  );
};

export default App;
