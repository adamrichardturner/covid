import VaccinationsContainer from './containers/VaccinationsContainer'
import CasesContainer from './containers/CasesContainer'
import DeathsContainer from './containers/DeathsContainer'
import HealthcareContainer from './containers/HealthcareContainer'
import TestingContainer from './containers/TestingContainer'
import Cases from './util/Cases'
import { Container, Row } from 'react-bootstrap'
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [cases, setCases] = useState({
    date: null,
    newCases: null
  })

  useEffect(() => {
    const cases = Cases()
    console.log(cases)
  }, [])

  console.log(cases)

  return (
    <div className="App">
      <header>
        <h1>Covid-19 UK</h1>
      </header>
      <Container className="VaccinationsContainer">
        <VaccinationsContainer />
        <Row>
          <CasesContainer daily={cases.daily}/>
          <DeathsContainer />
          <HealthcareContainer />
          <TestingContainer />
        </Row>
      </Container>
    </div>
  );
}

export default App;
