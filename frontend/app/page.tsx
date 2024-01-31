import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index"

interface Evt {
  id: string
  name: string
  image: string
}

export default async function HomePage() {
  const res = await fetch(`${API_URL}/api/events`, { cache: "no-store" })
  const events = await res.json()
  console.log("events")
  console.log(events)


  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt: Evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  )
}
