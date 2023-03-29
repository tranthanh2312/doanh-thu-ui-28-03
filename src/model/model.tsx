export interface Item {
    itemId: number;
    itemName: string;
    itemType: ItemType;
    basePrice: number;
}

export interface ItemType {
    itemTypeId: string;
    itemTypeName: string;
    description: string;
}

export interface Class {
    id: string;
    className: string;
    price: number;
    users: User[],
}

export interface User {
    id: number,
    fullname: string,
    phone: string,
}

