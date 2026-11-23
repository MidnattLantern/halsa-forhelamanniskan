type IInternalUrl = {
    type: "internalUrl",
    urlString: string,
    friendlyUrlString: string
}

type IDecorated = {
    type: "decorated",
    decoration: "strong" | "strikethrough" | "underline" | "italic",
    text: string
}

type IUrl = {
    type: "url",
    urlString: string,
    friendlyUrlString: string
}

type IUListFormat = {
    type: "uList",
    uListHeading?: string,
    uListContent: string[]
}

export type INervousSystem = {
    heading: string,
    textContent: string[] | IUListFormat[] | IUrl[] | IDecorated[] | IInternalUrl[]
}