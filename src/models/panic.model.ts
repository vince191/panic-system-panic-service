
export interface PanicItem {
    id: string;
    userId: string;
    firstName: string;
    lastName: string;
    lat: string;
    lng: string;
    requestType: 'medical' | 'police' | 'other',
    address: string;
    status: 'pending' | 'completed';
    createdDate: string;
}