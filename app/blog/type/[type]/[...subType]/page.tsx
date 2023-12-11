import Link from "next/link"
import {getBlogData} from '@/app/utils/globalApiFetch';
import Image from "next/image";


interface BlogPros {
    params: { subType: string }
}

interface Blog {
    id: number,
    title: string,
    slug: string,
    image: string,
    short_description: string
}

export default async function Home({params}: BlogPros) {
    const [blogs] = await Promise.all([
        getBlogData(),
    ]);


    return (
        <>

            <section className="breadcrumb-area section-padding img-bg-2"
                     style={{backgroundImage: 'url("/assets/home/images/group-of-students-studying-together.jpg")'}}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between">
                        <div className="section-heading">
                            <h2 className="section__title text-white">{params.subType}</h2>
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
                                    {// @ts-ignore
                                        params.type.toUpperCase()
                                    }
                                </Link>
                            </li>

                            <li>{params.subType}</li>
                        </ul>
                    </div>

                </div>

            </section>

            <section className="blog-area section--padding">
                <div className="container-fluid">
                    <div className="row">

                        {blogs.data.slice(0, 10).map((item: Blog, index: number) => (
                            <div key={index} className="col-lg-3">
                                <div className="card card-item">
                                    <div className="card-image">
                                        <a href="#" className="d-block">
                                            <Image className="card-img-top lazy" src={item.image}
                                                   alt="Card image cap" width={400} height={300}/>
                                        </a>
                                        <div className="course-badge-labels">
                                            <div className="course-badge">Jan 24, 2020</div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="#">{item.title}</a>
                                        </h5>
                                        <p style={{textAlign: 'justify'}}>{item.short_description && item.short_description.length > 210 ? `${item.short_description.slice(0, 210)}...` : item.short_description}</p>
                                        <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet d-flex align-items-center flex-wrap fs-14 pt-2">
                                            <li className="d-flex align-items-center">By<a href="#">Admin</a></li>
                                            <li className="d-flex align-items-center"><a href="#">4 Comments</a></li>
                                            <li className="d-flex align-items-center"><a href="#">130 Likes</a></li>
                                        </ul>
                                        <div className="d-flex justify-content-between align-items-center pt-3">
                                            <a href="#" className="btn theme-btn theme-btn-sm theme-btn-white">Read
                                                More <i
                                                    className="la la-arrow-right icon ml-1"></i></a>
                                            <div className="share-wrap">
                                                <ul className="social-icons social-icons-styled">
                                                    <li className="mr-0"><a href="#" className="facebook-bg"><i
                                                        className="la la-facebook"></i></a></li>
                                                    <li className="mr-0"><a href="#" className="twitter-bg"><i
                                                        className="la la-twitter"></i></a></li>
                                                    <li className="mr-0"><a href="#" className="instagram-bg"><i
                                                        className="la la-instagram"></i></a></li>
                                                </ul>
                                                <div
                                                    className="icon-element icon-element-sm shadow-sm cursor-pointer share-toggle"
                                                    title="Toggle to expand social icons"><i
                                                    className="la la-share-alt"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}


                    </div>
                    <div className="text-center pt-3">
                        <nav aria-label="Page navigation example" className="pagination-box">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true"><i className="la la-arrow-left"></i></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true"><i className="la la-arrow-right"></i></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <p className="fs-14 pt-2">Showing 1-6 of 56 results</p>
                    </div>
                </div>
            </section>


        </>
    )
}
