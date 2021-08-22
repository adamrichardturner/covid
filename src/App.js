import VaccinationsContainer from './containers/VaccinationsContainer'
import { Container } from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Covid-19 UK</h1>
      </header>
      <Container className="VaccinationsContainer">
        <VaccinationsContainer />
      </Container>
    </div>
  );
}

export default App;
