import AWS from "aws-sdk";
import { Database } from "../lib/database";

const db = new Database(new AWS.DynamoDB.DocumentClient());

export const handler = async (event: any) => {

    const data = JSON.parse(event.body);

    if(!data.id || !data.dateCreated) 
    {
        throw new Error('Invalid body data, please provide the required data to update')
    }

    var params = {
        TableName: process.env.PANIC_TABLE_DB,
        Key: {
            "id": data.id,
            "dateCreated": data.dateCreated
        },
        UpdateExpression: "set #status = :status",
        ConditionExpression: "id = :id",
        ExpressionAttributeNames: {
            '#status': 'status', 
        },
        ExpressionAttributeValues: {
            ":id": data.id,
            ":status": 'completed'
        },
        ReturnValues: "UPDATED_NEW"
    };

    const result = await db.update(params);
    return result;
};

