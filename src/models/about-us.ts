type IUrl = {
    type: 'url',
    urlString: string,
    friendlyUrlString: string
}

export type IObjectContent = IUrl

export type IAboutUs = string[] | IUrl[]