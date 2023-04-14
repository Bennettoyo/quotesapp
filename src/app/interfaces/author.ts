export interface author {
    authorId: string,
    author: string,
    category: string,
    desc: string,
    info: string[],
    img: string,
    showQuotes: boolean,
    initialBreakpoint?: string
}

export enum authorCategoryEnum {
    ancientPhilosopher = "ancientPhilosopher",
    philosopher = "philosopher",
    country = "country",
    show = "show",
    religiousFigure = "religiousFigure"
}
