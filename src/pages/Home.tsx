import instance from "../libs/axios/instance";
import { Button } from "@heroui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [ping, setPing] = useState("");

  const fetchPing = async () => {
    try {
      const response = await instance.get("/ping");
      setPing(JSON.stringify(response.data));
    } catch (error) {
      console.error("Error fetching ping:", error);
    } finally {
      console.log("Ping fetch attempt finished.");
    }
  }

  useEffect(() => {
    fetchPing();
  }, []);
  
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={() => setCount((count) => count + 1)} color="primary">Button</Button>
      <span className='rounded-md shadow-md bg-white px-4 py-2'>{count}</span>
      <span>Ping: {ping}</span>
    </div>
  )
}