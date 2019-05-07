export interface Type {
    id: number
    name: string
}

export interface Tag {
    id: number
    typeId: number
    name: string
}

export interface Database {
    types: Type[]
    tags: Tag[]
}
