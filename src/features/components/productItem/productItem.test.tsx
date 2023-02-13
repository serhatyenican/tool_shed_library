import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { mockStore } from "../../../infrastructure/mock/mockStore";
import { ProductItem } from "./productItem";

const mockProduct = {
    name: "stereo",
    category: "electrical",
    images: [""],
    id: "8",
    owner: null,
    description: "",
    isAvailable: true,
};

describe("Given Product item component", () => {
    test("Then it should display product item name", () => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <ProductItem item={mockProduct} />
                </Provider>
            </Router>
        );
        const element = screen.findByText(/radio/i);
        expect(element).toBeTruthy();
    });
});
