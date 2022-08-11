import React from "react";
const Offers = (props) => {
    const { card } = props;
    return (
        <div className="card">
            {card.map((item) => {
                return (
                    <div className="offers">
                        <label className="offerInp">
                            <strong>{item.label}</strong>
                        </label>
                        <img className="image5css"
                            src={item.ImgURL}
                            height="80px"
                            width="80px"
                        />

                    </div>
                );
            })}
        </div>
    );
};
export default Offers;