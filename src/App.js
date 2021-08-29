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

  const [vaccinations, setVaccinations] = useState({
    date: null,
    vaccinations: null
  })

  useEffect(() => {
    fetchCases()
    fetchVaccinations()
  }, [])

  const casesEndpoint = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    'structure={"date":"date","newCases":"newCasesByPublishDate"}'
)

  const vacEndpoint = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    'structure={"date":"date","vaccinations":"newPeopleVaccinatedCompleteByPublishDate"}'
  )

  const fetchCases = async () => {
      const response = await fetch(casesEndpoint)
      const data = response.json()
      return data.then((resp) => {
        setCases({
          date: resp.data[0].date,
          newCases: resp.data[0].newCases
        })
      })
  }

  const fetchVaccinations = async () => {
    const response = await fetch(vacEndpoint)
    const data = response.json()
    return data.then((resp) => {
      console.log(resp)
      setVaccinations({
        date: resp.data[0].date,
        vaccinations: resp.data[0].vaccinations
      })
    })
  }

  console.log(cases)
  console.log(vaccinations)
  return (
    <div className="App">
      <header>
        <h1>Covid-19 UK</h1>
      </header>
      <Container className="VaccinationsContainer">
        <VaccinationsContainer />
        <Row>
          <CasesContainer dateCases={cases.date} dailyCases={cases.newCases}/>
          <DeathsContainer />
          <HealthcareContainer />
          <TestingContainer />
        </Row>
      </Container>
    </div>
  );
}

export default App;
