//interfaces

export interface IPermission {
	id: number
	name: string
}

export interface TGenderNAge {
	Gender: string
	AgeFrom: number
	AgeTo: number
}

export interface IUser {
	id: number
	name: string
	avatar: string
	token: string
	permission: IPermission
	isBlogger: boolean
}

//enums

export enum FileType {
	image,
	video,
	audio,
}

// types
