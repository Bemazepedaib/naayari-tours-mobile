import { gql } from "@apollo/client";

const GET_TRIPS = gql`
    query getTrips {
        trips{
            tripName
            tripInformation{
                description
                date
                place
                duration
                activities{
                    activityName
                    activityPhoto
                }
                price{
                    priceType
                    priceAmount
                }
                discount{
                    dateStart
                    dateEnd
                    amount
                    available
                }
                itinerary
                recomendations
                recommendedPlaces
                photo
            }
            tripKit
            tripRating
            tripStatus
            tripReview{
                user
                rating
                review
                date
                photo
            }
        }
    }
`;

const GET_TRIP = gql`
    query getTrip($tripName: String){
        trip(tripName:$tripName){
            tripName
            tripInformation{
                description
                date
                place
                duration
                activities{
                    activityName
                    activityPhoto
                }
                price{
                    priceType
                    priceAmount
                }
                discount{
                    dateStart
                    dateEnd
                    amount
                    available
                }
                itinerary
                recomendations
                recommendedPlaces
                photo
            }
            tripKit
            tripRating
            tripStatus
            tripReview{
                user
                rating
                review
                date
                photo
            }
        }
    }
`;

export { 
    GET_TRIPS, GET_TRIP
};