import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';

import "./App.css";
import { SignUp } from './pages/auth/SignUp';
import { Verify } from './pages/auth/Verify';
import { CreatePassword } from './pages/auth/CreatePassword';
import { AuthLayout } from './layouts/AuthLayout';
import { SignIn } from './pages/auth/SignIn';
import { Home } from './pages/send-sol/Home';
// import { SelectContact } from './pages/send-sol/SelectContact';
import { DefaultLayout } from './layouts/DefaultLayout';
import { ConfirmTransaction } from './pages/send-sol/ConfirmTransaction';
import { EnterSolAmount } from './pages/send-sol/EnterSolAmount';
import { TransactionConfirmed } from './pages/send-sol/TrasactionConfirmed';
import { useDefaultStore } from './lib/DefaultStore';

function App() {
  const { accessToken } = useDefaultStore();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
              accessToken ? <Navigate to="/home" replace={true} /> :
              <Landing />
          }
        />
        <Route path="/signup" element={<AuthLayout />}>
          <Route path="" element={<SignUp />} />
          <Route path="verify" element={<Verify />} />
          <Route path="create-password" element={<CreatePassword />} />
        </Route>
        <Route path="/signin" element={<AuthLayout />}>
          <Route path="" element={<SignIn />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/send-sol" element={<DefaultLayout />}>
          {/* <Route path="select-contact" element={<SelectContact />} /> */}
          <Route path="enter-sol-amount" element={<EnterSolAmount />} />
          <Route path="confirm-transaction" element={<ConfirmTransaction />} />
        </Route>
        <Route path="/transaction-confirmed" element={<TransactionConfirmed />} />
        {/* New page */}

      </Routes>
    </Router>
  );
}

export default App;
