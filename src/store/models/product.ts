import { types } from "mobx-state-tree";

export const Product = types.model("Product", {
    id: types.string,
    image: types.string,
    title: types.string,
    price: types.string,
});

