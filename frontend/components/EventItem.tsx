import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/EventItem.module.css"

interface Evt {
    image: string
}

export default function EventItem({ evt }: { evt: Evt }) {
    return (<div className={styles.event}>
        <div className={styles.img}>
            <Image src={evt.image ? evt.image : "/images/event-default.png"} alt="event" width={170} height={100} />
        </div>
    </div>)
}