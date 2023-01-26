import './App.css';
import { Switch,Route,Redirect } from 'react-router-dom';
import Store from './components/Store';
import ProductDetails from './components/ProductDetails'
//context
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
<ProductContextProvider>
<Switch>

  <Route path="/products/:id" component={ProductDetails} />
  <Route path="/products" component={Store} />
  <Redirect to="/products" />
</Switch>
</ProductContextProvider>
  );
}

export default App;


