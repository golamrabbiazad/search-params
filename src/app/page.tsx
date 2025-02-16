type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ demo: string }>

export default async function Home({
    params,
    searchParams,
}: {
    params: Params
    searchParams: SearchParams
}) {
    const actualSearchParams = await searchParams;
    const slug = (await params).slug;
    console.log('slug:', slug);

    console.log(actualSearchParams);

    return (
        <div>
            <p>Search Params: <code>{JSON.stringify(actualSearchParams)}</code></p>
        </div>
    );
}
