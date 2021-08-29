const Cases = async () => {

    const endpoint = (
        'https://api.coronavirus.data.gov.uk/v1/data?' +
        'filters=areaType=nation;areaName=england&' +
        'structure={"date":"date","newCases":"newCasesByPublishDate"}'
    )

    const fetchCases = async () => {
        const response = await fetch(endpoint)
        const data = await response.json()
        return data;
    }

    return fetchCases();
}

export default Cases;