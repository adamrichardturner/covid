import VaccinationsContainer from './containers/VaccinationsContainer'
import CasesContainer from './containers/CasesContainer'
import DeathsContainer from './containers/DeathsContainer'
import HealthcareContainer from './containers/HealthcareContainer'
import TestingContainer from './containers/TestingContainer'
import { Container, Row } from 'react-bootstrap'
import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [cases, setCases] = useState({
    date: '',
    newCases: ''
  })

  const [firstDoses, setFirstDoses] = useState({
    date: '',
    firstDoses: ''
  })

  const [totalFirstDoses, setTotalFirstDoses] = useState({
    date: '',
    totalFirstDoses: ''
  })

  useEffect(() => {
    fetchCases()
    fetchFirstDosesDaily()
    fetchTotalFirstDoses()
  }, [])

  const casesEndpoint = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    'structure={"date":"date","newCases":"newCasesByPublishDate"}'
)

  const vacEndpointFirstDoses = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    `structure={
      "date":"date",
      "firstDoses":"newPeopleVaccinatedFirstDoseByPublishDate"}`
)

  const vacEndpointFirstDosesTotal = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    `structure={
      "date":"date",
      "firstDosesTotal":"cumPeopleReceivingFirstDose"}`
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

  const fetchFirstDosesDaily = async () => {
    const response = await fetch(vacEndpointFirstDoses)
    const data = response.json()
    return data.then((resp) => {
      setFirstDoses({
        date: resp.data[0].date,
        firstDoses: resp.data[0].firstDoses
      })
    })
  }

  const fetchTotalFirstDoses = async () => {
    const response = await fetch(vacEndpointFirstDosesTotal)
    const data = response.json()
    return data.then((resp) => {
      console.log(resp)
      setTotalFirstDoses({
        date: resp.data[0].date,
        firstDosesTotal: resp.data[0]
      })
    })
  }

  return (
    <div className="App">
      <header>
        <h1>Covid-19 UK</h1>
      </header>
      <Container className="VaccinationsContainer">
        <VaccinationsContainer firstDosesDate={firstDoses.date} firstDoses={firstDoses.firstDoses}/>
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
