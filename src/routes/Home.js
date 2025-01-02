import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home () {
    return (
        <>
            <Navbar/>
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Your Journey Your Story"
                text="Choose Your Favorite Destination"
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
        </>
    );
}

export default Home;