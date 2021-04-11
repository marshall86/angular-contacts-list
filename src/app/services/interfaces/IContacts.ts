export interface Contacts {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface Address {
    street1: string;
    street2: string;
    town: string;
    country: string;
    countryName?: string;
    contactId: string;
    id: number;
}

export interface Countries {
    iso2: string;
    name: string;
}