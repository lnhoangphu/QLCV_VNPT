import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './containers/Auth/login'; // Đảm bảo đúng đường dẫn
import { Provider } from 'react-redux';
import { store } from './store/configStore';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/configStore';
import MyClassComponent from './components/defaultComponent';
class App extends Component {
  render() {
    return (
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<MyClassComponent />} />
              {/* Thêm các route khác nếu cần */}
            </Routes>
            <ToastContainer />
          </Router>
        </Provider>
      </PersistGate>
    );
  }
}

export default App;