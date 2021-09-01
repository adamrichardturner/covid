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

  const [secondDoses, setSecondDoses] = useState({
    date: '',
    secondDoses: ''
  })

  const [totalSecondDoses, setTotalSecondDoses] = useState({
    date: '',
    totalSecondDoses: ''
  })

  const [uptakeFirstDose, setUptakeFirstDose] = useState({
    date: '',
    uptakeFirstDose: ''
  })

  const [uptakeSecondDose, setUptakeSecondDose] = useState({
    date: '',
    uptakeSecondDose: ''
  })

  const [deaths, setDeaths] = useState({
    date: '',
    deaths: ''
  })

  const [healthcare, setHealthcare] = useState({
    date: '',
    admitted: ''
  })

  const [testing, setTesting] = useState({
    date: '',
    tested: ''
  })

  useEffect(() => {
    fetchCases()
    fetchFirstDosesDaily()
    fetchTotalFirstDoses()
    fetchSecondDosesDaily()
    fetchTotalSecondDoses()
    fetchUptakeFirstDose()
    fetchUptakeSecondDose()
    fetchDeaths()
    fetchHealthcare()
    fetchTests()
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
      "firstDosesTotal":"cumPeopleVaccinatedFirstDoseByPublishDate"}`
  )

  const vacEndPointSecondDoses = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    `structure={
      "date":"date",
      "secondDoses":"newPeopleVaccinatedSecondDoseByPublishDate"}`
)

  const vacEndpointSecondDosesTotal = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    `structure={
      "date":"date",
      "secondDosesTotal":"cumPeopleVaccinatedSecondDoseByPublishDate"}`
  )

  const vacEndpointUptakeFirstDose = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    `structure={
      "date":"date",
      "uptakeFirstDose":"cumVaccinationFirstDoseUptakeByPublishDatePercentage"}`
  )

  const vacEndpointUptakeSecondDose = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    `structure={
      "date":"date",
      "uptakeSecondDose":"cumVaccinationSecondDoseUptakeByPublishDatePercentage"}`
  )

  const deathsEndpointDaily = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    `structure={
      "date":"date",
      "deaths":"newDeaths28DaysByPublishDate"}`
  )

  const healthcareEndpointDaily = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    `structure={
      "date":"date",
      "admitted":"newAdmissions"}`
  )

  const testingEndpointDaily = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    `structure={
      "date":"date",
      "tested":"newPCRTestsByPublishDate"}`
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
      setTotalFirstDoses({
        date: resp.data[0].date,
        totalFirstDoses: resp.data[0].firstDosesTotal
      })
    })
  }

  const fetchSecondDosesDaily = async () => {
    const response = await fetch(vacEndPointSecondDoses)
    const data = response.json()
    return data.then((resp) => {
      setSecondDoses({
        date: resp.data[0].date,
        secondDoses: resp.data[0].secondDoses
      })
    })
  }

  const fetchTotalSecondDoses = async () => {
    const response = await fetch(vacEndpointSecondDosesTotal)
    const data = response.json()
    return data.then((resp) => {
      setTotalSecondDoses({
        date: resp.data[0].date,
        totalSecondDoses: resp.data[0].secondDosesTotal
      })
    })
  }

  const fetchUptakeFirstDose = async () => {
    const response = await fetch(vacEndpointUptakeFirstDose)
    const data = response.json()
    return data.then((resp) => {
      setUptakeFirstDose({
        date: resp.data[0].date,
        uptakeFirstDose: resp.data[0].uptakeFirstDose
      })
    })
  }

  const fetchUptakeSecondDose = async () => {
    const response = await fetch(vacEndpointUptakeSecondDose)
    const data = response.json()
    return data.then((resp) => {
      setUptakeSecondDose({
        date: resp.data[0].date,
        uptakeSecondDose: resp.data[0].uptakeSecondDose
      })
    })
  }

  const fetchDeaths = async () => {
    const response = await fetch(deathsEndpointDaily)
    const data = response.json()
    return data.then((resp) => {
      setDeaths({
        date: resp.data[0].date,
        deaths: resp.data[0].deaths
      })
    })
  }

  const fetchHealthcare = async () => {
    const response = await fetch(healthcareEndpointDaily)
    const data = response.json()
    return data.then((resp) => {
      setHealthcare({
        date: resp.data[0].date,
        admitted: resp.data[0].admitted
      })
    })
  }

  const fetchTests = async () => {
    const response = await fetch(testingEndpointDaily)
    const data = response.json()
    return data.then((resp) => {
      console.log(resp)
      setTesting({
        date: resp.data[0].date,
        tested: resp.data[0].tested
      })
    })
  }


  return (
    <div className="App">
      <header>
        <h1>Covid-19 England</h1>
      </header>
      <Container className="VaccinationsContainer">
        <VaccinationsContainer firstDosesDate={firstDoses.date} 
                               firstDoses={firstDoses.firstDoses}
                               totalFirstDosesDate={totalFirstDoses.date}
                               totalFirstDoses={totalFirstDoses.totalFirstDoses}
                               secondDosesDate={secondDoses.date}
                               secondDoses={secondDoses.secondDoses}
                               totalSecondDosesDate={totalSecondDoses.date}
                               totalSecondDoses={totalSecondDoses.totalSecondDoses}
                               uptakeFirstDoseDate={uptakeFirstDose.date}
                               uptakeFirstDose={uptakeFirstDose.uptakeFirstDose}
                               uptakeSecondDose={uptakeSecondDose.uptakeSecondDose}
                               />
        <Row>
          <CasesContainer dateCases={cases.date} dailyCases={cases.newCases}/>
          <DeathsContainer dateDeaths={deaths.date} deaths={deaths.deaths} />
          <HealthcareContainer dateHealthcare={healthcare.date} admissions={healthcare.admitted} />
          <TestingContainer />
        </Row>
      </Container>
    </div>
  );
}

export default App;
