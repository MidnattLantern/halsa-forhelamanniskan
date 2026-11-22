type IUrl = {
    type: 'url',
    content: string,
    friendlyContent: string
}

export type IObjectContent = IUrl

export type IAboutUs = string[] | IUrl[]