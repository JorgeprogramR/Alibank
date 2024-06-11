// configurar el react-router-dom (multipaginas)
import ProtectedRoute from './ProtectedRoute.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage.jsx';
import { RegisterPage } from './pages/RegisterPage.jsx';
import { LoginPage } from './pages/LoginPage.jsx'
import { Footer } from './components/Footer.jsx';
import { Settings } from './pages/Settings.jsx';
import AccountFormPage from './pages/AccountFormPage.jsx'
import { SettingsProfile } from './pages/SettingsProfile.jsx';
import { SettingsSecurity } from './pages/SettingsSecurity.jsx'
import  SettingsOff from './pages/SettingsOff.jsx'
import { ModalPay } from './components/ModalPay.jsx';
import { AccountProvider } from './context/AcountContext.jsx';
import AccountPage from './pages/AccountPage.jsx';
import {ProfilePage} from './pages/ProfilePage.jsx'


function App() {
  return (
    <AuthProvider>
      <AccountProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            {/* aca protegemos la ruta del pasapagos */}
            <Route element={<ProtectedRoute />}>
              <Route path='/accounts' element={<AccountPage />} />
              <Route path='/add-account' element={<AccountFormPage />} />
              <Route path='/accounts/:id' element={<AccountFormPage/>} />
              <Route path='/profile' element={< ProfilePage/>}/>

              <Route path='/settings' element={<Settings />} />
              <Route path='/settings-count' element={<SettingsProfile />} />
              <Route path='/settings-security' element={<SettingsSecurity />} />
              <Route path='/settingsOff' element={<SettingsOff />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AccountProvider>
    </AuthProvider>
  )
}

export default App 