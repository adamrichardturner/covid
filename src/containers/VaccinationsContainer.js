import Vaccinations from '../components/Vaccinations/Vaccinations'

const VaccinationsContainer = ({firstDosesDate, 
                                firstDoses, 
                                totalFirstDosesDate, 
                                totalFirstDoses,
                                secondDosesDate,
                                secondDoses,
                                totalSecondDoses,
                                totalSecondDosesDate,
                                uptakeFirstDose,
                                uptakeSecondDose
                            }) => {

    const numberWithCommas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const firstDosesComma = numberWithCommas(firstDoses)
    const secondDosesComma = numberWithCommas(secondDoses)
    const totalFirstDosesComma = numberWithCommas(totalFirstDoses)
    const totalSecondDosesComma = numberWithCommas(totalSecondDoses)

    return(
        <Vaccinations firstDosesDate={firstDosesDate} 
                      firstDoses={firstDosesComma} 
                      totalFirstDosesDate={totalFirstDosesDate}
                      totalFirstDoses={totalFirstDosesComma}
                      secondDosesDate={secondDosesDate}
                      secondDoses={secondDosesComma}
                      totalSecondDosesDate={totalSecondDosesDate}
                      totalSecondDoses={totalSecondDosesComma}
                      uptakeFirstDose={uptakeFirstDose}
                      uptakeSecondDose={uptakeSecondDose}
                      />
    )
}

export default VaccinationsContainer