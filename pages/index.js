import { SearchBox } from '../components/SearchBox'
import { createContext, useEffect, useState } from 'react'
import { getPlaceDetails } from './api/lookup'
import { WeatherCard } from '../components/WeatherCard'
import { Navbar } from '../components/NavBar'

const placeDetails = createContext()

export default function Home() {
  const [details, setDetails] = useState();

  useEffect(() => {
    const setData = async () => {
      let data = await getPlaceDetails("New Delhi");

      if(data == undefined) {
          alert('Could not fetch details for "New Delhi"')
          return;
      }

      setDetails(data);
    }

    setData();
  }, [])

  return (
    <>
      <div className="bg-cover h-screen overflow-hidden"
            style={{backgroundImage:`url(${details?.background})`}}>
        <Navbar />

        <div className="flex justify-evenly items-center min-h-full">
          <placeDetails.Provider value={{pd:[details, setDetails]}}>
            <SearchBox />
          </placeDetails.Provider>

          {
            details?<WeatherCard placeDetails={details} />:<></>
          }
        </div>
      </div>
    </>
  )
}

export { placeDetails }
