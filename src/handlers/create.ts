import AWS from "aws-sdk";
import { v4 as uuidv4 } from 'uuid';
import { Database } from "../lib/database"
import { CreatePanicResponse } from "models/create-panic-response.model";
import { reverseGeoCodeCoordinates } from "../lib/addresses/address";
import { getUserDetails } from "../lib/users/user";

const db = new Database(new AWS.DynamoDB.DocumentClient());

export const handler = async (event: any): Promise<CreatePanicResponse> => {

    const data = JSON.parse(event.body);
    const user = await getUserDetails(data);
    const id = uuidv4();
    const dateCreated = new Date();
    const status = 'pending';
    const address = await reverseGeoCodeCoordinates(data.lat, data.lng);
    const lat = data.lat;
    const lng = data.lng;
    const requestType = data.requestType;

    await db.save({
        TableName: process.env.PANIC_TABLE_DB,
        Item: {
            id,
            lat,
            lng,
            user,
            status,
            address,
            requestType,
            dateCreated: dateCreated.toUTCString(),
        }
    });

    return {
        id,
        user,
        address,
        requestType,
        status,
        dateCreated: dateCreated.toISOString()
    };
};
