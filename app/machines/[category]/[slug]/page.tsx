import Main from "@/components/pages/machines/MachineMain";

type PageProps = {
    params: Promise<{ slug: string }>
}

const Page = async ({ params }: PageProps) => {
    
    const { slug } = await params

    return (
        <>
            <Main slug={slug} />
        </>
    )
}

export default Page;
