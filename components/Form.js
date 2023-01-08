import { Router, useRouter } from "next/router"

const Form = () => {
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Submitted Successfully!")
        router.push("/")
        return;
    }

    return (
        <div>
            <form className="grid grid-cols-1 justify-items-center w-screen text-xl" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 justify-start mb-5">
                    <label className="font-semibold text-white" htmlFor="name">Name</label>
                    <input className=" w-96" type="text" id="name" required title="Enter your name"/>
                </div>

                <div className="grid grid-cols-1 justify-start mb-5">
                    <label className="font-semibold text-white" htmlFor="email">Email</label>
                    <input className="w-96" type="text" id="email" required pattern="\w+@nitc.ac.in" title="Enter a valid NITC email"/>
                </div>

                <div className="grid grid-cols-1 justify-start mb-5">
                    <label className="font-semibold text-white" htmlFor="number">Phone Number</label>
                    <input className="w-96" type="text"id="number" required pattern="[0-9]{10}"
                    title="Enter a valid 10 digit phone number" />
                </div>

                <div className="flex justify-center mb-5">
                    <input className="mr-2" type="checkbox" id="smsalerts" />
                    <label htmlFor="smsalerts" className="text-white">Get weather alerts and updates via SMS</label>
                </div>

                <button className="rounded-full px-5 py-2 bg-white transition ease-in-out delay-100 hover:scale-110"type="submit">Submit</button>
            </form>
        </div>
    )
}

export { Form }