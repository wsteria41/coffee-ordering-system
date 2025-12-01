// src/app/components/CoffeeCard.tsx
"use client";

type Props = {
  id: number;
  name: string;
  description?: string | null;
  basePrice: number;
};

export default function CoffeeCard({ id, name, description, basePrice }: Props) {
  return (
    <article className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div className="h-40 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
        {/* placeholder image area */}
        <span className="text-gray-400">Image</span>
      </div>

      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>

      <div className="flex items-center justify-between mt-4">
        <div className="text-lg font-bold">{basePrice}₮</div>
        <button className="px-3 py-1 bg-[#6B4F4F] text-white rounded-md text-sm">Add</button>
      </div>
    </article>
  );
}
