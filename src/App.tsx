import { Route, Routes } from "react-router-dom";
import Land from "./Land";
import { useEffect } from "react";
import SocketIO from "./config/socket.io.config";

function App() {
  useEffect(() => {
    SocketIO.initSocket();
    SocketIO.setSocketEventsListeners();
    // return () => {
    //   SocketIO.disconnect();
    // };
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Land />}></Route>
    </Routes>
    //container screen, nothing contains this div.
  );
}

export default App;
