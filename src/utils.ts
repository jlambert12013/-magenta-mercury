function parseDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    }

    return new Date(date).toLocaleDateString(undefined, options)
}

function parseLink(link: string): string {
    const regex1 = /home/i
    const regex2 = /[^a-zA-Z ]/g

    let formatted = link.replace(regex1, "")
    formatted = formatted.replace(regex2, "")
    formatted = formatted.replaceAll(" ", "")
    formatted = formatted.toLowerCase()
    return formatted
}

export { parseDate, parseLink }