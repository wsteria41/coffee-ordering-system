import request from "supertest";
import app from "../app"; 

describe("Order flow", () => {
  it("creates order", async () => {
    const res = await request(app)
      .post("/api/order")
      .send({ items: [{ coffeeId: 1, size: "small", quantity: 1 }]});
      
    expect(res.status).toBe(201);
    expect(res.body.data.total).toBeGreaterThan(0);
  });
});
