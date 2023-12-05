export interface ILoginData {
    email: string
    password: string
}

export interface IRegistrationResponseData {
    user: {
        id: number
        email: string
        password: string
        favouriteProducts: IProduct[]
        productsInBasket: IProduct[]
        productsInPurchases: IProduct[]
    }
    token: string
}

export interface IUser {
    id: number
    email: string
    favouriteProducts: IProduct[]
    productsInBasket: IProduct[]
    productsInPurchases: IProduct[]
    token: string
}

export interface IProduct {
    id: number
    brand: string
    title: string
    price: number
    size: number
    image: string
    favoiriteUsers: IUser[]
    basketUsers: IUser[]
    purcheseUsers: IUser[]
}

export interface IToggleProductDto {
    userId: number
    product: IProduct
}
