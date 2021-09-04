import Testing from '../components/Testing/Testing'

const TestingContainer = ({dateTested, tested}) => {

    const numberWithCommas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const newTests = numberWithCommas(tested)

    return(
        <Testing dateTested={dateTested} newTests={newTests} />
    )
}

export default TestingContainer