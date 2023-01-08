import { Form } from "../components/Form";
import { Navbar } from "../components/NavBar";
import { PlanCard } from "../components/PlanCard";

export default function Subscribe () {
    const bgAddress = "/subscribe_bg.png"
    return (
        <div className="bg-cover h-screen overflow-hidden" style={{backgroundImage: `url(${bgAddress})`}}>
            <Navbar />

            <div className="grid grid-cols-2 justify-items-center items-center h-screen">
                <PlanCard />
                <Form />
            </div>
        </div>
    )
}

