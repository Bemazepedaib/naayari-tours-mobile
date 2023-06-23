import { gql } from "@apollo/client";

const GET_EVENT = gql`
    query getEvent($eventDate: String, $eventTrip: String) {
        event(eventDate: $eventDate, eventTrip: $eventTrip) {
            eventDate
            eventTrip
            eventType
            eventGuide
            eventStatus
            users {
                userEmail
                advancePayment
                fullPayment
                advancePaid
                fullyPaid
                observations
                companion {
                    companionType
                    companionName
                    companionCell
                    companionBirthdate
                }
            }
        }
    }
`;

export { GET_EVENT }