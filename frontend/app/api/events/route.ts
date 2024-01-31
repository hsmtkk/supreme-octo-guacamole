import { NextResponse } from "next/server"
import data from "./data.json"

export async function GET() {
    console.log("/api/events")
    return NextResponse.json(data)
}