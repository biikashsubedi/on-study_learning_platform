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

export default function Home() {
    return (
        <>
            <Slider/>
            <Categories/>
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
