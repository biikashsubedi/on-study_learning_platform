export default function Index() {
    return (
        <>
            <section className="course-area pb-120px">
                <div className="container">
                    <div className="section-heading text-center">
                        <h5 className="ribbon ribbon-lg mb-2">Choose your desired subjects</h5>
                        <h2 className="section__title">The best selection of subjects</h2>
                        <span className="section-divider"></span>
                    </div>
                    <ul className="nav nav-tabs generic-tab justify-content-center pb-4" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="business-tab" data-toggle="tab"
                               href="#business" role="tab"
                               aria-controls="business" aria-selected="true">My Health</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="design-tab" data-toggle="tab"
                               href="#design" role="tab"
                               aria-controls="design" aria-selected="false">Nepal Police</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="development-tab" data-toggle="tab"
                               href="#development" role="tab"
                               aria-controls="development" aria-selected="false">Computer Operator</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="drawing-tab" data-toggle="tab"
                               href="#drawing" role="tab"
                               aria-controls="drawing" aria-selected="false">Banking Sector</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="marketing-tab" data-toggle="tab"
                               href="#marketing" role="tab"
                               aria-controls="marketing" aria-selected="false">Nepal Electricity</a>
                        </li>
                    </ul>
                </div>
                <div className="card-content-wrapper bg-gray pt-50px pb-120px">
                    <div className="container">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="business" role="tabpanel"
                                 aria-labelledby="business-tab">
                                <div className="row">
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview tooltipstered"
                                             data-tooltip-content="#tooltip_content_1">
                                            <div className="card-image">
                                                <a href="#"
                                                   className="d-block">
                                                    <img className="card-img-top lazy"
                                                         src="/assets/home/images/img8.jpg"
                                                         data-src="/assets/home/images/img8.jpg" alt="Card image cap"/>
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge">Bestseller</div>
                                                    <div className="course-badge blue">-39%</div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">All Levels</h6>
                                                <h5 className="card-title"><a
                                                    href="#">The
                                                    Business Intelligence Analyst Course 2021</a></h5>
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
                                                        className="before-price font-weight-medium">129.99</span></p>
                                                    <div
                                                        className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                        title="Add to Wishlist"><i className="la la-heart-o"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="design" role="tabpanel" aria-labelledby="design-tab">
                                <div className="row">
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview tooltipstered"
                                             data-tooltip-content="#tooltip_content_2">
                                            <div className="card-image">
                                                <a href="#"
                                                   className="d-block">
                                                    <img className="card-img-top lazy"
                                                         src="/assets/home/images/img8.jpg"
                                                         alt="Card image cap"/>
                                                </a>
                                            </div>
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">Beginner</h6>
                                                <h5 className="card-title"><a
                                                    href="#">Ultimate
                                                    Adobe Photoshop Training: From Beginner to Pro</a></h5>
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
                                </div>
                            </div>
                            <div className="tab-pane fade" id="development" role="tabpanel"
                                 aria-labelledby="development-tab">
                                <div className="row">
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview tooltipstered"
                                             data-tooltip-content="#tooltip_content_3">
                                            <div className="card-image">
                                                <a href="#"
                                                   className="d-block">
                                                    <img className="card-img-top lazy"
                                                         src="/assets/home/images/img8.jpg" alt="Card image cap"
                                                    />
                                                </a>
                                                <div className="course-badge-labels">
                                                    <div className="course-badge">Bestseller</div>
                                                    <div className="course-badge blue">-39%</div>
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
                                                    <p className="card-price text-black font-weight-bold">12.99 <span
                                                        className="before-price font-weight-medium">129.99</span></p>
                                                    <div
                                                        className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                        title="Add to Wishlist"><i className="la la-heart-o"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="drawing" role="tabpanel" aria-labelledby="drawing-tab">
                                <div className="row">
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview tooltipstered"
                                             data-tooltip-content="#tooltip_content_4">
                                            <div className="card-image">
                                                <a href="#"
                                                   className="d-block">
                                                    <img className="card-img-top lazy"
                                                         src="/assets/home/images/img8.jpg"
                                                         alt="Card image cap"/>
                                                </a>
                                            </div>
                                            <div className="card-body">
                                                <h6 className="ribbon ribbon-blue-bg fs-14 mb-3">Beginner</h6>
                                                <h5 className="card-title"><a
                                                    href="#">The
                                                    Ultimate Drawing Course - Beginner to Advanced</a></h5>
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
                                </div>
                            </div>
                            <div className="tab-pane fade" id="marketing" role="tabpanel"
                                 aria-labelledby="marketing-tab">
                                <div className="row">
                                    <div className="col-lg-4 responsive-column-half">
                                        <div className="card card-item card-preview tooltipstered"
                                             data-tooltip-content="#tooltip_content_5">
                                            <div className="card-image">
                                                <a href="#"
                                                   className="d-block">
                                                    <img className="card-img-top lazy"
                                                         src="/assets/home/images/img8.jpg"
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
                                                    href="#">The
                                                    Complete Digital Marketing Course - 12 Courses in 1</a></h5>
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
                                                        className="before-price font-weight-medium">129.99</span></p>
                                                    <div
                                                        className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                        title="Add to Wishlist"><i className="la la-heart-o"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="more-btn-box mt-4 text-center">
                            <a href="#"
                               className="btn theme-btn">Browse all Courses <i
                                className="la la-arrow-right icon ml-1"></i></a>
                        </div>
                    </div>
                </div>
            </section>


            {/*this is tooltip*/}
            <div className="tooltip_templates">
                <div id="tooltip_content_1">
                    <div className="card card-item">
                        <div className="card-body">
                            <p className="card-text pb-2">By <a
                                href="#">Jose
                                Portilla</a></p>
                            <h5 className="card-title pb-1"><a
                                href="#">The Business
                                Intelligence Analyst Course 2021</a></h5>
                            <div className="d-flex align-items-center pb-1">
                                <h6 className="ribbon fs-14 mr-2">Bestseller</h6>
                                <p className="text-success fs-14 font-weight-medium">Updated<span
                                    className="font-weight-bold pl-1">November 2020</span>
                                </p>
                            </div>
                            <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet d-flex align-items-center fs-14">
                                <li>23 total hours</li>
                                <li>All Levels</li>
                            </ul>
                            <p className="card-text pt-1 fs-14 lh-22">The skills you need to become a BI Analyst -
                                Statistics, Database
                                theory, SQL, Tableau – Everything is included</p>
                            <ul className="generic-list-item fs-14 py-3">
                                <li><i className="la la-check mr-1 text-black"></i> Become an expert in Statistics, SQL,
                                    Tableau, and
                                    problem solving
                                </li>
                                <li><i className="la la-check mr-1 text-black"></i> Boost your resume with in-demand
                                    skills
                                </li>
                                <li><i className="la la-check mr-1 text-black"></i> Gather, organize, analyze and
                                    visualize data
                                </li>
                            </ul>
                            <div className="d-flex justify-content-between align-items-center">
                                <a href="#"
                                   className="btn theme-btn flex-grow-1 mr-3"><i
                                    className="la la-shopping-cart mr-1 fs-18"></i> Add to Cart</a>
                                <div className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                     title="Add to Wishlist"><i
                                    className="la la-heart-o"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tooltip_templates">
                <div id="tooltip_content_2">
                    <div className="card card-item">
                        <div className="card-body">
                            <p className="card-text pb-2">By <a
                                href="#">Jose
                                Portilla</a></p>
                            <h5 className="card-title pb-1"><a
                                href="#">Ultimate
                                Adobe Photoshop Training: From Beginner to Pro</a></h5>
                            <div className="d-flex align-items-center pb-1">
                                <h6 className="ribbon fs-14 mr-2">Bestseller</h6>
                                <p className="text-success fs-14 font-weight-medium">Updated<span
                                    className="font-weight-bold pl-1">November 2020</span>
                                </p>
                            </div>
                            <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet d-flex align-items-center fs-14">
                                <li>23 total hours</li>
                                <li>All Levels</li>
                            </ul>
                            <p className="card-text pt-1 fs-14 lh-22">The skills you need to become a BI Analyst -
                                Statistics, Database
                                theory, SQL, Tableau – Everything is included</p>
                            <ul className="generic-list-item fs-14 py-3">
                                <li><i className="la la-check mr-1 text-black"></i> Become an expert in Statistics, SQL,
                                    Tableau, and
                                    problem solving
                                </li>
                                <li><i className="la la-check mr-1 text-black"></i> Boost your resume with in-demand
                                    skills
                                </li>
                                <li><i className="la la-check mr-1 text-black"></i> Gather, organize, analyze and
                                    visualize data
                                </li>
                            </ul>
                            <div className="d-flex justify-content-between align-items-center">
                                <a href="#"
                                   className="btn theme-btn flex-grow-1 mr-3"><i
                                    className="la la-shopping-cart mr-1 fs-18"></i> Add to Cart</a>
                                <div className="icon-element icon-element-sm shadow-sm cursor-pointer"
                                     title="Add to Wishlist"><i
                                    className="la la-heart-o"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
