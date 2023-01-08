import axios from "axios";

let apiKey = aad8020de6df4d8f928184848230301

const getSuggestions = async (query) => {
    let url = `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${query}`

    try {
        let resp = await axios.get(url)
        
        let data = resp.data.map((item) => {
            let string = item.name

            if(item.region != "")
                string += `, ${item.region}`
            if(item.country != "")
                string += `, ${item.country}`

            return string
        })
        
        return data.slice(0, 7)
    } catch (e) {
        console.log(e)
        return []
    }
}

const getPlaceDetails = async (query) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`

    try {
        let resp = await axios.get(url)

        if(resp.status != 200)
            return {}

        const [ldate, ltime] = resp.data.location.localtime.split(" ")
        let [hours, minutes, seconds] = ltime.split(":")

        if(hours.length < 2)
            hours = `0${hours}`
        if(minutes.length < 2)
            minutes = `0${minutes}`

        let bg;
        if(resp.data.current.is_day)
            bg = "/sunny.jpg";
        else
            bg = "/night.jpg"

        let tz = resp.data.location.tz_id
        let [ctnt, place] = tz.split("/")
        place = place.replace("_", " ")

        let data = {
            name: resp.data.location.name,
            region: resp.data.location.region,
            country: resp.data.location.country,
            timezone: `${place}, ${ctnt}`,
            localTime: `${hours}:${minutes}`,
            temp: `${resp.data.current.temp_c}°C`,
            humidity: `${resp.data.current.humidity}%`,
            isDay: resp.data.current.is_day,
            background: bg,
            precip: `${resp.data.current.precip_mm}mm`,
            windSpeed: `${resp.data.current.wind_kph}km/h`
        }

        let condition = { text: resp.data.current.condition.text }
        let iconAddress = resp.data.current.condition.icon.split('/').pop()
        if(data.isDay)
            condition["iconAddress"] = `/icons/day/${iconAddress}`
        else
            condition["iconAddress"] = `/icons/night/${iconAddress}`
        data["condition"] = condition

        return data
    } catch(e) {
        console.log(e)
        return undefined;
    }
}

export { getSuggestions, getPlaceDetails }
