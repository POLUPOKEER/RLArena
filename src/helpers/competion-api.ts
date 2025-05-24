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

export const fetchContests = async (setCompetitions, setLoading) => {
    try {
        const res = await fetch('http://localhost/api/v1/contests');
        const summaryList = await res.json();

        const detailsPromises = summaryList.map(async (summary) => {
            const detailsRes = await fetch(`http://localhost/api/v1/contests/${summary.slug}`);
            const details = await detailsRes.json() as contestDetails;
            return getCompetitionGeneral(summary, details);
        });
        const newCompetitions = await Promise.all(detailsPromises);

        setCompetitions([...newCompetitions, ...competitionsData]);
    } catch (error) {
        console.error('Ошибка загрузки соревнований', error);
    } finally {
        setLoading(false);
    }
};

const getCompetitionGeneral = (summary: contestSummary, details: contestDetails): competitionType => {
    const startDate = `${details.start_date.slice(8, 10)}.${details.start_date.slice(5, 7)}.${details.start_date.slice(0, 4)}`;
    const endDate = `${details.end_date.slice(8, 10)}.${details.end_date.slice(5, 7)}.${details.end_date.slice(0, 4)}`;
    const description = summary.shortDescription;
    const categoty = description.includes('профессионалов') ? 'professional' :
        description.includes('опытных') ? 'midlle' : 'beginner';
    return {
        title: `${summary.title} — ${summary.shortInfo}`,
        description: description,
        icon: details.author.profile_image,
        author: details.author.company ? details.author.company : details.author.username, //- Будет ввывод имени или компании создателя
        categoty: categoty,
        start_date: startDate,
        end_date: endDate,
    };
};

