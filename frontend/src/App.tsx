import { Container } from "./components/Container";
import "./App.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <main className="main">
      <ToastContainer />
        <Container />
    </main>
  );
}

export default App;
