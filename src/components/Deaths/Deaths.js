import { Col } from 'react-bootstrap'

const Deaths = ({dateDeaths, deaths}) => {
    return(
        <Col sm={3}>
            <p>Deaths</p>
            <h2>Deaths within 28 days of positive test</h2>
            <p>Latest data provided on {dateDeaths}</p>
            <p>Daily</p>
            <h2>{deaths}</h2>
        </Col>
    ) 
}

export default Deaths