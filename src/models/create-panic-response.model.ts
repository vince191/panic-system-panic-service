import { Address } from "./address.model";
import { AppUser } from "./user.model";

export interface CreatePanicResponse {
    id: string;
    user: AppUser;
    address: Address;
    requestType: string;
    status: string;
    dateCreated: string;
}