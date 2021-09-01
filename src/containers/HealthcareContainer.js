import Healthcare from '../components/Healthcare/Healthcare'

const HealthcareContainer = ({dateHealthcare, admissions}) => {
    
    const numberWithCommas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const admissionsComma = numberWithCommas(admissions)

    return(
        <Healthcare dateHealthcare={dateHealthcare} admissions={admissionsComma} />
    )
}

export default HealthcareContainer