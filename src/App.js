
import Home from './componets/home/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import DataProvider from './componets/context/DataContext';
import CartContent from './componets/CartContent/CartContent';


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Cart" element={<CartContent></CartContent>}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
