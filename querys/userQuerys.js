import { gql } from "@apollo/client";

const ME = gql`
    query getMe {
        me {
            name
            cellphone
            birthDate
            email
            password
            sex
            userType
            userLevel
            membership
            coupons {
                couponType
                couponDescription
                couponAmount
                couponDate
                couponApplied
            }
            preferences {
                preferenceType
            }
            trips {
                tripDate
                tripName
                tripStatus
            }
        }
    }
`;


const GET_USERS = gql`
    query getUsers {
        users {
            name
            cellphone
            birthDate
            email
            password
            sex
            reference
            userType
            userLevel
            membership
            coupons {
                couponType
                couponDescription
                couponAmount
                couponDate
                couponApplied
            }
            preferences {
                preferenceType
            }
        }
    }
`;


export {
    ME, GET_USERS
};