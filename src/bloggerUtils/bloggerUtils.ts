import {OAuth2Client} from "google-auth-library";
import {blogger} from "@googleapis/blogger";
import {blogger_v3} from "googleapis";


// post a new blog
const postBlog = async (auth: OAuth2Client, blogId: string, title: string, content: string) => {
    const blogger_V3 = blogger({version: 'v3', auth});
    const res = await blogger_V3.posts.insert({
        blogId,
        requestBody: {
            title,
            content,
        },
    });
    return res.data;
};

// get all blogs
const getBlogs = async (auth: OAuth2Client, blogId: string) => {
    const blogger_V3 = blogger({version: 'v3', auth});
    const res = await blogger_V3.posts.list({
        blogId,
    });
    return res.data;
};

// get a specific blog by path name
const getBlogByPath = async (auth: OAuth2Client, blogId: string, path: string) => {
    const blogger_V3 = blogger({version: 'v3', auth});
    const res = await blogger_V3.posts.getByPath({
        blogId,
        path,
    });
    return res.data;
};

// get blog by label
const getBlogsByLabel = async (auth: OAuth2Client, blogId: string, label: string) => {
    const blogger_V3 = blogger({version: 'v3', auth});
    const res = await blogger_V3.posts.list({
        blogId,
        labels: label,
    });
    return res.data;
};

const getHomeSectionBlogs = async (auth: OAuth2Client, blogId: string | undefined) => {
    const categories = ['topCarousel', 'heroSection', 'latestPost', 'popularPost', 'trendingPost', 'featured', 'technology', 'mostView', 'entertainment', 'sliderPost', 'sports', 'international'];
    const postsForEachCategory: Map<string, blogger_v3.Schema$PostList> = new Map();

    for (const category of categories) {
        const posts = await getBlogsByLabel(auth, blogId ?? "", category);
        postsForEachCategory.set(category, posts);
    }
    return postsForEachCategory;
}


export {postBlog, getBlogs, getBlogsByLabel, getBlogByPath, getHomeSectionBlogs};