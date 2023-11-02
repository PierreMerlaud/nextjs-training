"use client";
import React, { useState, useEffect } from "react";

async function getData() {
  const res = await fetch("https://restcountries.com/v3.1/all");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {data ? (
          <div>
            <p>Name: {data.name}</p>
            <p>Capital: {data.capital}</p>
            <p>Region: {data.region}</p>
            {/* Render more properties here */}
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </main>
  );
}

export default Home;
