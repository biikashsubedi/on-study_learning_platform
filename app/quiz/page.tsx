export default function Index() {
    return (
<<<<<<< HEAD

        <div className="wrapper overflow-hidden">
            <!-- Top content -->
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="logo_area pt-5 ps-5">
                            <a href="index.html">
                                <img src="./assets/images/logo/logo.png" alt="image-not-found">
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6 d-none d-sm-block">
                        <div className="count_box d-flex float-end pt-5 pe-5">
                            <div className="count_clock countdown_timer d-flex align-items-center pe-5 me-3"
                                 data-countdown="2021/10/24">
                            </div>
                            <div id="countdown"></div>
                            <!-- Step Progress bar -->
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
                    <!-- Step-progress-bar -->
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
                      action="../mail.php">
                    <!------------------------- Step-1 ----------------------------->
                    <div className="multisteps_form_panel active">
                        <!-- Form-content -->
                        <div className="form_content">
                            <div className="question_title text-center text-uppercase">
                                <h1>What kind of services you are quiz?</h1>
                            </div>
                            <div className="question_number text-center text-uppercase text-white">
                                <span className="rounded-pill">Question 1 to 5</span>
                            </div>
                            <div className="row pt-5 mt-4 form_items radio-list">
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_1"
                                                   className="step_1 animate__animated animate__fadeInRight animate_50ms active">
                                                Well organized and Easy
                                                <input id="opt_1" type="radio" name="stp_1_select_option"
                                                       value="Well organized and Easy">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_2"
                                                   className="step_1 animate__animated animate__fadeInRight animate_100ms">
                                                Transition Between Two
                                                <input id="opt_2" type="radio" name="stp_1_select_option"
                                                       value="Transition Between Two">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_3"
                                                   className="step_1 animate__animated animate__fadeInRight animate_150ms">
                                                Transitions are Shown
                                                <input id="opt_3" type="radio" name="stp_1_select_option"
                                                       value="Transitions are Shown">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_4"
                                                   className="step_1 animate__animated animate__fadeInRight animate_200ms">
                                                Generate a nice Color
                                                <input id="opt_4" type="radio" name="stp_1_select_option"
                                                       value="Generate a nice Color">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!---------- Form Button ---------->
                        <div className="form_btn">
                            <button type="button"
                                    className="js-btn-next next_btn rounded-pill position-absolute text-uppercase text-white"
                                    id="nextBtn">Next
                            </button>
                        </div>
                    </div>
                    <!------------------------- Step-2 ----------------------------->
                    <div className="multisteps_form_panel">
                        <!-- Form-content -->
                        <div className="form_content">
                            <div className="question_title text-center text-uppercase">
                                <h1>The iron ore mined at Bailadila is mostly</h1>
                            </div>
                            <div className="question_number text-center text-uppercase text-white">
                                <span className="rounded-pill">Question 2 to 5</span>
                            </div>
                            <div className="row pt-5 mt-4 form_items radio-list">
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_5"
                                                   className="step_2 animate__animated animate__fadeInRight animate_50ms">
                                                haematite
                                                <input id="opt_5" type="radio" className="required" name="stp_2_select_option"
                                                       value="haematite">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_6"
                                                   className="step_2 animate__animated animate__fadeInRight animate_100ms">
                                                limonite
                                                <input id="opt_6" type="radio" name="stp_2_select_option" value="limonite">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_7"
                                                   className="step_2 animate__animated animate__fadeInRight animate_150ms">
                                                siderite
                                                <input id="opt_7" type="radio" name="stp_2_select_option" value="siderite">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_8"
                                                   className="step_2 animate__animated animate__fadeInRight animate_200ms">
                                                magnetic
                                                <input id="opt_8" type="radio" name="stp_2_select_option" value="magnetic">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!---------- Form Button ---------->
                        <div className="form_btn">
                            <button type="button" className="js-btn-prev prev_btn position-absolute text-uppercase border-0"
                                    id="prevBtn"><span><i className="fas fa-arrow-left"></i></span> Back
                            </button>
                            <button type="button"
                                    className="js-btn-next next_btn rounded-pill position-absolute text-uppercase text-white"
                                    id="nextBtn">Next
                            </button>
                        </div>
                    </div>
                    <!------------------------- Step-3 ----------------------------->
                    <div className="multisteps_form_panel">
                        <!-- Form-content -->
                        <div className="form_content">
                            <div className="question_title text-center text-uppercase">
                                <h1>The leading state in producing paper is</h1>
                            </div>
                            <div className="question_number text-center text-uppercase text-white">
                                <span className="rounded-pill">Question 3 to 5</span>
                            </div>
                            <div className="row pt-5 mt-4 form_items check-list">
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_9"
                                                   className="step_3 animate__animated animate__fadeInRight animate_50ms">
                                                West Bengal
                                                <input id="opt_9" type="checkbox" className="required" name="stp_3_select_option"
                                                       value="West Bengal">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_10"
                                                   className="step_3 animate__animated animate__fadeInRight animate_100ms">
                                                Kerala
                                                <input id="opt_10" type="checkbox" name="stp_3_select_option" value="Kerala">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_11"
                                                   className="step_3 animate__animated animate__fadeInRight animate_150ms">
                                                Bihar
                                                <input id="opt_11" type="checkbox" name="stp_3_select_option" value="Bihar">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_12"
                                                   className="step_3 animate__animated animate__fadeInRight animate_200ms">
                                                Orissa
                                                <input id="opt_12" type="checkbox" name="stp_3_select_option" value="Orissa">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!---------- Form Button ---------->
                        <div className="form_btn">
                            <button type="button" className="js-btn-prev prev_btn position-absolute text-uppercase border-0"
                                    id="prevBtn"><span><i className="fas fa-arrow-left"></i></span> Back
                            </button>
                            <button type="button"
                                    className="js-btn-next next_btn rounded-pill position-absolute text-uppercase text-white"
                                    id="nextBtn">Next
                            </button>
                        </div>
                    </div>
                    <!------------------------- Step-4 ----------------------------->
                    <div className="multisteps_form_panel">
                        <!-- Form-content -->
                        <div className="form_content">
                            <div className="question_title text-center text-uppercase">
                                <h1>The largest dune files are found in</h1>
                            </div>
                            <div className="question_number text-center text-uppercase text-white">
                                <span className="rounded-pill">Question 4 to 5</span>
                            </div>
                            <div className="row pt-5 mt-4 form_items radio-list">
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_13"
                                                   className="step_4 animate__animated animate__fadeInRight animate_50ms">
                                                West Bengal
                                                <input id="opt_13" type="radio" className="required" name="stp_4_select_option"
                                                       value="West Bengal">
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
                                                <input id="opt_14" type="radio" name="stp_4_select_option" value="Kerala">
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
                                                <input id="opt_15" type="radio" name="stp_4_select_option" value="Bihar">
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
                                                <input id="opt_16" type="radio" name="stp_4_select_option" value="Orissa">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!---------- Form Button ---------->
                        <div className="form_btn">
                            <button type="button" className="js-btn-prev prev_btn position-absolute text-uppercase border-0"
                                    id="prevBtn"><span><i className="fas fa-arrow-left"></i></span> Back
                            </button>
                            <button type="button"
                                    className="js-btn-next next_btn rounded-pill position-absolute text-uppercase text-white"
                                    id="nextBtn">Next
                            </button>
                        </div>
                    </div>
                    <!------------------------- Step-5 ----------------------------->
                    <div className="multisteps_form_panel">
                        <!-- Form-content -->
                        <div className="form_content">
                            <div className="question_title text-center text-uppercase">
                                <h1>The least explosive type of volcano is called</h1>
                            </div>
                            <div className="question_number text-center text-uppercase text-white">
                                <span className="rounded-pill">Question 5 to 5</span>
                            </div>
                            <div className="row pt-5 mt-4 form_items check-list">
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label htmlFor="opt_17"
                                                   className="step_5 animate__animated animate__fadeInRight animate_50ms">
                                                Basalt plateau
                                                <input id="opt_17" type="checkbox" className="required" name="stp_5_select_option"
                                                       value="Basalt plateau">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled p-0">
                                        <li>
                                            <label for="opt_18"
                                                   class="step_5 animate__animated animate__fadeInRight animate_100ms">
                                                Cinder cone
                                                <input id="opt_18" type="checkbox" name="stp_5_select_option"
                                                       value="Cinder cone">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul class="list-unstyled p-0">
                                        <li>
                                            <label for="opt_19"
                                                   class="step_5 animate__animated animate__fadeInRight animate_150ms">
                                                Shield volcanoes
                                                <input id="opt_19" type="checkbox" name="stp_5_select_option"
                                                       value="Shield volcanoes">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul class="list-unstyled p-0">
                                        <li>
                                            <label for="opt_20"
                                                   class="step_5 animate__animated animate__fadeInRight animate_200ms">
                                                Composite volcanoes
                                                <input id="opt_20" type="checkbox" name="stp_5_select_option"
                                                       value="Composite volcanoes">
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!---------- Form Button ---------->
                        <div class="form_btn">
                            <button type="button" class="js-btn-prev prev_btn position-absolute text-uppercase border-0"
                                    id="prevBtn"><span><i class="fas fa-arrow-left"></i></span> Back
                            </button>
                            <button type="button" class="next_btn rounded-pill position-absolute text-uppercase text-white"
                                    id="nextBtn"><a href="../thankyou/index-2.html" class="text-decoration-none">Submit</a>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

=======
        <>
            <h1>This isisisisiisiis</h1>
        </>
>>>>>>> origin/aakash
    )
}