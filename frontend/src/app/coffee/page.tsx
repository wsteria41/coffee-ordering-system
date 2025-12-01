// src/app/coffee/page.tsx
import CoffeeCard from "../components/CoffeeCard";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default async function CoffeeListPage() {
  try {
    const res = await fetch(`${API}/api/coffee`, { cache: "no-store" });
    if (!res.ok) throw new Error(`API ${res.status}`);
    const coffees = await res.json();
    const arr = Array.isArray(coffees) ? coffees : [];

    return (
      <main className="min-h-screen bg-white p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Our Coffees</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {arr.map((c: any) => (
              <CoffeeCard
                key={c.id}
                id={c.id}
                name={c.name}
                description={c.description}
                basePrice={c.basePrice}
              />
            ))}
          </div>
        </div>
      </main>
    );
  } catch (err) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-600">Алдаа: кофег татаж чадсангүй.</p>
        </div>
      </main>
    );
  }
}
