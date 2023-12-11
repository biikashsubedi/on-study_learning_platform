import Link from "next/link"
import {getBlogChildCategoryDataBySlug} from '@/app/utils/globalApiFetch';
import {it} from "node:test";
import Image from "next/image";


interface BlogPros {
    params: { type: string }
}

interface Blog {
    id: number,
    title: string,
    slug: string,
    image: string,
    short_description: string
}

export default async function Home({params}: BlogPros) {
    const [blogChildCategories] = await Promise.all([
        getBlogChildCategoryDataBySlug(params.type),
    ]);


    return (
        <>

            <section className="breadcrumb-area section-padding img-bg-2"
                     style={{backgroundImage: 'url("/assets/home/images/group-of-students-studying-together.jpg")'}}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between">
                        <div className="section-heading">
                            <h2 className="section__title text-white">{params.type.toUpperCase()}</h2>
                        </div>
                        <ul className="generic-list-item generic-list-item-white generic-list-item-arrow d-flex flex-wrap align-items-center">
                            <li><Link
                                href="/">Home</Link>
                            </li>
                            <li><Link href="/blog"> Blog</Link></li>
                            <li>
                                <Link href={// @ts-ignore
                                    `/blog/type/${params.type}`}>
                                    Type
                                </Link>
                            </li>
                            <li>
                                <Link href={// @ts-ignore
                                    `/blog/type/${params.type}`}>
                                    {params.type.toUpperCase()}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="get-started-area position-relative bg-gray pb-90px">
                <span className="ring-shape ring-shape-1"></span>
                <span className="ring-shape ring-shape-2"></span>
                <span className="ring-shape ring-shape-3"></span>
                <span className="ring-shape ring-shape-4"></span>
                <span className="ring-shape ring-shape-5"></span>
                <span className="ring-shape ring-shape-6"></span>
                <div className="container">

                    <div className="row pt-80px">

                        {blogChildCategories.data.map((item: Blog, index: number) => (
                            <div key={index} className="col-lg-6">
                                <Link href={`/blog/type/${params.type}/${item.slug}`}>
                                    <div className="card card-item hover-y"
                                         style={{boxShadow: '0px 0px 4px 2px #3eaae5, 0px 0px 6px 2px #68fddf, 0px 0px 8px 6px #0fbd47'}}>
                                        <div className="card-body d-flex align-items-center">
                                            <div className="flex-shrink-0 avatar-lg">
                                                <Image width={100} height={100} src="/assets/home/images/img8.jpg" alt="card image"
                                                     className="w-100 rounded-full shadow-sm"/>
                                            </div>
                                            <div className="pl-4">
                                                <h5 className="card-title pt-4 pb-2"><Link
                                                    href={`/blog/type/${params.type}/${item.slug}`}>{item.title}</Link>
                                                </h5>
                                                <p className="card-text text-black"> {item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}

                    </div>

                    {blogChildCategories.data.length === 0 ? (
                        <p className='text-center'>No data available.</p>
                    ) : ('')}
                </div>
            </section>


        </>
    )
}
