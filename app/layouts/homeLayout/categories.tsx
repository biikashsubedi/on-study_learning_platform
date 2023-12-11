// 'use client'
import {it} from "node:test";

const apiUrl = 'https://school.web.astrosoftware.com.np/api/v1/'
const apiKey = 'p2yrhocea##)+87ob2#=$8&hs+@yh0dtr^nxeoq$tjug%se4fl'
const nextUrl = 'samanya-gyan'

interface SamanyaGyan {
    id: number,
    title: string,
    language: string,
    count: number,
    nepalId: number,
    globalId: number,
}


// @ts-ignore
export default async function Index({data}) {

    const {samanyaGyanDatas} = data;


    return (
        <>
            <section className="feature-area">
                <div className="container">
                    <div className="row feature-content-wrap">

                        {samanyaGyanDatas.data.map((item: SamanyaGyan, index: number) => (

                            <div key={index} className="col-lg-3 responsive-column-half">
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
                                    <h3 className="info__title">{item.title}</h3>
                                    <p className="info__text">{item.title}</p>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}
