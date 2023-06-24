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

const ME_PI = gql`
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
        }
    }
`;

const GET_USER = gql`
    query getUser($email: String){
        user(email: $email) {
            name
            cellphone
            guideDescription
            guidePhoto
        }
    }
`;

export { ME, ME_PI, GET_USER };