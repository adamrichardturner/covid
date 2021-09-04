import { Col } from 'react-bootstrap'

const Testing = ({dateTested, newTests}) => {
    return(
        <Col sm={3}>
            <p>New Tests Conducted</p>
            <h2>New Tests by Publish Date</h2>
            <p>Latest data provided on {dateTested}</p>
            <p>Daily</p>
            <h2>{newTests}</h2>
        </Col>
    ) 
}

export default Testing