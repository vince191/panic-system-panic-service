import { Address } from "../../models/address.model";

// NOTE: call external service here to map coordinates to a real address, return static for now
export async function reverseGeoCodeCoordinates(lat: string, lng: string): Promise<Address> {
    console.log('reverse geocoding coordinates...')

    const result = {
        country: "South Africa",
        countryCode: "ZA",
        city: "Johannesburg",
        formattedAddress: '144 Oxford Rd, Melrose, Johannesburg, 2196'
    };

    return {
        country: result.country,
        countryCode: result.countryCode,
        city: result.city,
        address: result.formattedAddress,
        lat,
        lng
    }
}