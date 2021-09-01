import { Row, Col } from 'react-bootstrap'
import './Vaccinations.css'


const Vaccinations = ({firstDosesDate, 
                       firstDoses, 
                       totalFirstDoses, 
                       secondDoses, 
                       totalSecondDoses, 
                       uptakeFirstDose, 
                       uptakeSecondDose
                    }) => {
    return(
        <Row className="VaccinationsRow">
            <Col sm={3}>
                <h2>People Vaccinated</h2>
                <p>Up to and including {firstDosesDate}</p>
            </Col>
            <Col sm={3}>
                <p>Daily - 1st Dose</p>
                <h3>{firstDoses}</h3> <br />
                <p>Total - 1st Dose</p>
                <h3>{totalFirstDoses}</h3>
            </Col>
            <Col sm={3}>
                <p>Daily - 2nd Dose</p>
                <h3>{secondDoses}</h3> <br />
                <p>Total - 2nd Dose</p>
                <h3>{totalSecondDoses}</h3>
            </Col>
            <Col sm={3}>
                <p>% of population aged 16+</p>
                <h3>{uptakeFirstDose}% - First Dose</h3>
                <h3>{uptakeSecondDose}% - Second Dose</h3>
            </Col>
        </Row>
    )
    
}

export default Vaccinations