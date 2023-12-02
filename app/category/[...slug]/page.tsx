'use client'
const url = 'https://jsonplaceholder.typicode.com/posts'

interface CategoryPros {
    params: {
        slug: string
    }
}

interface DummyAPI {
    id: number,
    title: string,
    body: string,
}

async function ApiCall() {
    const response = await fetch(url)
    return await response.json()
}

export default async function Category({params}: CategoryPros) {
    const data=await ApiCall()

    console.log( data)
    return (

        <>
        {data.map((item: DummyAPI, index: number) => (
            <div className="card mb-3 mr-5 ml-5"  key={index}>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.body}</p>
            </div>
        ))}

            <section>
                <h2> {params.slug} </h2>
                <p>You can get all Cources here.</p>


            </section>
        </>
    )
}



