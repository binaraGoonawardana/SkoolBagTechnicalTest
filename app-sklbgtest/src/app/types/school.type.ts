interface SchoolAddress {
    street: string;
    surburb: string;
    postcode: string;
    state: string
}

export interface School {
    name: string;
    results: SchoolAddress;
    studentCount: number
}