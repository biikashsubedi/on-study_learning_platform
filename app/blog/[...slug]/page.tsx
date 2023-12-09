'use client' //this is like a debug
import Link from "next/link";
import {getBlogBySlug} from '../../utils/globalApiFetch';


interface BlogPros {
    params: { slug: string }
}

export default async function Home({params}: BlogPros) {
    const [blog] = await Promise.all([
        getBlogBySlug(params.slug),
    ]);
    return (
        <>
            <section className="breadcrumb-area pt-80px pb-80px pattern-bg"
                     style={{backgroundImage: 'url("/assets/home/images/bg_img1.png")'}}>
                <div className="container">
                    <div className="breadcrumb-content">
                        <div className="section-heading pb-3">
                            <h2 className="section__title">{blog.data.title}</h2>
                        </div>
                        <ul className="generic-list-item generic-list-item-arrow d-flex flex-wrap align-items-center">
                            <li><Link href="/">Home</Link>
                            </li>
                            <li><Link href={'/blog'}>Blog</Link>
                            </li>
                            <li>{blog.data.title}</li>
                        </ul>
                        <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet d-flex align-items-center flex-wrap fs-14 pt-2">
                            <li className="d-flex align-items-center">By<Link
                                href="#"> Admin</Link>
                            </li>
                            <li className="d-flex align-items-center">Jan 24, 2020</li>
                            <li className="d-flex align-items-center"><Link
                                href="#"
                                className="page-scroll">4 Comments</Link></li>
                            <li className="d-flex align-items-center">130 Shares</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="blog-area pt-100px pb-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-5">
                            <div className="card card-item">
                                <div className="card-body">
                                    <div className="row pb-3">
                                        <div className="col-lg-9">
                                            <ul className="generic-list-item generic-list-item-bullet pt-3">
                                                {blog.data.short_description}
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="mt-3">
                                                <img src={blog.data.image}
                                                     alt="blog-img" className="img-fluid rounded-rounded lazy"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'mb-4'} dangerouslySetInnerHTML={{ __html: blog.data.description }} />

                                    <div className="section-block"></div>
                                    <h3 className="fs-18 font-weight-semi-bold pt-3">Tags</h3>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center pt-3">
                                        <ul className="generic-list-item generic-list-item-boxed d-flex flex-wrap fs-15">
                                            <li className="mr-2"><a
                                                href="#">Web
                                                Design</a></li>
                                            <li className="mr-2"><a
                                                href="#">UI
                                                Design</a></li>
                                        </ul>
                                        <div className="share-wrap">
                                            <ul className="social-icons social-icons-styled">
                                                <li className="mr-0"><a
                                                    href="#"
                                                    className="facebook-bg"><i className="la la-facebook"></i></a></li>
                                                <li className="mr-0"><a
                                                    href="#"
                                                    className="twitter-bg"><i className="la la-twitter"></i></a></li>
                                                <li className="mr-0"><a
                                                    href="#"
                                                    className="instagram-bg"><i className="la la-instagram"></i></a>
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
                            <div className="instructor-wrap py-5">
                                <h3 className="fs-22 font-weight-semi-bold pb-4">About the author</h3>
                                <div className="media media-card">
                                    <div className="media-img rounded-full avatar-lg mr-4">
                                        <img src="/assets/home/images/aakash_subedi.png"
                                             alt="Avatar image" className="rounded-full lazy"/>
                                    </div>
                                    <div className="media-body">
                                        <h5>Aakash Subedi</h5>
                                        <span className="d-block lh-18 pt-2 pb-2">Admin</span>
                                        <p className="pb-3">Best Author od on-study</p>
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
                                                className="la la-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="section-block"></div>
                            <div className="comments-wrap pt-5" id="comments">
                                <div className="d-flex align-items-center justify-content-between pb-4">
                                    <h3 className="fs-22 font-weight-semi-bold">Comments</h3>
                                    <span className="ribbon ribbon-lg">1</span>
                                </div>
                                <div className="comment-list">
                                    <div className="media media-card border-bottom border-bottom-gray pb-4 mb-4">
                                        <div className="media-img mr-4 rounded-full">
                                            <img className="rounded-full lazy"
                                                 src="/assets/home/images/bikash_subedi.png"
                                                 alt="User image"/>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="pb-2">Bikash Subedi</h5>
                                            <span className="d-block lh-18 pb-2">a month ago</span>
                                            <p className="pb-3">Dami Article</p>
                                            <div
                                                className="helpful-action d-flex align-items-center justify-content-between">
                                                <a className="btn theme-btn theme-btn-sm theme-btn-transparent lh-30"
                                                   href=""
                                                   data-toggle="modal" data-target="#replyModal"><i
                                                    className="la la-reply mr-1"></i> Reply</a>
                                                <div className="pl-2">
                                                    <span className="fs-13">Was this review helpful?</span>
                                                    <button className="btn">Yes</button>
                                                    <button className="btn">No</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="load-more-btn-box text-center pt-3 pb-5">
                                    <button className="btn theme-btn theme-btn-sm theme-btn-transparent lh-30"><i
                                        className="la la-refresh mr-1"></i> Load More Comment
                                    </button>
                                </div>
                            </div>
                            <div className="section-block"></div>
                            <div className="add-comment-wrap pt-5">
                                <h3 className="fs-22 font-weight-semi-bold pb-4">Add a Comment</h3>
                                <form method="post" className="row">
                                    <div className="input-box col-lg-6">
                                        <label className="label-text">Name</label>
                                        <div className="form-group">
                                            <input className="form-control form--control" type="text" name="name"
                                                   placeholder="Your Name"/>
                                            <span className="la la-user input-icon"></span>
                                            <div data-lastpass-icon-root="true" style={{
                                                position: 'relative',
                                                height: '0px',
                                                width: '0px',
                                                float: 'left'
                                            }}>
                                                <template>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg" data-lastpass-icon="true"
                                                         style={{
                                                             position: 'absolute',
                                                             cursor: 'pointer',
                                                             height: '22px',
                                                             maxHeight: '22px',
                                                             width: '22px',
                                                             maxWidth: '22px',
                                                             top: '-36px',
                                                             left: '331px',
                                                             zIndex: 'auto',
                                                             color: 'rgb(186, 192, 202)'
                                                         }}>
                                                        <rect x="0.680176" y="0.763062" width="22.6392" height="22.4737"
                                                              rx="4" fill="currentColor"></rect>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M19.7935 7.9516C19.7935 7.64414 20.0427 7.3949 20.3502 7.3949C20.6576 7.3949 20.9069 7.64414 20.9069 7.9516V16.0487C20.9069 16.3562 20.6576 16.6054 20.3502 16.6054C20.0427 16.6054 19.7935 16.3562 19.7935 16.0487V7.9516Z"
                                                              fill="white"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M4.76288 13.6577C5.68525 13.6577 6.43298 12.9154 6.43298 11.9998C6.43298 11.0842 5.68525 10.3419 4.76288 10.3419C3.8405 10.3419 3.09277 11.0842 3.09277 11.9998C3.09277 12.9154 3.8405 13.6577 4.76288 13.6577Z"
                                                              fill="white"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M10.3298 13.6577C11.2521 13.6577 11.9999 12.9154 11.9999 11.9998C11.9999 11.0842 11.2521 10.3419 10.3298 10.3419C9.4074 10.3419 8.65967 11.0842 8.65967 11.9998C8.65967 12.9154 9.4074 13.6577 10.3298 13.6577Z"
                                                              fill="white"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M15.8964 13.6577C16.8188 13.6577 17.5665 12.9154 17.5665 11.9998C17.5665 11.0842 16.8188 10.3419 15.8964 10.3419C14.974 10.3419 14.2263 11.0842 14.2263 11.9998C14.2263 12.9154 14.974 13.6577 15.8964 13.6577Z"
                                                              fill="white"></path>
                                                    </svg>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-box col-lg-6">
                                        <label className="label-text">Email</label>
                                        <div className="form-group">
                                            <input className="form-control form--control" type="email" name="email"
                                                   placeholder="Email Address"/>
                                            <span className="la la-envelope input-icon"></span>
                                        </div>
                                    </div>
                                    <div className="input-box col-lg-12">
                                        <label className="label-text">Message</label>
                                        <div className="form-group">
                                            <textarea className="form-control form--control pl-3" name="message"
                                                      placeholder="Write Message" rows={5}></textarea>
                                        </div>
                                    </div>
                                    <div className="btn-box col-lg-12">
                                        <div className="custom-control custom-checkbox mb-3 fs-15">
                                            <input type="checkbox" className="custom-control-input" id="saveCheckbox"
                                                   required/>
                                            <label className="custom-control-label custom--control-label"
                                                   htmlFor="saveCheckbox">
                                                Save my name, and email in this browser for the next time I comment.
                                            </label>
                                        </div>
                                        <button className="btn theme-btn" type="submit">Submit Comment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
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
                                        <div className="media media-card border-bottom border-bottom-gray pb-4 mb-4">
                                            <a href="#"
                                               className="media-img">
                                                <img className="mr-3"
                                                     src="/assets/home/images/img8.jpg"
                                                     alt="Related course image"/>
                                            </a>
                                            <div className="media-body">
                                                <h5 className="fs-15"><a
                                                    href="#">Learning
                                                    jQuery Mobile for Beginners</a></h5>
                                                <span className="d-block lh-18 py-1 fs-14">Kamran Ahmed</span>
                                                <p className="text-black font-weight-semi-bold lh-18 fs-15">$129.99</p>
                                            </div>
                                        </div>
                                        <div className="media media-card border-bottom border-bottom-gray pb-4 mb-4">
                                            <a href="#"
                                               className="media-img">
                                                <img className="mr-3"
                                                     src="/assets/home/images/img8.jpg"
                                                     alt="Related course image"/>
                                            </a>
                                            <div className="media-body">
                                                <h5 className="fs-15"><a
                                                    href="#">Introduction
                                                    LearnPress – LMS plugin</a></h5>
                                                <span className="d-block lh-18 py-1 fs-14">Kamran Ahmed</span>
                                                <p className="text-black font-weight-semi-bold lh-18 fs-15">Free</p>
                                            </div>
                                        </div>
                                        <div className="view-all-course-btn-box">
                                            <a href="http://techydevs.com/demos/themes/html/aduca-demo/aduca/blog-no-sidebar.html"
                                               className="btn theme-btn w-100">View All Posts <i
                                                className="la la-arrow-right icon ml-1"></i></a>
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
                                                <div data-lastpass-icon-root="true" style={{
                                                    position: 'relative',
                                                    height: '0px',
                                                    width: '0px',
                                                    float: 'left'
                                                }}>
                                                    <template>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg"
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
                                                                 color: 'rgb(186, 192, 202)'
                                                             }}>
                                                            <rect x="0.680176" y="0.763062" width="22.6392"
                                                                  height="22.4737" rx="4" fill="currentColor"></rect>
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
