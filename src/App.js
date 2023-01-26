import './App.css';
import Store from './components/Store';
import ProductDetails from './components/ProductDetails'
import { Switch,Route,Redirect } from 'react-router-dom';
//context
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
<ProductContextProvider>
<Switch>
  <Route path='/products:id' component={ProductDetails}/>
  <Route path='/products' component={Store}/>
  <Redirect to ='/products'/>
</Switch>
</ProductContextProvider>
  );
}

export default App;
