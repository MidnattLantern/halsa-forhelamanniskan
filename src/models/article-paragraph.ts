type IUrl = {
    type: "url",
    urlString: string,
    friendlyUrlString: string
}

type IUListFormat = {
    type: "uList",
    uListHeading: string,
    uListContent: string[]
}

export type IArticleParagraph = string | IUListFormat | IUrl