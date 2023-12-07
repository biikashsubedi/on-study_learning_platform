"use client";

import Link from 'next/link'

interface SamanyaGyan {
    id: number,
    title: string,
    language: string,
    count: number,
    nepalId: number,
    globalId: number,
}

interface Loksewa {
    id: number,
    title: string,
}

// @ts-ignore
export default async function Index({data}) {

    const {LoksewaDatas, samanyaGyanDatas} = data;

    return (
        <header className="header-menu-area bg-white">
            <div className="header-top pr-150px pl-150px border-bottom border-bottom-gray py-1">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="header-widget">
                                <ul className="generic-list-item d-flex flex-wrap align-items-center fs-14">
                                    <li className="d-flex align-items-center"><i
                                        className="la la-envelope-o mr-1"></i><a
                                        href="mailto:nplearnt@gmail.com"> nplearnt@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="header-widget d-flex flex-wrap align-items-center justify-content-end">
                                <div className="select-container select-container-sm">
                                    <div className="dropdown bootstrap-select select-container-select">
                                        <select className="select-container-select" tabIndex={-98}>
                                            <option value="1">English</option>
                                            <option value="2">Nepali</option>
                                            <option value="3">Español</option>
                                            <option value="4">Français</option>
                                            <option value="5">Bahasa Indonesia</option>
                                            <option value="6">Bangla</option>
                                            <option value="7">日本語</option>
                                            <option value="8">한국어</option>
                                            <option value="9">Nederlands</option>
                                            <option value="10">Polski</option>
                                            <option value="11">Português</option>
                                            <option value="12">Română</option>
                                            <option value="13">Русский</option>
                                            <option value="14">ภาษาไทย</option>
                                            <option value="15">Türkçe</option>
                                            <option value="16">中文(简体)</option>
                                            <option value="17">中文(繁體)</option>
                                            <option value="17">Hindi</option>
                                        </select>
                                        <div className="dropdown-menu ">
                                            <div className="bs-searchbox">
                                                <input type="search" className="form-control"
                                                       autoComplete="off" placeholder="Search"
                                                       role="combobox" aria-label="Search"
                                                       aria-controls="bs-select-1"
                                                       aria-autocomplete="list">
                                                </input>
                                            </div>
                                            <div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}>
                                                <ul className="dropdown-menu inner show" role="presentation"></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="generic-list-item d-flex flex-wrap align-items-center fs-14 border-left border-left-gray pl-3 ml-3">
                                    <li className="d-flex align-items-center pr-3 mr-3 border-right border-right-gray">
                                        <i
                                            className="la la-sign-in mr-1"></i><Link
                                        href="/user/login"> Login</Link>
                                    </li>
                                    <li className="d-flex align-items-center"><i className="la la-user mr-1"></i><Link
                                        href="/user/register">
                                        Register</Link></li>
                                    `
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-menu-content pr-150px pl-150px bg-white">
                <div className="container-fluid">
                    <div className="main-menu-content">
                        <a href="#" className="down-button"><i
                            className="la la-angle-down"></i></a>
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="logo-box">
                                    <Link href="/" className="logo">
                                        <img src="/assets/home/images/5.png" width={140} height={41} alt="logo"></img>
                                    </Link>
                                    <div className="user-btn-action">
                                        <div
                                            className="off-canvas-menu-toggle cat-menu-toggle icon-element icon-element-sm shadow-sm mr-2"
                                            data-toggle="tooltip" data-placement="top" title=""
                                            data-original-title="Category menu">
                                            <i className="la la-th-large"></i>
                                        </div>
                                        <div
                                            className="off-canvas-menu-toggle main-menu-toggle icon-element icon-element-sm shadow-sm"
                                            data-toggle="tooltip" data-placement="top" title=""
                                            data-original-title="Main menu">
                                            <i className="la la-bars"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="menu-wrapper">
                                    <div className="menu-category">
                                        <ul>
                                            <li>
                                                <a href="#">Categories
                                                <i className="la la-angle-down fs-12"></i></a>
                                                <ul className="cat-dropdown-menu">
                                                    {samanyaGyanDatas.data.map((item: SamanyaGyan, index: number) => (
                                                        <li><a href="#">{item.title}</a></li>
                                                    ))}

                                                    <hr></hr>
                                                    <li>
                                                        <a href="#">LokSewa
                                                            <i className="la la-angle-right"></i></a>
                                                        <ul className="sub-menu">

                                                            <li>
                                                                <a href="#">All</a>
                                                            </li>
                                                            {LoksewaDatas.data.map((item: Loksewa, index: number) => (
                                                                <li>
                                                                    <a href="#">{item.title}</a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <nav className="main-menu ml-3">
                                        <ul>
                                            <li>
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link href="/blog">Blog</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="nav-right-button">
                                        <a href="#"
                                           className="btn theme-btn d-none d-lg-inline-block">
                                            <i className="la la-mobile-phone mr-1"></i>
                                            Get Mobile App
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="off-canvas-menu custom-scrollbar-styled main-off-canvas-menu">
                <div className="off-canvas-menu-close main-menu-close icon-element icon-element-sm shadow-sm"
                     data-toggle="tooltip"
                     data-placement="left" title="" data-original-title="Close menu">
                    <i className="la la-times"></i>
                </div>
                <ul className="generic-list-item off-canvas-menu-list pt-90px">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
            </div>

            <div className="off-canvas-menu custom-scrollbar-styled category-off-canvas-menu">
                <div className="off-canvas-menu-close cat-menu-close icon-element icon-element-sm shadow-sm"
                     data-toggle="tooltip"
                     data-placement="left" title="" data-original-title="Close menu">
                    <i className="la la-times"></i>
                </div>
                <ul className="generic-list-item off-canvas-menu-list pt-90px">
                    <li><a href="#">History</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">geography</a></li>
                    <hr></hr>
                    <li>
                        <a href="#">LokSewa</a>
                        <ul className="sub-menu">
                            <li>
                                <a href="#">All</a>
                            </li>
                            <li>
                                <a href="#">Nepal Health</a>
                            </li>
                            <li>
                                <a href="#">Computer Operator</a>
                            </li>
                            <li>
                                <a href="#">Banking Sector</a>
                            </li>
                            <li>
                                <a href="#">Nepal Police</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="body-overlay"></div>
        </header>
    );
}
