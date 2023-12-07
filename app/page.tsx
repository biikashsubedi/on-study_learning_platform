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
import {getLokSewaData, getSamanyaGyanData} from './utils/globalApiFetch';


export default async function Home() {

    const [samanyaGyanDatas, LoksewaDatas] = await Promise.all([
        getSamanyaGyanData(),
        getLokSewaData(),
    ]);

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
