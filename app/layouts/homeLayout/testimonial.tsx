import Image from "next/image";

export default function Index() {
    return (
        <>
            <section className="testimonial-area section-padding">
                <div className="container">
                    <div className="section-heading text-center">
                        <h5 className="ribbon ribbon-lg mb-2">Testimonials</h5>
                        <h2 className="section__title">People(&apos;)s Feedback</h2>
                        <span className="section-divider"></span>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="testimonial-carousel owl-action-styled owl-loaded owl-carousel">
                        <div className="owl-stage-outer owl-height" style={{height: '388.188px'}}>
                            <div className="owl-stage"
                                 style={{
                                     transform: 'translate3d(-1792px, 0px, 0px)',
                                     transition: 'all 0s ease 0s; width: 7168px',
                                     pointerEvents: 'none'
                                 }}>
                                <div className="owl-item mr-3 cloned" style={{width: '328.4px', marginRight: '30px'}}>
                                    <div className="card card-item">
                                        <div className="card-body">
                                            <div className="media media-card align-items-center pb-3">
                                                <div className="media-img avatar-md">
                                                    <Image width={400} height={400}
                                                           src="/assets/home/images/small-avatar-3.jpg"
                                                           alt="Testimonial avatar" className="rounded-full"/>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Kevin Martin</h5>
                                                    <div className="d-flex align-items-center pt-1">
                                                        <span className="lh-18 pr-2">Student</span>
                                                        <div className="review-stars">
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="card-text">
                                                My children and I LOVE Aduca! The courses are fantastic and the
                                                instructors are so fun and knowledgeable.
                                                I only wish we found it sooner.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item mr-3 cloned" style={{width: '328.4px', marginRight: '30px'}}>
                                    <div className="card card-item">
                                        <div className="card-body">
                                            <div className="media media-card align-items-center pb-3">
                                                <div className="media-img avatar-md">
                                                    <Image width={400} height={400}
                                                           src="/assets/home/images/small-avatar-3.jpg"
                                                           alt="Testimonial avatar" className="rounded-full"/>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Oliver Beddows</h5>
                                                    <div className="d-flex align-items-center pt-1">
                                                        <span className="lh-18 pr-2">Student</span>
                                                        <div className="review-stars">
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="card-text">
                                                No matter what you want to learn, you’ll find an
                                                amazing selection of courses here.
                                                The instructors are so knowledgable while
                                                being fun and interesting. Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Ad blanditiis consectetur
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item mr-3 cloned" style={{width: '328.4px', marginRight: '30px'}}>
                                    <div className="card card-item">
                                        <div className="card-body">
                                            <div className="media media-card align-items-center pb-3">
                                                <div className="media-img avatar-md">
                                                    <Image width={400} height={400}
                                                           src="/assets/home/images/small-avatar-3.jpg"
                                                           alt="Testimonial avatar" className="rounded-full"/>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Jackob Hallac</h5>
                                                    <div className="d-flex align-items-center pt-1">
                                                        <span className="lh-18 pr-2">Student</span>
                                                        <div className="review-stars">
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="card-text">
                                                I really recommend this site to all my friends and anyone who’s willing
                                                to
                                                learn real skills. This platform gives
                                                you the opportunity to learn from experts at a convenient time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item mr-3 cloned" style={{width: '328.4px', marginRight: '30px'}}>
                                    <div className="card card-item">
                                        <div className="card-body">
                                            <div className="media media-card align-items-center pb-3">
                                                <div className="media-img avatar-md">
                                                    <Image width={400} height={400}
                                                           src="/assets/home/images/small-avatar-3.jpg"
                                                           alt="Testimonial avatar" className="rounded-full"/>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Lubic Duble</h5>
                                                    <div className="d-flex align-items-center pt-1">
                                                        <span className="lh-18 pr-2">Student</span>
                                                        <div className="review-stars">
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="card-text">
                                                Thank you Aduca! You have renewed my passion for
                                                learning and my dream of becoming a web developer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item mr-3 cloned" style={{width: '328.4px', marginRight: '30px'}}>
                                    <div className="card card-item">
                                        <div className="card-body">
                                            <div className="media media-card align-items-center pb-3">
                                                <div className="media-img avatar-md">
                                                    <Image width={400} height={400}
                                                           src="/assets/home/images/small-avatar-3.jpg"
                                                           alt="Testimonial avatar" className="rounded-full"/>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Daniel Ward</h5>
                                                    <div className="d-flex align-items-center pt-1">
                                                        <span className="lh-18 pr-2">Student</span>
                                                        <div className="review-stars">
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="card-text">
                                                I came across this site when I had no funds to pay for a college
                                                education.
                                                This site has literally been a lifesaver as
                                                I can now earn from freelance working using the skills
                                                I learned from here.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item mr-3 active" style={{width: '328.4px', marginRight: '30px'}}>
                                    <div className="card card-item">
                                        <div className="card-body">
                                            <div className="media media-card align-items-center pb-3">
                                                <div className="media-img avatar-md">
                                                    <Image width={400} height={400}
                                                           src="/assets/home/images/small-avatar-3.jpg"
                                                           alt="Testimonial avatar" className="rounded-full"/>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Kevin Martin</h5>
                                                    <div className="d-flex align-items-center pt-1">
                                                        <span className="lh-18 pr-2">Student</span>
                                                        <div className="review-stars">
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="card-text">
                                                My children and I LOVE Aduca! The courses are fantastic and the
                                                instructors are so fun and knowledgeable.
                                                I only wish we found it sooner.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item mr-3 active" style={{width: '328.4px', marginRight: '30px'}}>
                                    <div className="card card-item">
                                        <div className="card-body">
                                            <div className="media media-card align-items-center pb-3">
                                                <div className="media-img avatar-md">
                                                    <Image width={400} height={400}
                                                           src="/assets/home/images/small-avatar-3.jpg"
                                                           alt="Testimonial avatar" className="rounded-full"/>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Oliver Beddows</h5>
                                                    <div className="d-flex align-items-center pt-1">
                                                        <span className="lh-18 pr-2">Student</span>
                                                        <div className="review-stars">
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="card-text">
                                                No matter what you want to learn, you(&apos;)ll find an
                                                amazing selection of courses here.
                                                The instructors are so knowledgable while
                                                being fun and interesting. Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Ad blanditiis consectetur
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item mr-3 active" style={{width: '328.4px', marginRight: '30px'}}>
                                    <div className="card card-item">
                                        <div className="card-body">
                                            <div className="media media-card align-items-center pb-3">
                                                <div className="media-img avatar-md">
                                                    <Image width={400} height={400}
                                                           src="/assets/home/images/small-avatar-3.jpg"
                                                           alt="Testimonial avatar" className="rounded-full"/>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Jackob Hallac</h5>
                                                    <div className="d-flex align-items-center pt-1">
                                                        <span className="lh-18 pr-2">Student</span>
                                                        <div className="review-stars">
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="card-text">
                                                I really recommend this site to all my friends and anyone who’s willing
                                                to
                                                learn real skills. This platform gives
                                                you the opportunity to learn from experts at a convenient time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item mr-3 active" style={{width: '328.4px', marginRight: '30px'}}>
                                    <div className="card card-item">
                                        <div className="card-body">
                                            <div className="media media-card align-items-center pb-3">
                                                <div className="media-img avatar-md">
                                                    <Image width={400} height={400}
                                                           src="/assets/home/images/small-avatar-3.jpg"
                                                           alt="Testimonial avatar" className="rounded-full"/>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Jackob Hallac</h5>
                                                    <div className="d-flex align-items-center pt-1">
                                                        <span className="lh-18 pr-2">Student</span>
                                                        <div className="review-stars">
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="card-text">
                                                I really recommend this site to all my friends and anyone who’s willing
                                                to
                                                learn real skills. This platform gives
                                                you the opportunity to learn from experts at a convenient time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item mr-3 active" style={{width: '328.4px', marginRight: '30px'}}>
                                    <div className="card card-item">
                                        <div className="card-body">
                                            <div className="media media-card align-items-center pb-3">
                                                <div className="media-img avatar-md">
                                                    <Image width={400} height={400}
                                                           src="/assets/home/images/small-avatar-3.jpg"
                                                           alt="Testimonial avatar" className="rounded-full"/>
                                                </div>
                                                <div className="media-body">
                                                    <h5>Jackob Hallac</h5>
                                                    <div className="d-flex align-items-center pt-1">
                                                        <span className="lh-18 pr-2">Student</span>
                                                        <div className="review-stars">
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                            <span className="la la-star"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="card-text">
                                                I really recommend this site to all my friends and anyone who’s willing
                                                to
                                                learn real skills. This platform gives
                                                you the opportunity to learn from experts at a convenient time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-nav disabled">
                            <div className="owl-prev">prev</div>
                            <div className="owl-next">next</div>
                        </div>
                        <div className="owl-dots">
                            <div className="owl-dot active"><span></span></div>
                            <div className="owl-dot"><span></span></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="section-block"></div>
        </>
    );
}