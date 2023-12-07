interface Blog {
    id: number,
    title: string,
    image: string
}


// @ts-ignore
export default function Index({data}) {

    const {blogs} = data;

    return (
        <>
            <section className="course-area pb-90px">
                <div className="course-wrapper">
                    <div className="container">
                        <div className="section-heading text-center">
                            <h5 className="ribbon ribbon-lg mb-2">Some Popular Blogs</h5>
                            <h2 className="section__title">Visitor's also like to visit</h2>
                            <span className="section-divider"></span>
                        </div>
                        <div
                            className="my-carousel owl-action-styled owl--action-styled mt-30px owl-loaded owl-carousel">
                            <div className="owl-stage-outer">
                                <div className="owl-stage"
                                     style={{
                                         transform: 'translate3d(-1200px, 0px, 0px)',
                                         transition: 'all 0s ease 0s',
                                         width: '4800px'
                                     }}>
                                    <div className="owl-item cloned" style={{width: '370px', marginRight: '30px'}}>
                                        <div className="card card-item card-preview">
                                            <div className="card-image">
                                                <a href="#"
                                                   className="d-block">
                                                    <img className="card-img-top lazy"
                                                         src="/assets/home/images/img8.jpg"
                                                         data-src="/assets/home/images/img8.jpg" alt="Card image cap"/>
                                                </a>
                                            </div>
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a
                                                    href="#">The
                                                    Complete WordPress Website Business Course</a></h5>
                                                <p className="card-text"><a
                                                    href="#">Jose
                                                    Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star"></span>
                                                        <span className="la la-star"></span>
                                                        <span className="la la-star"></span>
                                                        <span className="la la-star"></span>
                                                        <span className="la la-star-o"></span>
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div
                                                        className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                        title="Add to Wishlist"><i className="la la-heart-o"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{width: '370px', marginRight: '30px'}}>
                                        <div className="card card-item card-preview">
                                            <div className="card-image">
                                                <a href="#"
                                                   className="d-block">
                                                    <img className="card-img-top lazy"
                                                         src="/assets/home/images/img8.jpg"
                                                         data-src="/assets/home/images/img8.jpg" alt="Card image cap"/>
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge">Featured</div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a
                                                    href="#">The
                                                    Complete WordPress Website Business Course</a></h5>
                                                <p className="card-text"><a
                                                    href="#">Jose
                                                    Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star"></span>
                                                        <span className="la la-star"></span>
                                                        <span className="la la-star"></span>
                                                        <span className="la la-star"></span>
                                                        <span className="la la-star-o"></span>
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div
                                                        className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                        title="Add to Wishlist"><i className="la la-heart-o"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{width: '370px', marginRight: '30px'}}>
                                        <div className="card card-item card-preview">
                                            <div className="card-image">
                                                <a href="#"
                                                   className="d-block">
                                                    <img className="card-img-top lazy"
                                                         src="/assets/home/images/img8.jpg"
                                                         data-src="/assets/home/images/img8.jpg" alt="Card image cap"/>
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge">Featured</div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a
                                                    href="#">The
                                                    Complete WordPress Website Business Course</a></h5>
                                                <p className="card-text"><a
                                                    href="#">Jose
                                                    Portilla</a></p>
                                                <div className="rating-wrap d-flex align-items-center py-2">
                                                    <div className="review-stars">
                                                        <span className="rating-number">4.4</span>
                                                        <span className="la la-star"></span>
                                                        <span className="la la-star"></span>
                                                        <span className="la la-star"></span>
                                                        <span className="la la-star"></span>
                                                        <span className="la la-star-o"></span>
                                                    </div>
                                                    <span className="rating-total pl-1">(20,230)</span>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="card-price text-black font-weight-bold">129.99</p>
                                                    <div
                                                        className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                        title="Add to Wishlist"><i className="la la-heart-o"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {blogs.data.map((item: Blog, index: number) => (
                                        <div className="owl-item active" style={{width: '370px', marginRight: '30px'}}>
                                            <div className="card card-item card-preview tooltipstered">
                                                <div className="card-image">
                                                    <a href="#"
                                                       className="d-block">
                                                        <img className="card-img-top lazy"
                                                             src={item.image}
                                                             data-src="/assets/home/images/img8.jpg"
                                                             alt="Card image cap"/>
                                                    </a>
                                                    <div className="course-badge-labels">
                                                        <div className="course-badge">Bestseller</div>
                                                        <div className="course-badge blue">-39%</div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                    <h5 className="card-title"><a
                                                        href="#">{item.title}</a></h5>
                                                    <p className="card-text"><a
                                                        href="#">Jose
                                                        Portilla</a></p>
                                                    <div className="rating-wrap d-flex align-items-center py-2">
                                                        <div className="review-stars">
                                                            <span className="rating-number">4.4</span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star-o"></span>
                                                        </div>
                                                        <span className="rating-total pl-1">(20,230)</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="card-price text-black font-weight-bold">12.99 <span
                                                            className="before-price font-weight-medium">129.99</span>
                                                        </p>
                                                        <div
                                                            className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                            title="Add to Wishlist"><i className="la la-heart-o"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="owl-nav">
                                <div className="owl-prev"><i className="la la-arrow-left"></i></div>
                                <div className="owl-next"><i className="la la-arrow-right"></i></div>
                            </div>
                            <div className="owl-dots disabled"></div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}