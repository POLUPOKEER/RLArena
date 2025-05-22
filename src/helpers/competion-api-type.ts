import { competitionsData, competitionType } from "./competitons-data";

export type contestSummary = {
    slug: string;
    title: string;
    shortDescription: string;
    shortInfo: string;
    image: string;
    status: string;
};
export type contestAuthor = {
    company
    country
    date_registered
    email
    id
    profile_image: string,
    role
    username
}
export type contestDetails = {
    author: contestAuthor,
    author_id: number,
    contest_type: string,
    dataDescription: string,
    dataset
    dataset_id
    description
    end_date
    entrans
    id
    image
    leaderboard
    license
    metric
    shortDescription
    shortInfo
    slug
    start_date
    status
    submission_count
    submission_file_type
    target
    title
    uuid
};



