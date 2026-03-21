"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState({ temp: "", condition: "" });

  // Update local time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: true }));
    };

    updateTime(); // run once immediately
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles,US&appid=5a2bb873e615b229993de129ec7e343f&units=imperial
`,
        );

        if (!res.ok) {
          throw new Error(`Weather fetch failed: ${res.status}`);
        }

        const data = await res.json();

        // ✅ Only set if data is valid
        if (data?.main?.temp && data?.weather?.[0]?.description) {
          setWeather({
            temp: `${Math.round(data.main.temp)}º`,
            condition: data.weather[0].description,
          });
        } else {
          console.warn("Unexpected weather data format:", data);
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 10 * 60 * 1000); // every 10 min
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="uppercase font-semibold px-6 sm:px-16 pt-16 sm:pt-20 mt-16 pb-4 relative overflow-x-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-12 gap-x-6 sm:gap-x-10 max-w-full">
        {/* === TIME / LOCATION === */}
        <div className="sm:col-span-4 space-y-1 text-sm">
          <div>{time || "Loading..."}</div>
          <div>Los Angeles, CA</div>
          <div>
            {weather.temp
              ? `${weather.temp} and ${weather.condition}`
              : "Loading weather..."}
          </div>
        </div>

        {/* === NEWSLETTER (DESKTOP) === */}
        <div className="hidden sm:block sm:col-start-5 sm:col-span-3">
          <p className="text-sm">Book a call with me</p>

          <a
            href="https://cal.com/jalen-cheng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-50 transition"
          >
            BOOK ME
          </a>
        </div>

        {/* === LINKS === */}
        <div className="sm:col-start-11 sm:col-span-2 grid grid-cols-1 gap-2 text-sm">
          <div className="flex flex-col space-y-2">
            <a
              href="mailto:jalen@webverry.com"
              className="hover:opacity-50 transition-opacity"
            >
              jalen@webverry.com
            </a>
            <a
              href="https://www.instagram.com/jalencheng"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@shotbyjalen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity"
            >
              YouTube
            </a>
            <a
              href="https://www.tiktok.com/@jexxypoop"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity"
            >
              TikTok
            </a>
          </div>
        </div>

        {/* === LOGO === */}
        <div className="col-span-full my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1592 400"
            aria-labelledby="logo-"
            focusable="false"
            className="w-full h-auto max-w-full"
          >
            <title id="logo-">Logo</title>
            <path
              d="M1357.86 355H1287.36V0H1373.86L1521.36 251.5V0H1591.36V355H1509.36L1357.86 95V355Z"
              fill="black"
            />
            <path
              d="M1222.15 355H963.648V0H1218.65V60.5H1036.65V144H1202.15V204H1036.65V294.5H1222.15V355Z"
              fill="black"
            />
            <path
              d="M897.406 355H682.906V0H756.906V294.5H897.406V355Z"
              fill="black"
            />
            <path
              d="M631.031 355H553.531L526.531 279H383.531L356.531 355H281.531L416.031 0H496.531L631.031 355ZM455.031 77.5L405.031 219H505.531L455.031 77.5Z"
              fill="black"
            />
            <path
              d="M125 361.5C42 361.5 0.5 314.5 0.5 247V229.5H73.5V246C73.5 277.5 87 298.5 123.5 298.5C159.5 298.5 174.5 278 174.5 241.5V0H249V238C249 315.5 202 361.5 125 361.5Z"
              fill="black"
            />
          </svg>
        </div>

        {/* === BOTTOM ROW === */}
        <div className="col-span-full grid grid-cols-1 sm:grid-cols-12 items-center text-sm gap-y-2 sm:gap-y-0">
          <div className="sm:col-span-4 flex flex-col sm:flex-row sm:items-end">
            © {new Date().getFullYear()} Los Angeles CA
          </div>

          <div className="sm:col-start-5 sm:col-span-4 flex flex-col sm:flex-row sm:justify-center space-y-2 sm:space-y-0 sm:space-x-8">
            2026 JALEN CHENG. ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer> 
  );
}
