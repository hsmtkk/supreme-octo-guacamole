import Layout from "@/components/Layout";

export default function EventPage({ params }: { params: { slug: string } }) {
    return (
        <Layout>
            <h1>My Event</h1>
            <h3>{params.slug}</h3>
        </Layout>
    )
}