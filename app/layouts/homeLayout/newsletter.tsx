export default function Index() {
    return (
        <>
            <section className="subscriber-area pt-60px pb-60px bg-gray position-relative overflow-hidden">
                <span className="stroke-shape stroke-shape-1"></span>
                <span className="stroke-shape stroke-shape-2"></span>
                <span className="stroke-shape stroke-shape-3"></span>
                <span className="stroke-shape stroke-shape-4"></span>
                <span className="stroke-shape stroke-shape-5"></span>
                <span className="stroke-shape stroke-shape-6"></span>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="section-heading py-4">
                                <h5 className="ribbon ribbon-lg mb-2">Newsletter</h5>
                                <h2 className="section__title mb-1">Subscribe to newsletter</h2>
                                <p className="section__desc">Stay in the know on new free e-book</p>
                            </div>
                        </div>
                        <div className="col-lg-5 ml-auto">
                            <form method="post" className="subscriber-form">
                                <div className="input-group">
                                    <input type="email" name="email" className="form-control form--control pl-3"
                                           placeholder="Enter email address"/>
                                    <div className="input-group-append">
                                        <button className="btn theme-btn" type="button">Subscribe <i
                                            className="la la-arrow-right icon ml-1"></i></button>
                                    </div>
                                    <div data-lastpass-icon-root="true"
                                         style={{position: 'relative', height: '0px', width: ' 0px', float: 'left'}}>
                                        <template>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg" data-lastpass-icon="true"
                                                 style={{position: 'absolute', cursor: 'pointer', height: '22px', maxHeight: '22px', width: '22px', maxWidth: '22px', top: '-36px', left: '379.812px', zIndex: 'auto', color: 'rgb(215, 64, 58)'}}>
                                                <rect x="0.680176" y="0.763062" width="22.6392" height="22.4737" rx="4"
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
                                <p className="fs-14 mt-1">
                                    <i className="la la-lock mr-1"></i>Your information is safe with us! unsubscribe
                                    anytime.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}