import { Col } from 'react-bootstrap'

const Healthcare = ({dateHealthcare, admissions}) => {
    return(
        <Col sm={3}>
            <p>Healthcare</p>
            <h2>Patients admitted</h2>
            <p>Latest data provided on {dateHealthcare}</p>
            <p>Daily</p>
            <h2>{admissions}</h2>
        </Col>
    ) 
}

export default Healthcare