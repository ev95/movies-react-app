export type GenerType = {
    id: number,
    name: string
}

export type FilmType = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,

    belongs_to_collection?: boolean,
    budget? : number,
    genres?: Array<GenerType>,
    homepage?: string,
    imdb_id?: string,
    origin_country?: string[],
    production_companies?: Array<{
        id: number
        logo_path: string,
        name: string
    }>,
    production_countries?: [],
    revenue? : number,
    runtime? :string
    spoken_languages? : [],
    status? : string,
    tagline?: string 
}