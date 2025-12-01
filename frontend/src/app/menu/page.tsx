"use client";

import { useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext";
import styles from "./menu.module.css";

type Coffee = {
  id: number;
  name: string;
  description: string;
  basePrice: number;
};

type Extra = {
  id: number;
  name: string;
  price: number;
};

export default function MenuPage() {
  const [items, setItems] = useState<Coffee[]>([]);
  const [extras, setExtras] = useState<Extra[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    async function loadData() {
      const coffees = await fetch("http://localhost:4000/api/coffee").then((r) => r.json());
      const extraList = await fetch("http://localhost:4000/api/extras").then((r) => r.json());
      setItems(coffees);
      setExtras(extraList);
    }
    loadData();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "2.4rem", marginBottom: "20px", fontWeight: "bold" }}>
        Coffee Menu
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        {items.map((item) => (
          <CoffeeCard key={item.id} item={item} extras={extras} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

function CoffeeCard({
  item,
  extras,
  addToCart,
}: {
  item: Coffee;
  extras: Extra[];
  addToCart: any;
}) {
  const [selectedExtras, setSelectedExtras] = useState<number[]>([]);

  // Calculate price dynamically
  const extraTotal = extras
    .filter((ex) => selectedExtras.includes(ex.id))
    .reduce((sum, ex) => sum + ex.price, 0);

  const finalPrice = item.basePrice + extraTotal;

  const toggleExtra = (id: number) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          height: "150px",
          background: "#eee",
          borderRadius: "8px",
          marginBottom: "15px",
        }}
      />

      <h2 style={{ margin: "0 0 10px", fontSize: "1.4rem" }}>{item.name}</h2>
      <p style={{ color: "#555", minHeight: "50px" }}>{item.description}</p>

      {/* ⭐ EXTRA OPTIONS */}
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <p style={{ fontWeight: "600", marginBottom: "6px" }}>Extras:</p>

        {extras.map((ex) => (
          <label key={ex.id} style={{ display: "flex", gap: "6px", marginBottom: "4px" }}>
            <input
              type="checkbox"
              checked={selectedExtras.includes(ex.id)}
              onChange={() => toggleExtra(ex.id)}
            />
            <span>
              {ex.name} (+{ex.price}₮)
            </span>
          </label>
        ))}
      </div>

      {/* PRICE */}
      <p style={{ fontWeight: "bold", fontSize: "1.2rem", marginTop: "12px" }}>
        Total: ₮{finalPrice}
      </p>

      <button
        className={styles.addCartBtn}
        onClick={() =>
          addToCart({
            ...item,
            extras: extras.filter((ex) => selectedExtras.includes(ex.id)),
            finalPrice,
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}
