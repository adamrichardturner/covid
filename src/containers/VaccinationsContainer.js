import Vaccinations from '../components/Vaccinations/Vaccinations'

const VaccinationsContainer = ({firstDosesDate, firstDoses}) => {

    const numberWithCommas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const doses = numberWithCommas(firstDoses)

    return(
        <Vaccinations firstDosesDate={firstDosesDate} firstDoses={doses} />
    )
}

export default VaccinationsContainer