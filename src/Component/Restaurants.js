import React from "react";
import forwardArrow from "../Resourses/forwardArrow.jpg";
import star from "../Resourses/star.png";
import location from "../Resourses/location.png";
import asian from "../Resourses/asian.png"
import RestoCard from "./RestoCard";


const Restaurants = (props) => {
    const { item } = props;
    const { title, description, subArr } = item;
    return (
        <div className="restaurants">
            <div className="restoList">
                <div className="restaurants">
                    <div>
                        <label className="text1"><strong>{title}</strong></label>
                    </div>
                    <div>
                        <label className="text2">{description}</label>
                    </div>
                </div>
                <div>
                    <img className="img6css"
                        src={forwardArrow}
                        alt="Arrow"
                        height="30px"
                        width="40px" />
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {
                    subArr.map((item, index) => {
                        return (
                            <RestoCard
                                key={index}
                                asian={item.ImgURL}
                                star={star}
                                location={location}
                                restoName={item.restoName}
                                rating={item.rating}
                                address={item.location}
                            />
                        );
                    })
                }

            </div>

        </div>
    );
};
export default Restaurants;