import { Route, Routes } from "react-router"
import nervousSystemDataRaw from "@/content/nervous-system.json"
import type { IContentSectionObject, INervousSystem } from "@/models/nervous.system"

function DisplayPage() {
    const nervousSystemData = nervousSystemDataRaw as INervousSystem[]

    function CommonParagraph({paragraph}: {paragraph: string}) {
        return <p>{paragraph}</p>
    }

    function ObjectContent({contents}: {contents: IContentSectionObject}) {
        if (contents.type === 'innerHTML') return (
            <p>{contents.content}</p>
        )
        if (contents.type === 'uList') return (
            <>
                {contents.uListHeading && <h4>{contents.uListHeading}</h4>}
                <ul>
                    {contents.uListContent.map((content, index) => (
                    <li key={index}>{content}</li>
                    ))}
                </ul>
            </>
        )
        if (contents.type === 'url') return (
            <a href={contents.content} target="_blank">{contents.friendlyContent}</a>
        )
        if (contents.type === 'formattedParagraph') switch(contents.textFormat) {
            case 'strong':
                return <strong>{contents.content}</strong>
            case 'strikethrough':
                return <s>{contents.content}</s>
            case 'underline':
                return <u>{contents.content}</u>
            case 'italic':
                return <i>{contents.content}</i>
        }
    }

    return (
        <>
            <h2>Hälsa för nervsystemet</h2>
            {nervousSystemData.map((nervousSection, index) => (
                <div key={index}>
                    <h3>{nervousSection.heading}</h3>
                    {nervousSection.contentSections.map((contentSection, index) => (
                        <div key={index}>
                            {contentSection.map((section, index) => (
                                <div key={index}>
                                    {typeof section === 'string' && <CommonParagraph paragraph={section}/>}
                                    {typeof section === 'object' && <ObjectContent contents={section}/>}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}

function NervousSystem() {
    
    return (
        <Routes>
            <Route index element={<DisplayPage/>}/>
        </Routes>
    )
}

export default NervousSystem