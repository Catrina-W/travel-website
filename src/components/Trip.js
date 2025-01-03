import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps</p>
            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading="Trip in Indonesia"
                    text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia"
                />
                <TripData
                    image={Trip2}
                    heading="Trip in Malaysia"
                    text="IMalaysia is known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences"
                />
                <TripData
                    image={Trip3}
                    heading="Trip in France"
                    text="Paris, its capital is famed for its fashion houses, classical art museums like the Louvre"
                />
            </div>
        </div>
    );
}

export default Trip;