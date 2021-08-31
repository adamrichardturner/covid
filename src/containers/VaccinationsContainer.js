import Vaccinations from '../components/Vaccinations/Vaccinations'

const VaccinationsContainer = ({firstDosesDate, firstDoses, totalFirstDosesDate, totalFirstDoses}) => {

    const numberWithCommas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const doses = numberWithCommas(firstDoses)
    const dosesTotal = numberWithCommas(totalFirstDoses)
    return(
        <Vaccinations firstDosesDate={firstDosesDate} 
                      firstDoses={doses} 
                      totalFirstDosesDate={totalFirstDosesDate}
                      totalFirstDoses={dosesTotal}
                      />
    )
}

export default VaccinationsContainer