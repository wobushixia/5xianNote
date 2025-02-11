import { marked } from 'marked'

const convertMarkdownToHTML = async (title:string) => {
    const response = await import(`@/layout/Articles/documents/${title}.md?raw`)
    const result = await marked.parse(response.default)
    return result
}

export default convertMarkdownToHTML