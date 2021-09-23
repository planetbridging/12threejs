import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"

import MainPage from './pages/mainPage';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <MainPage />
    </ChakraProvider>
      
    </div>
  );
}

export default App;
