import CardImages from "./CardImages";
import InCardCircles from "./InCardCircles";
import Action from "./Action";

const Card = ({
    quote,
    changeQuote,
    authorChange,
    colorful
}) => {
    return (
        <div className="card-container">
            <CardImages />
            <InCardCircles />
            <h2 className="quote">
                {quote.text ? quote.text : 'No data.'}
            </h2>
            <h1 className="author">
                {quote.author ? quote.author : 'Unknown'}
            </h1>
            <Action
                changeQuote={changeQuote}
                authorChange={authorChange}
                colorful={colorful}
            />
        </div>
    );
}

export default Card;