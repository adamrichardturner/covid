import { Row, Col } from 'react-bootstrap'
import './Vaccinations.css'


const Vaccinations = () => {
    return(
        <Row className="VaccinationsRow">
            <Col sm={3}>
                <h2>People Vaccinated</h2>
                <p>Up to and including 21 August 2021</p>
            </Col>
            <Col sm={3}>
                <p>Daily - 1st Dose</p>
                <h3>69,270</h3> <br />
                <p>Total - 1st Dose</p>
                <h3>47,643,064</h3>
            </Col>
            <Col sm={3}>
                <p>Daily - 2nd Dose</p>
                <h3>69,270</h3> <br />
                <p>Total - 2nd Dose</p>
                <h3>47,643,064</h3>
            </Col>
            <Col sm={3}>
                <p>% of population aged 16+</p>
                <h3>87.7% - First Dose</h3>
                <h3>76.7% - Second Dose</h3>
            </Col>
        </Row>
    )
    
}

export default Vaccinations