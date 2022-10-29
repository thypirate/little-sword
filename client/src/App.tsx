import io from 'socket.io-client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

const socket = io('http://localhost:4000', { transports: ['websocket'] });

const App = () => {
  return (
    <>
      {/*<Router>
          <NavComponent socket={socket} />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/products/add"
              element={<AddProduct socket={socket} />}
            />
            <Route
              path="/products/bid/:name/:price"
              element={<BidProduct socket={socket} />}
            />
          </Routes>
  </Router>*/}
    </>
  );
}

export default App;
