import './App.css';
import ProductQuoter from './components/ProductQuoter.js';
import ItemContextProvider from './context/ItemContext'

function App() {
  return (
    <ItemContextProvider>
      <ProductQuoter />
    </ItemContextProvider>
  );
}

export default App;
