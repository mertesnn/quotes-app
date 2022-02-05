import { authors } from "./Lib";

const Action = ({
    changeQuote,
    authorChange,
    colorful
}) => {
    return (
        <div className="action">
            <label className="switch">
                <input ref={colorful} type="checkbox" />
                <i className="fas fa-palette slider"></i>
            </label>
            <select onChange={(e) => authorChange(e)} className="choose-author">
                <option value="0">Select Your Favoriote Author!</option>
                {authors.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
            <button className="change-button" onClick={() => changeQuote()}>Change Quote!</button>
        </div>
    );
}

export default Action;