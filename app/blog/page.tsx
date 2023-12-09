import Link from "next/link"
import {getBlogCategoryData, getBlogData} from '../utils/globalApiFetch';
import {it} from "node:test";


interface Blog {
    id: number,
    title: string,
    slug: string,
    image: string,
    short_description: string
}

interface BlogCategory {
    title: string,
    slug: string,
    child_categories: {
        title: string,
        slug: string
    },
}

export default async function Home() {
    const [blogs, blogCategories] = await Promise.all([
        getBlogData(),
        getBlogCategoryData(),
    ]);


    return (
        <>

            <section className="breadcrumb-area section-padding img-bg-2"
                     style={{backgroundImage: 'url("/assets/home/images/group-of-students-studying-together.jpg")'}}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between">
                        <div className="section-heading">
                            <h2 className="section__title text-white">Blog</h2>
                        </div>
                        <ul className="generic-list-item generic-list-item-white generic-list-item-arrow d-flex flex-wrap align-items-center">
                            <li><Link
                                href="/">Home</Link>
                            </li>
                            <li><Link href="/blog"> Blog</Link></li>
                            <li>All Blog</li>
                        </ul>
                    </div>

                </div>

            </section>

            <section className="blog-area section--padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-5">
                            <div className="row">
                                {blogs.data.slice(0, 10).map((item: Blog, index: number) => (
                                    <div key={item.id} className="col-lg-6">
                                        <div className="card card-item">
                                            <div className="card-image">
                                                <Link href={`/blog/${encodeURIComponent(item.slug)}`}
                                                      className="d-block">
                                                    <img className="card-img-top lazy"
                                                         src={item.image} alt="Card image cap"/>
                                                </Link>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge">Jan 24, 2020</div>
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                <h5 className="card-title"><a
                                                    href={`/blog/${encodeURIComponent(item.slug)}`}>{item.title}</a>
                                                </h5>
                                                <p style={{textAlign: 'justify'}}>{item.short_description && item.short_description.length > 140 ? `${item.short_description.slice(0, 140)}...` : item.short_description}</p>
                                                <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet d-flex align-items-center flex-wrap fs-14 pt-2">
                                                    <li className="d-flex align-items-center">By<Link
                                                        href={`/blog/${encodeURIComponent(item.slug)}`}>Admin</Link>
                                                    </li>
                                                    <li className="d-flex align-items-center"><Link
                                                        href={`/blog/${encodeURIComponent(item.slug)}`}>4
                                                        Comments</Link></li>
                                                    <li className="d-flex align-items-center"><Link
                                                        href={`/blog/${encodeURIComponent(item.slug)}`}>130
                                                        Likes</Link></li>
                                                </ul>
                                                <div className="d-flex justify-content-between align-items-center pt-3">
                                                    <Link href={`/blog/${encodeURIComponent(item.slug)}`}
                                                          className="btn theme-btn theme-btn-sm theme-btn-white">Read
                                                        More <i
                                                            className="la la-arrow-right icon ml-1"></i></Link>
                                                    <div className="share-wrap">
                                                        <ul className="social-icons social-icons-styled">
                                                            <li className="mr-0"><Link
                                                                href={`/blog/${encodeURIComponent(item.slug)}`}
                                                                className="facebook-bg"><i
                                                                className="la la-facebook"></i></Link>
                                                            </li>
                                                            <li className="mr-0"><Link
                                                                href={`/blog/${encodeURIComponent(item.slug)}`}
                                                                className="twitter-bg"><i
                                                                className="la la-twitter"></i></Link>
                                                            </li>
                                                            <li className="mr-0"><Link
                                                                href={`/blog/${encodeURIComponent(item.slug)}`}
                                                                className="instagram-bg"><i
                                                                className="la la-instagram"></i></Link>
                                                            </li>
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
                                            <Link className="page-link"
                                                  href=""
                                                  aria-label="Previous">
                                                <span aria-hidden="true"><i className="la la-arrow-left"></i></span>
                                                <span className="sr-only">Previous</span>
                                            </Link>
                                        </li>
                                        <li className="page-item active"><a className="page-link"
                                                                            href="#">1</a>
                                        </li>
                                        <li className="page-item"><a className="page-link"
                                                                     href="#">2</a>
                                        </li>
                                        <li className="page-item"><a className="page-link"
                                                                     href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link"
                                               href="#"
                                               aria-label="Next">
                                                <span aria-hidden="true"><i className="la la-arrow-right"></i></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <p className="fs-14 pt-2">Showing 1-10 of 56 results</p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="card card-item">
                                    <div className="card-body">
                                        <h3 className="card-title fs-18 pb-2">Search Field</h3>
                                        <div className="divider"><span></span></div>
                                        <form method="post">
                                            <div className="form-group mb-0">
                                                <input className="form-control form--control pl-3" type="text"
                                                       name="search" placeholder="Search blogs"/>
                                                <span className="la la-search search-icon"></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="card card-item">
                                    <div className="card-body">
                                        <h3 className="card-title fs-18 pb-2">Categories</h3>
                                        <div className="divider"><span></span></div>
                                        <div style={{maxHeight: '300px', overflowY: 'auto'}}>
                                            {blogCategories.data.map((item: BlogCategory, index: number) => (
                                                <>
                                                    <div key={index}
                                                         className="custom-control custom-checkbox mb-1 fs-15">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="catCheckbox"/>
                                                        <label
                                                            className="custom-control-label custom--control-label text-black"
                                                            htmlFor="catCheckbox">
                                                            {item.title}<span
                                                            className="ml-1 text-gray">(100)</span>
                                                        </label>
                                                    </div>
                                                    {// @ts-ignore
                                                        item.child_categories.map((item1: Blog, index1: number) => (
                                                            <div key={index1}
                                                                 className="custom-control custom-checkbox mb-1 fs-15 ml-3">
                                                                <input type="checkbox" className="custom-control-input"
                                                                       id="catCheckbox"/>
                                                                <label
                                                                    className="custom-control-label custom--control-label text-black"
                                                                    htmlFor="catCheckbox">
                                                                    {item1.title}<span
                                                                    className="ml-1 text-gray">(5)</span>
                                                                </label>
                                                            </div>
                                                        ))}
                                                </>

                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="card card-item">
                                    <div className="card-body">
                                        <h3 className="card-title fs-18 pb-2">Post Tags</h3>
                                        <div className="divider"><span></span></div>
                                        <ul className="generic-list-item generic-list-item-boxed d-flex flex-wrap fs-15">
                                            <li className="mr-2"><a
                                                href="#">Business</a>
                                            </li>
                                            <li className="mr-2"><a
                                                href="#">Event</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="card card-item">
                                    <div className="card-body">
                                        <h3 className="card-title fs-18 pb-2">Recent Posts</h3>
                                        <div className="divider"><span></span></div>
                                        <div className="media media-card border-bottom border-bottom-gray pb-4 mb-4">
                                            <a href="#"
                                               className="media-img">
                                                <img className="mr-3"
                                                     src="/assets/home/images/img8.jpg"
                                                     alt="Related course image"/>
                                            </a>
                                            <div className="media-body">
                                                <h5 className="fs-15"><a
                                                    href="#">The
                                                    Complete JavaScript Course 2021</a></h5>
                                                <span className="d-block lh-18 py-1 fs-14">Kamran Ahmed</span>
                                                <p className="text-black font-weight-semi-bold lh-18 fs-15">$12.99 <span
                                                    className="before-price fs-14">$129.99</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="card card-item">
                                    <div className="card-body">
                                        <h3 className="card-title fs-18 pb-2">Subscribe</h3>
                                        <div className="divider"><span></span></div>
                                        <form method="post">
                                            <div className="input-group">
                                                <input className="form-control form--control pl-3" type="email"
                                                       name="email" placeholder="Enter email address"/>
                                                <div className="input-group-append">
                                                    <button className="btn theme-btn"><i
                                                        className="la la-arrow-right"></i></button>
                                                </div>
                                                <div data-lastpass-icon-root="true"
                                                     style={{
                                                         position: 'relative',
                                                         height: '0px !important',
                                                         width: '0px !important',
                                                         float: 'left'
                                                     }}>
                                                    <template>
                                                        <svg width="24" height="24" viewBox="0 0 24 24"
                                                             fill="none" xmlns="http://www.w3.org/2000/svg"
                                                             data-lastpass-icon="true"
                                                             style={{
                                                                 position: 'absolute',
                                                                 cursor: 'pointer',
                                                                 height: '22px',
                                                                 maxHeight: '22px',
                                                                 width: '22px',
                                                                 maxWidth: '22px',
                                                                 top: '-36px',
                                                                 left: '279.812px',
                                                                 zIndex: 'auto',
                                                                 color: 'rgb(215, 64, 58)'
                                                             }}>
                                                            <rect x="0.680176" y="0.763062" width="22.6392"
                                                                  height="22.4737" rx="4"
                                                                  fill="currentColor"></rect>
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                  d="M19.7935 7.9516C19.7935 7.64414 20.0427 7.3949 20.3502 7.3949C20.6576 7.3949 20.9069 7.64414 20.9069 7.9516V16.0487C20.9069 16.3562 20.6576 16.6054 20.3502 16.6054C20.0427 16.6054 19.7935 16.3562 19.7935 16.0487V7.9516Z"
                                                                  fill="white"></path>
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                  d="M4.76288 13.6577C5.68525 13.6577 6.43298 12.9154 6.43298 11.9998C6.43298 11.0842 5.68525 10.3419 4.76288 10.3419C3.8405 10.3419 3.09277 11.0842 3.09277 11.9998C3.09277 12.9154 3.8405 13.6577 4.76288 13.6577Z"
                                                                  fill="white"></path>
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                  d="M10.3298 13.6577C11.2521 13.6577 11.9999 12.9154 11.9999 11.9998C11.9999 11.0842 11.2521 10.3419 10.3298 10.3419C9.4074 10.3419 8.65967 11.0842 8.65967 11.9998C8.65967 12.9154 9.4074 13.6577 10.3298 13.6577Z"
                                                                  fill="white"></path>
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                  d="M15.8964 13.6577C16.8188 13.6577 17.5665 12.9154 17.5665 11.9998C17.5665 11.0842 16.8188 10.3419 15.8964 10.3419C14.974 10.3419 14.2263 11.0842 14.2263 11.9998C14.2263 12.9154 14.974 13.6577 15.8964 13.6577Z"
                                                                  fill="white"></path>
                                                        </svg>
                                                    </template>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="card card-item">
                                    <div className="card-body">
                                        <h3 className="card-title fs-18 pb-2">Connect &amp; Follow</h3>
                                        <div className="divider"><span></span></div>
                                        <ul className="social-icons social-icons-styled social--icons-styled">
                                            <li><a
                                                href="#"><i
                                                className="la la-facebook"></i></a></li>
                                            <li><a
                                                href="#"><i
                                                className="la la-twitter"></i></a></li>
                                            <li><a
                                                href="#"><i
                                                className="la la-instagram"></i></a></li>
                                            <li><a
                                                href="#"><i
                                                className="la la-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}
