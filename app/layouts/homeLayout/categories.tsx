export default function Index() {
    return (
        <>
            <section className="feature-area">
                <div className="container">
                    <div className="row feature-content-wrap">
                        <div className="col-lg-3 responsive-column-half">
                            <div className="info-box">
                                <div className="info-overlay"></div>
                                <div className="icon-element mx-auto shadow-sm">
                                    <svg style={{color: 'blue'}} xmlns="http://www.w3.org/2000/svg" width="40"
                                         height="40"
                                         fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                                        <path
                                            d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                                            fill="blue"></path>
                                    </svg>
                                </div>
                                <h3 className="info__title">General Knowledge</h3>
                                <p className="info__text">General Knowledge</p>
                            </div>
                        </div>
                        <div className="col-lg-3 responsive-column-half">
                            <div className="info-box">
                                <div className="info-overlay"></div>
                                <div className="icon-element mx-auto shadow-sm">
                                    <svg style={{color: 'red'}} xmlns="http://www.w3.org/2000/svg" width="40"
                                         height="40"
                                         fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16">
                                        <path
                                            d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
                                            fill="red"></path>
                                        <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"
                                              fill="red"></path>
                                        <path
                                            d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
                                            fill="red"></path>
                                    </svg>
                                </div>
                                <h3 className="info__title">History</h3>
                                <p className="info__text">History</p>
                            </div>
                        </div>
                        <div className="col-lg-3 responsive-column-half">
                            <div className="info-box">
                                <div className="info-overlay"></div>
                                <div className="icon-element mx-auto shadow-sm">
                                    <svg style={{color: 'rgb(35, 231, 172)'}} xmlns="http://www.w3.org/2000/svg"
                                         width="40"
                                         height="40"
                                         viewBox="0 0 512 512">

                                        <path
                                            d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM177.8 63.19L187.8 80.62C190.5 85.46 192 90.93 192 96.5V137.9C192 141.8 193.6 145.6 196.3 148.3C202.6 154.6 212.8 153.1 218.3 147.1L231.9 130.1C236.6 124.2 244.8 122.4 251.6 125.8L266.8 133.4C270.2 135.1 273.1 136 277.8 136C284.3 136 290.6 133.4 295.2 128.8L299.1 124.9C302 121.1 306.5 121.2 310.1 123.1L339.4 137.7C347.1 141.6 352 149.5 352 158.1C352 168.6 344.9 177.8 334.7 180.3L299.3 189.2C291.9 191 284.2 190.7 276.1 188.3L244.1 177.7C241.7 176.6 238.2 176 234.8 176C227.8 176 220.1 178.3 215.4 182.5L176 212C165.9 219.6 160 231.4 160 244V272C160 298.5 181.5 320 208 320H240C248.8 320 256 327.2 256 336V384C256 401.7 270.3 416 288 416C298.1 416 307.6 411.3 313.6 403.2L339.2 369.1C347.5 357.1 352 344.5 352 330.7V318.6C352 314.7 354.6 311.3 358.4 310.4L363.7 309.1C375.6 306.1 384 295.4 384 283.1C384 275.1 381.2 269.2 376.2 264.2L342.7 230.7C338.1 226.1 338.1 221 342.7 217.3C348.4 211.6 356.8 209.6 364.5 212.2L378.6 216.9C390.9 220.1 404.3 215.4 410.1 203.8C413.6 196.8 421.3 193.1 428.1 194.6L456.4 200.1C431.1 112.4 351.5 48 256 48C228.3 48 201.1 53.4 177.8 63.19L177.8 63.19z"
                                            fill="#23e7ac"></path>
                                    </svg>
                                </div>
                                <h3 className="info__title">Geography</h3>
                                <p className="info__text">Geography</p>
                            </div>
                        </div>
                        <div className="col-lg-3 responsive-column-half">
                            <div className="info-box">
                                <div className="info-overlay"></div>
                                <div className="icon-element mx-auto shadow-sm">
                                    <svg style={{color: 'rgb(200, 25, 118)'}} xmlns="http://www.w3.org/2000/svg"
                                         width="40"
                                         height="40"
                                         viewBox="0 0 512 512">

                                        <path
                                            d="M148.7 171.3L64.21 86.83c-28.39 32.16-48.9 71.38-58.3 114.8C19.41 205.4 33.34 208 48 208C86.34 208 121.1 193.9 148.7 171.3zM194.5 171.9L256 233.4l169.2-169.2C380 24.37 320.9 0 256 0C248.6 0 241.2 .4922 233.1 1.113C237.8 16.15 240 31.8 240 48C240 95.19 222.8 138.4 194.5 171.9zM208 48c0-14.66-2.623-28.59-6.334-42.09C158.2 15.31 118.1 35.82 86.83 64.21l84.48 84.48C193.9 121.1 208 86.34 208 48zM171.9 194.5C138.4 222.8 95.19 240 48 240c-16.2 0-31.85-2.236-46.89-6.031C.4922 241.2 0 248.6 0 256c0 64.93 24.37 124 64.21 169.2L233.4 256L171.9 194.5zM317.5 340.1L256 278.6l-169.2 169.2C131.1 487.6 191.1 512 256 512c7.438 0 14.75-.4922 22.03-1.113C274.2 495.8 272 480.2 272 464C272 416.8 289.2 373.6 317.5 340.1zM363.3 340.7l84.48 84.48c28.39-32.16 48.9-71.38 58.3-114.8C492.6 306.6 478.7 304 464 304C425.7 304 390.9 318.1 363.3 340.7zM447.8 86.83L278.6 256l61.52 61.52C373.6 289.2 416.8 272 464 272c16.2 0 31.85 2.236 46.89 6.031C511.5 270.8 512 263.4 512 256C512 191.1 487.6 131.1 447.8 86.83zM304 464c0 14.66 2.623 28.59 6.334 42.09c43.46-9.4 82.67-29.91 114.8-58.3l-84.48-84.48C318.1 390.9 304 425.7 304 464z"
                                            fill="#c81976"></path>
                                    </svg>
                                </div>
                                <h3 className="info__title">Sports</h3>
                                <p className="info__text">Sports</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
