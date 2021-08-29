import { Col } from 'react-bootstrap'

const Cases = ({dateCases, dailyCases}) => {
    return(
        <Col sm={3}>
            <p>Cases</p>
            <h2>People tested positive</h2>
            <p>Latest data provided on {dateCases}</p>
            <p>Daily</p>
            <h2>{dailyCases}</h2>
        </Col>
    ) 
}

export default Cases