"use client";

import { useEffect, useState } from "react";

export default function ExtrasList() {
  const [extras, setExtras] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/extras")
      .then(res => res.json())
      .then(data => setExtras(data));
  }, []);

  return (
    <div className="mt-3 border p-3 rounded bg-gray-50">
      <p className="font-medium">Extras:</p>

      {extras.map((e: any) => (
        <label key={e.id} className="block mt-1">
          <input type="checkbox" value={e.id} /> {e.name} (+{e.price}₮)
        </label>
      ))}
    </div>
  );
}
