import {blogger_v3} from "googleapis";

const getFormattedDate = (post : blogger_v3.Schema$Post) => {
    const date = new Date(post.published ?? '');
    const options = {year: 'numeric', month: 'long', day: '2-digit'} as Intl.DateTimeFormatOptions;
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

const getImageURL = (post : blogger_v3.Schema$Post) => {
    const imageURLs = [];
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    while ((match = imgRegex.exec(post.content ?? "")) !== null) {
        imageURLs.push(match[1]);
    }
    return imageURLs[0];
}

const getDescription = (post : blogger_v3.Schema$Post) => {
    return post.content?.substring(0, 500).replace(/<[^>]+>/g, '');
}


export {getFormattedDate, getImageURL, getDescription};