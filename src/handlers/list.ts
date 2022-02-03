import AWS from "aws-sdk";
import { Database } from "../lib/database";

const db = new Database(new AWS.DynamoDB.DocumentClient());

export const handler = async (event: any) => {

    const params = {
        TableName: process.env.PANIC_TABLE_DB,
        ExpressionAttributeNames: {
            "#status": "status"
        },
        ExpressionAttributeValues: {
            ":status": 'completed',
        },
        FilterExpression: "#status <> :status",
    }

    const result = await db.load(params);
    return result.Items;
};

