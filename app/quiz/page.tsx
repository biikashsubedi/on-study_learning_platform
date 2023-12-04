export default function Index() {
    return (


        <div className="wrapper overflow-hidden">
            <link rel="stylesheet" href="/assets/quiz/css/style.css"/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                    </div>
                    <div className="col-sm-6 d-none d-sm-block">
                        <div className="count_box d-flex float-end pt-5 pe-5">
                            <div className="count_clock countdown_timer d-flex align-items-center pe-5 me-3"
                                 data-countdown="2021/10/24">
                            </div>
                            <div id="countdown"></div>

                            <div className="count_progress clip-1">
                     <span className="progress-left">
                        <span className="progress_bar"></span>
                     </span>
                                <span className="progress-right">
                        <span className="progress_bar"></span>
                     </span>
                                <div className="progress-value">
                                    <div id="value">100%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="progress_bar">
                        <div className="step active current"></div>
                        <div className="step"></div>
                        <div className="step"></div>
                        <div className="step"></div>
                        <div className="step"></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <form className="multisteps_form bg-white position-relative overflow-hidden" id="wizard" method="POST"
                      action="">


                    <div className="multisteps_form_panel active">

                        <div className="form_content">
                            <div className="question_title text-center text-uppercase">
                                <h1>The largest dune files are found in</h1>
                            </div>
                            <div className="question_number text-center text-uppercase text-white">
                                <span className="rounded-pill">Question 4 to 5</span>
                            </div>
                            <div className="row pt-5 mt-4 form_items radio-list text-center">
                                <div className="col-6">
                                    <ul className="list-unstayled p-0">
                                        <li>
                                            <label htmlFor="opt_13"
                                                   className="step_4 animate__animated animate__fadeInRight animate_50ms">
                                                West Bengal
                                                <input id="opt_13" type="radio" className="required"
                                                       name="stp_4_select_option"
                                                       value="West Bengal"/>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_14"
                                                   className="step_4 animate__animated animate__fadeInRight animate_100ms">
                                                Kerala
                                                <input id="opt_14" type="radio" name="stp_4_select_option"
                                                       value="Kerala"/>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_15"
                                                   className="step_4 animate__animated animate__fadeInRight animate_150ms">
                                                Bihar
                                                <input id="opt_15" type="radio" name="stp_4_select_option"
                                                       value="Bihar"/>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_16"
                                                   className="step_4 animate__animated animate__fadeInRight animate_200ms">
                                                Orissa
                                                <input id="opt_16" type="radio" name="stp_4_select_option"
                                                       value="Orissa"/>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="form_btn">
                            <button type="button"
                                    className="js-btn-prev prev_btn position-absolute text-uppercase border-0"
                                    id="prevBtn"><span><i className="fas fa-arrow-left"></i></span> Back
                            </button>
                            <button type="button"
                                    className="js-btn-next next_btn rounded-pill position-absolute text-uppercase text-white"
                                    id="nextBtn">Next
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>


    )
}