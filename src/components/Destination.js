import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import "./DestinationStyles.css";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to adventure</p>
            <div className="first-des">
                <div className="des-text">
                    <h2>Taal Volcano, Batangas</h2>
                    <p>One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake on an island.</p>
                </div>
                <div className="image">
                    <img alt="img" src={Mountain1}/>
                    <img alt="img" src={Mountain2}/>
                </div>
            </div>
        </div>
    )
}

export default Destination