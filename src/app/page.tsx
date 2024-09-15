import {authenticate} from "@/bloggerUtils/authenticate";
import {getHomeSectionBlogs} from "@/bloggerUtils/bloggerUtils";
import TopCarousel from "@/components/pageSections/topCarousel";

export const revalidate = 60;

export default async function Home() {
    const auth = await authenticate();
    const blogId = process.env.BLOG_ID;
    const postsForEachCategory = await getHomeSectionBlogs(auth, blogId);
    return (
        <main className="flex flex-col items-center justify-center w-full lg:max-w-[1164px]">
            <TopCarousel postItemList={postsForEachCategory.get("topCarousel")}/>
            {/*hero section*/}
            {/*<HeroSection postItemList={postsForEachCategory.get("heroSection")}/>*/}
            {/*/!*featured news*!/*/}
            {/*<FeaturedSection postItemList={postsForEachCategory.get("international")}/>*/}
            {/*/!*technology*!/*/}
            {/*<TechnologySection postItemList={postsForEachCategory.get("technology")}/>*/}
            {/*/!*entertainment*!/*/}
            {/*<EntertainmentSection postItemList={postsForEachCategory.get("entertainment")}/>*/}
            {/*Sports*/}
            {/*<SportsSection postItemList={postsForEachCategory.get("sports")}/>*/}
            {/*/!*international news*!/*/}
            {/*<InternationalSection postItemList={postsForEachCategory.get("international")}/>*/}
        </main>
    );
}
