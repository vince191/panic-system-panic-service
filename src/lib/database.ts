import AWS from "aws-sdk"; 

export const TABLES = {
    PANIC: 'PanicSubmits'
}

export class Database {

    constructor(private dbInstance: AWS.DynamoDB.DocumentClient) {
    }

    async save(params: any) {
        try {
            return await this.dbInstance.put(params).promise();
        } catch (error) {
            console.log('Dynamo DB save to database failed.', error);
            throw new Error('Failed to save data to dynamodb');
        }
    }

    async load(params: any) {
        try {
            return await this.dbInstance.scan(params).promise();
        } catch (error) {
            console.log('Dynamo DB load from database failed.', error);
            throw new Error('Failed to load data from dynamodb');
        }
    }

    async update(params: any) {
        try {
            return await this.dbInstance.update(params).promise();
        } catch (error) {
            console.log('Dynamo DB update to database failed.', error);
            throw new Error('Failed to update data to dynamodb');
        }
    }
}
