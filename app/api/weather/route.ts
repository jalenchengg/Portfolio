// app/api/weather/route.ts
import { NextResponse } from "next/server";

const API_KEY = process.env.OPENWEATHER_API_KEY; // store your key in .env.local

export async function GET() {
  const city = "Los Angeles";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
  );
  const data = await response.json();

  return NextResponse.json({
    temp: Math.round(data.main.temp),
    desc: data.weather[0].description,
    city: data.name,
  });
}
