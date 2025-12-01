"use client";

import { useSearchParams } from "next/navigation";

export default function OrderSuccessPage() {
  const params = useSearchParams();

  const orderId = params.get("orderId");
  const total = params.get("total");

  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "2.4rem", marginBottom: "20px", fontWeight: "bold" }}>
        🎉 Order Successful!
      </h1>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: "1.6rem", marginBottom: "10px" }}>
          Thank you for your order! ☕
        </h2>

        <p style={{ marginBottom: "8px", fontSize: "1.2rem" }}>
          <strong>Order Number:</strong> #{orderId}
        </p>

        <p style={{ marginBottom: "20px", fontSize: "1.2rem" }}>
          <strong>Total:</strong> ₮{total}
        </p>

        <a
          href="/"
          style={{
            display: "inline-block",
            background: "black",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            marginTop: "20px",
            textDecoration: "none",
          }}
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
