type IInnerHTML = {
    type: 'innerHTML',
    content: string
}

type IUList = {
    type: 'uList',
    uListHeading?: string,
    uListContent: string[]
}

type IUrl = {
    type: 'url',
    content: string,
    friendlyContent: string
}

type IFormattedParagraph = {
    type: 'formattedParagraph',
    content: string,
    textFormat: 'strong' | 'strikethrough' | 'underline' | 'italic'
}

type IContentSection = string[] | IInnerHTML[] | IUList[] | IUrl[] | IFormattedParagraph[]
export type IContentSectionObject = IInnerHTML | IUList | IUrl | IFormattedParagraph

export type INervousSystem = {
    heading: string,
    contentSections: IContentSection[]
}