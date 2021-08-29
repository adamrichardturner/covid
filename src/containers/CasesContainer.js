import Cases from '../components/Cases/Cases'

const CasesContainer = ({dateCases, dailyCases}) => {

    const numberWithCommas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const cases = numberWithCommas(dailyCases)

    return(
        <Cases 
            dateCases={dateCases}
            dailyCases={cases}
            />
    )
}

export default CasesContainer