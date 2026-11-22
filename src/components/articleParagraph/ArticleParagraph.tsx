// This component will replace all repeated formatters across most pages
// Debt: This component cannot tell what level the header should be, it's hardcoded as h4 and assumes each page use three levels before this

import type { IArticleParagraph } from "@/models/article-paragraph"

function ArticleParagraph({
    content
} : {
    content: IArticleParagraph
}) {

    // Common paragraph
    if (typeof content === 'string') return <p>{content}</p>

    // Formatted
    if (typeof content === 'object') {

        if (content.type === 'uList') return <section>
            <h4>{content.uListHeading}</h4>
            <ul>
                {content.uListContent.map((content, index) => (
                    <li key={index}>{content}</li>
                ))}
            </ul>
        </section>
        
        if (content.type === 'url') return <a href={content.urlString} target="_blank">{content.friendlyUrlString}</a>
    }
}

export default ArticleParagraph