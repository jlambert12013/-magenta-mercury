
function parseDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    }

    return new Date(date).toLocaleDateString(undefined, options)
}

function parseLink(link: string): string {
    let formatted = link.replace(/\s/g, '-')

    formatted.toLocaleLowerCase
    return formatted
}


export {
    parseDate, parseLink
}