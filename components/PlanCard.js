const PlanCard = () => {
    return (
        <div className="grid grid-cols-1 border-white border-4 rounded justify-items-center w-fit p-10 my-5 bg-red-200">
            <div className=" grid grid-cols-1 justify-items-center border-b-2 pb-5 mb-5">
                <p className="text-5xl font-serif font-semibold">Premium Subscription Plan</p>
                <p className="text-3xl">Only @ Rs99/month</p>
            </div>

            <ul className="list-disc text-2xl border-b-2 pb-5 w-full pl-5">
                <li>Unlimited Requests</li>
                <li>Free API access</li>
                <li>Custom SMS</li>
                <li>Realtime Weather Alerts</li>
            </ul>

            <p className="pt-5 text-5xl font-serif">Join Now !</p>
        </div>
    )
}

export { PlanCard }