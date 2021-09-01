import Deaths from '../components/Deaths/Deaths'

const DeathsContainer = ({dateDeaths, deaths}) => {
    
    const numberWithCommas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const deathsCommas = numberWithCommas(deaths)

    return(
        <Deaths dateDeaths={dateDeaths} deaths={deathsCommas} />
    )
}

export default DeathsContainer