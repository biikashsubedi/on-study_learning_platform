'use client' //this is like a debug
interface HomePros {
    params: { id: number }
}

export default function Home({params}: HomePros) {
    return (
        <h1>This is blog  {params.id}</h1>
    )
}
