import React from "react";
import { Link } from "react-router-dom";
import './listing.css';
import MealCuisine from "./mealCuisine";

const ListingDisplay = (props) => {

    const renderData = ({ restroData }) => {
        if (restroData) {
            if (restroData.length > 0) {
                return restroData.map((item) => {
                    return (
                        <div className="item" key={item._id}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img className="Image" alt={item.restaurant_name} src={item.restaurant_thumb} />
                                </div>
                                <div className="col-md-7">
                                    <div className="hotel_name">
                                        <Link to={`/details/${item.restaurant_id}`}>{item.restaurant_name}</Link>
                                        <div className="city_name">{item.address}</div>
                                        <div className="city_name">{item.rating_text}</div>
                                        <div className="city_name">Rs. {item.cost}</div>
                                        <MealCuisine mealCuisine={item}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            } else{
                return(
                    <>
                        <h2>No Data Found For Filter</h2>
                    </>
                )
            }
        } else {
            return (
                <div>
                    <img src="/images/loader.gif" alt="loader" />
                    <h3>Loading....</h3>
                </div>
            )
        }
    }

    return (
        <div id="content">
            {renderData(props)}
        </div>
    )

}

export default ListingDisplay;