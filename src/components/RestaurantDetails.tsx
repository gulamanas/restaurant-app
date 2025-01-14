import React from "react";
import "./RestaurantDetails.css";

interface RestaurantDetailsProps {
    imageUrl: string;
    restaurantName: string;
    description: string
}

const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({ imageUrl, restaurantName, description }) => {
    return (
        <div className="restaurant-container">
            <div className="restaurant-image">
                <img src={imageUrl} alt={restaurantName} />
            </div>

            <div className="restaurant-details">
                <h1 className="restaurant-name">{restaurantName}</h1>
                <p className="restaurant-description">{description}</p>
            </div>
        </div>
    );
};

export default RestaurantDetails;
