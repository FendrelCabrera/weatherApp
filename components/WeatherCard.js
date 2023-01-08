import Image from "next/image"

const WeatherCard = ({ placeDetails }) => {
    return (
        <div className=" rounded-lg border-amber-900 bg-red-200 border-8 p-10 hover:animate-pulse text-xl h-2/3 w-5/12">
            <div className="grid grid-cols-2 justify-items-evenly">
            
                <div className="col-span-2 flex justify-center">
                    <Image className=" mr-3" src={placeDetails.condition.iconAddress} alt="" width={64} height={64}/>
                    <label className="font-semibold text-5xl">{placeDetails.condition.text}</label>
                </div>

                <div className="">
                    <div className="grid grid-cols-1">
                        <label className="font-semibold">Name</label>
                        <label >{placeDetails.name}</label>
                    </div>

                    <div className="grid grid-cols-1">
                        <label className="font-semibold">Country</label>
                        <label >{placeDetails.country}</label>
                    </div>

                    <div className="grid grid-cols-1">
                        <label className="font-semibold">Local Time</label>
                        <label >{placeDetails.localTime}</label>
                    </div>

                    <div className="grid grid-cols-1">
                        <label className="font-semibold">Humidity</label>
                        <label >{placeDetails.humidity}</label>
                    </div>

                </div>


                <div className="">
                    <div className="grid grid-cols-1">
                        <label className="font-semibold font-xl">Region</label>
                        <label >{placeDetails.region}</label>
                    </div>

                    <div className="grid grid-cols-1">
                        <label className="font-semibold">Timezone</label>
                        <label >{placeDetails.timezone}</label>
                    </div>

                    <div className="grid grid-cols-1">
                        <label className="font-semibold">Temperature</label>
                        <label >{placeDetails.temp}</label>
                    </div>

                    <div className="grid grid-cols-1">
                        <label className="font-semibold">Precipitation</label>
                        <label >{placeDetails.precip}</label>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 col-span-2 justify-items-center">
                    <label className="font-semibold">Wind Speed</label>
                    <label >{placeDetails.windSpeed}</label>
                </div>
            </div>
        </div>
    )
}

export { WeatherCard }