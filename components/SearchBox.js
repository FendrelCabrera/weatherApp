import { createContext, useContext, useState } from "react"
import { placeDetails } from "../pages"
import { getPlaceDetails } from "../pages/api/lookup"
import InputBox from "./inputBox"

const queryContext = createContext()

const SearchBox = () => {
    const [query, setQuery] = useState("")
    const [suggestions, suggest] = useState([]);

    const { pd } = useContext(placeDetails)
    const [details, setDetails] = pd

    const clickHandler = async () => {
        if(query) {
            suggest([])
            let data = await getPlaceDetails(query)

            if(data == undefined) {
                alert("Could not fetch details of requested place")
                return;
            }
            
            setDetails(data);
        }
    }

    return (
        <div className="flex items-center">
            <queryContext.Provider value={{input:[query, setQuery], sug:[suggestions, suggest]}}>
                <InputBox />
            </queryContext.Provider>

            <button className="rounded-full bg-white text-black px-5 ml-5 h-10 transition ease-in-out delay-100 hover:scale-110" onClick={clickHandler}>Search</button>
        </div>
    )
}

export {SearchBox, queryContext}