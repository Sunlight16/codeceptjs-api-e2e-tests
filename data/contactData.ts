export interface Contact {
    firstName: string,
    lastName: string,
    birthdate: string,
    email: string,
    phone: string,
    street1: string,
    street2: string,
    city: string,
    stateProvince: string,
    postalCode: string,
    country: string
}

export const newContact: Contact ={
    firstName: 'John',
    lastName: 'Doe',
    birthdate: '1970-01-01',
    email: 'jdoe@fake.com',
    phone: '8005555555',
    street1: '1 Main St.',
    street2: 'Apartment A',
    city: 'Anytown',
    stateProvince: 'KS',
    postalCode: '12345',
    country: 'USA'
}