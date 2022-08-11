import React from "react";
import headerimg from "../Resourses/headerimg.jpg";
import arrow from "../Resourses/arrow.png";
import profile from "../Resourses/profile.webp";
import filter from "../Resourses/filter.png";
import search from "../Resourses/search.png";

const Header = () => {
    return (

        <div className="Header">
            <div className="upperHeader">
                <div className="upperLeftHeader">
                    <div className="imageLeftHeader">
                        <img className="imagecss"
                            src={headerimg}
                            alt="food delivery image"
                            width="30px"
                            height="30px"
                        ></img>
                    </div>
                    <div className="titleHeader">
                        <div className="title1">
                            <label>Deliver now!</label>
                        </div>
                        <div className="title2">
                            <div className="titleHeading">
                                <label><strong>Current Location</strong></label>
                            </div>
                            <div className="arrow_img">
                                <img className="image1css"
                                    src={arrow}
                                    alt="arrow image"
                                    height="15px"
                                    width="15px">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="upperRightHeader">
                    <img className="image1css"
                        src={profile}
                        alt="profile image"
                        height="20px"
                        width="20px">
                    </img>
                </div>
            </div>
            <div className="lowerHeader">
                <div className="lowerLeftHeader">
                    <img className="image3css"
                        src={search}
                        alt="search image"
                        height="15px"
                        width="15px">
                    </img>
                    <input className="searchInput" type={Text} placeholder="Restaurants and Cuisine:"></input>
                </div>
                <div className="lowerRightHeader">
                    <img className="image4css"
                        src={filter}
                        alt="filter image"
                        height="20px"
                        width="20px">
                    </img>
                </div>
            </div>
        </div>
    )
}
export default Header