type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>


export default async function ItemPage({
    params,
    searchParams,
}: {
    params: Params
    searchParams: SearchParams
}) {

    const actualSearchParams = await searchParams;
    console.log('Params:', (await params).slug);


    console.log(actualSearchParams);


    return <div>Page Content</div>;

}