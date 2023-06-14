import { gql } from "@apollo/client";

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
    GET_USERS
};