import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";
import HomeScreen from './components/screens/HomeScreen';
import {BrowserRouter as Router,Route} from "react-router-dom"
import ProductScreen from './components/ProductScreen';


function App() {
  return (
  <Router>
  <Header/>
  <main className='py-5'>
    <Container>
      <Route path="/" component={HomeScreen} exact/>
      <Route path="/product/:id" component={ProductScreen}/>
    </Container>
    </main>
  <Footer/>
  </Router>
  );
}

export default App;
