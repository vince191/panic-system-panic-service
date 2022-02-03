import { AppUser } from "../../models/user.model"

// This function can do 1 of the following to return the user data, for now returns static data
// 1. Retrieve the claims from the identity object in the context that was fetched from APIGateway Authorizer to Cognito
// 2. Call a possible user service that works with user related data in cognito 
export async function getUserDetails(bodyData: any): Promise<AppUser> {
    console.log('mapping user identity attributes...')
    return {
        id: bodyData.userId,
        firstName: bodyData.userFirstName,
        lastName: bodyData.userLastName,
        role: 'User'
    }
}
