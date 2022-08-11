const RestoCard = (props) => {
    const { asian, star, location, restoName, rating, address } = props;
    return (
        <div className="restoCard">
            <div className="cardimg">
                <img className="restoimg"
                    src={asian}
                    alt="Asian food"
                    height="150px"
                    width="250px" />
            </div>
            <div className="description">
                <label>
                    <strong>{restoName}</strong>
                </label>
                <div className="starRating">
                    <img className="star"
                        src={star}
                        alt="Rating"
                        height="15px"
                        width="15px" />
                    <label className="rating">{rating} offers</label>
                </div>
                <div className="locationAdd">
                    <img className="location"
                        src={location}
                        alt="Location"
                        height="15px"
                        width="15px" />
                    <label className="address">Nearby-{address}</label>
                </div>
            </div>
        </div>
    )

}
export default RestoCard