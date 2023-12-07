import Image from 'next/image'
import Slider from './layouts/homeLayout/slider'
import Categories from './layouts/homeLayout/categories'
import Courses from './layouts/homeLayout/courses'
import Blogs from './layouts/homeLayout/blogs'
import CompanyInfo from './layouts/homeLayout/company-info'
import Promote from './layouts/homeLayout/promote'
import Testimonial from './layouts/homeLayout/testimonial'
import AboutUs from './layouts/homeLayout/about-us'
import ContactUs from './layouts/homeLayout/contact-us'
import Newsletter from './layouts/homeLayout/newsletter'


const apiUrl = 'https://school.web.astrosoftware.com.np/api/v1/'
const apiKey = 'p2yrhocea##)+87ob2#=$8&hs+@yh0dtr^nxeoq$tjug%se4fl'
const samanyaGyanUrl = 'samanya-gyan'
const lokSewaUrl = 'categories'

interface LokSewa {
    id: number,
    title: string,
}

async function getLokSewaData() {

    try {
        const response = await fetch(`${apiUrl}${lokSewaUrl}`, {
            headers: {
                'Api-Key': apiKey,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();

    } catch (error: any) {
        console.error('Error fetching LokSewa:', error.message);
        throw error;
    }
}

interface SamanyaGyan {
    id: number,
    title: string,
    language: string,
    count: number,
    nepalId: number,
    globalId: number,
}

async function getSamanyaGyanData() {
    try {
        const response = await fetch(`${apiUrl}${samanyaGyanUrl}`, {
            headers: {
                'Api-Key': apiKey,
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();

    } catch (error: any) {
        console.error('Error fetching SamanyaGyan:', error.message);
        throw error;
    }
}

export default async function Home() {

    const samanyaGyanDatas: Array<SamanyaGyan> = await getSamanyaGyanData();
    const LokSewaDatas: Array<LokSewa> = await getLokSewaData();

    return (
        <>
            <Slider/>
            <Categories data={{samanyaGyanDatas}}/>
            <Courses/>
            <Blogs/>
            <CompanyInfo/>
            <Promote/>
            <Testimonial/>
            <AboutUs/>
            <ContactUs/>
            <Newsletter/>
        </>
    )
}
