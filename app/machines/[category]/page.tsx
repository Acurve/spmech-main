import Main from "@/components/pages/machines/CategoryMain";

type PageProps = {
    params: Promise<{ category: string }>
}

const Page = async ({ params }: PageProps) => {
    // You can fetch data here using params.slug
    // const postData = await fetchPost(params.slug) 

    const { category } = await params



    return (
        <>

            <Main categorySlug={category} />
        </>
    )
}

export default Page;
