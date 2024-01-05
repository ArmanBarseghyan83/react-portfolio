import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <Container className='position-relative min-vh-100 pt-5' >
        <Outlet />
        <Footer />
      </Container>
    </>
  );
}

export default App;
