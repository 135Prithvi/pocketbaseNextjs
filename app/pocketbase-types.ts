/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Address = "address",
	Cart = "cart",
	Orders = "orders",
	Products = "products",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AddressRecord = {
	line1: string
	line2?: string
	pincode: number
	state: string
	country: string
	phone: number
	city: string
	user: RecordIdString
}

export type CartRecord = {
	cartItems?: RecordIdString[]
	user: RecordIdString
}

export enum OrdersOrderStatusOptions {
	"confirmed" = "confirmed",
	"pickedup" = "pickedup",
	"coming-today" = "coming-today",
	"delivered" = "delivered",
}
export type OrdersRecord = {
	orderStatus?: OrdersOrderStatusOptions
	address: RecordIdString
	product: RecordIdString
	user: RecordIdString
	expectedDate?: IsoDateString
}

export type ProductsRecord = {
	name: string
	description: string
	image: string
	reviews?: number
	avg_rating?: number
	price: number
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AddressResponse<Texpand = unknown> = Required<AddressRecord> & BaseSystemFields<Texpand>
export type CartResponse<Texpand = unknown> = Required<CartRecord> & BaseSystemFields<Texpand>
export type OrdersResponse<Texpand = unknown> = Required<OrdersRecord> & BaseSystemFields<Texpand>
export type ProductsResponse<Texpand = unknown> = Required<ProductsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	address: AddressRecord
	cart: CartRecord
	orders: OrdersRecord
	products: ProductsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	address: AddressResponse
	cart: CartResponse
	orders: OrdersResponse
	products: ProductsResponse
	users: UsersResponse
}