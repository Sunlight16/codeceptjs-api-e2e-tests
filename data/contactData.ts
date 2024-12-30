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

export const userContact1: Contact ={
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

export const userContact2: Contact = {
    firstName: 'Steve',
    lastName: 'Smith',
    birthdate: '1979-11-11',
    email: 'steve.s@fake.com',
    phone: '4553556677',
    street1: '123 Long St.',
    street2: 'Apartment 1000',
    city: 'Los Angles',
    stateProvince: 'CA',
    postalCode: '90027',
    country: 'USA'
}