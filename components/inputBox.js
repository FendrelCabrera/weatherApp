import { useContext } from "react";
import { getSuggestions } from "../pages/api/lookup";
import { queryContext } from "./SearchBox";

const InputBox = () => {

    const {input, sug} = useContext(queryContext);

    const [inputValue, setInput] = input
    const [suggestions, suggest] = sug

    const handleChange = async(e) => {
        if(e.target.value.length < 3) {
            suggest([])
            return;
        }

        let data = await getSuggestions(e.target.value);
        suggest(data)
    }

    const optionClick = (e) => {
        setInput(e.target.text)
        suggest([])
    }

    return (
        <div className="grid grid-cols-1 justify-items-center">
            <input className="rounded border-4 w-96 text-black h-10" onChange={(e) => {
                setInput(e.target.value);
                handleChange(e);
            }} value={inputValue} placeholder="Enter location" />
            

            {
                suggestions?
                <ul className="bg-white w-96">
                    {
                        suggestions.map((item, i) => (
                            <li key={i} className="border-b-2">
                                <a className="text-ellipsis" onClick={optionClick}>{item}</a>
                            </li>
                        ))
                    }
                </ul>
                :<></>
            }

        </div>
    )
}

export default InputBox;