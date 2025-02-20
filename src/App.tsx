import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

import "./App.css";
import { SignUp } from './pages/auth/SignUp';
import { Verify } from './pages/auth/Verify';
import { CreatePassword } from './pages/auth/CreatePassword';
import { AuthLayout } from './layouts/AuthLayout';
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Landing />
            </div>
          }
        />
          <Route path="/signup" element={<AuthLayout />}>
            <Route path="" element={<SignUp />} />
            <Route path="verify" element={<Verify />} />
            <Route path="create-password" element={<CreatePassword />} />
          </Route>
        {/* New page */}

      </Routes>
    </Router>
  );
}

export default App;
