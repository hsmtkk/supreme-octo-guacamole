import Head from "next/head"
import styles from "@/styles/Layout.module.css"
import Header from "./Header"
import Footer from "./Footer"

const DEFAULT_TITLE = "DJ Events | Find the hottest parties"
const DEFAULT_KEYWORDS = "music, dj, edm, events"
const DEFAULT_DESCRIPTION = "Find the latest DJ and other musical events"

export default function Layout({ title = DEFAULT_TITLE, keywords = DEFAULT_KEYWORDS, description = DEFAULT_DESCRIPTION, children }: { title?: string, keywords?: string, description?: string, children: React.ReactNode }) {
    return (<div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Head>
        <Header />
        <div className={styles.container}>
            {children}
        </div>
        <Footer />
    </div>)
}