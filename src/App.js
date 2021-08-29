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
    fetchCases()
  }, [])

  const endpoint = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    'structure={"date":"date","newCases":"newCasesByPublishDate"}'
)

  const fetchCases = async () => {
      const response = await fetch(endpoint)
      const data = response.json()
      return data.then((resp) => {
        setCases({
          date: resp.data[0].date,
          newCases: resp.data[0].newCases
        })
      })
  }

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
