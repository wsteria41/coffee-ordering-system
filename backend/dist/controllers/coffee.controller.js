import * as coffeeService from "../services/coffee.service.js";
export const getCoffees = async (req, res) => {
    const coffees = await coffeeService.getAllCoffees();
    res.json(coffees);
};
export const getCoffee = async (req, res) => {
    const id = Number(req.params.id);
    const coffee = await coffeeService.getCoffeeById(id);
    if (!coffee) {
        return res.status(404).json({ message: "Coffee not found" });
    }
    res.json(coffee);
};
export const createCoffee = async (req, res) => {
    const coffee = await coffeeService.createCoffee(req.body);
    res.status(201).json(coffee);
};
export const updateCoffee = async (req, res) => {
    const id = Number(req.params.id);
    const coffee = await coffeeService.updateCoffee(id, req.body);
    res.json(coffee);
};
export const deleteCoffee = async (req, res) => {
    const id = Number(req.params.id);
    await coffeeService.deleteCoffee(id);
    res.json({ message: "Coffee deleted" });
};
