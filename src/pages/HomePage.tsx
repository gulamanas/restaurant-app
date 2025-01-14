import RestaurantDetails from "../components/RestaurantDetails"
import { restaurantDetails } from "../data/restaurantDetails"

const HomePage = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <p>Welcome to the Home Page!</p>
            {
                restaurantDetails.map((item, index) => (
                    <div key={index}>
                        <RestaurantDetails
                            imageUrl={item.imageUrl}
                            restaurantName={item.restaurantName}
                            description={item.description}
                        />

                    </div>
                ))
            }
        </div>
    )
}

export default HomePage