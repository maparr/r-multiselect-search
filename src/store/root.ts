import {types} from "mobx-state-tree";
import {Product} from "./models";
import {Page} from "./types";

export interface Product {
    id: string,
    title: string,
    image: string,
    price: number
}


export const root = types
    .model({
        products: types.array(Product),
        page: types.number,
        searchTitle: types.string
    })
    .actions((self: any) => ({
        fetchProductsSuccess(data: Page) {
            self.products = data.pageItems.map((item) => ({
                id: item.code,
                title: item.brandName,
                image: item.imageURLs[0],
                price: item.price,
            }));
        },
        fetchProductsError(error: Error) {
            console.log(error);
        },
        fetchProducts() {
            fetch("https://raw.githubusercontent.com/traa/apiplp/master/db.json")
                .then((response) => response.json())
                .then(self.fetchProductsSuccess)
                .catch(self.fetchProductsError);
        },
        setPage(index: number) {
            self.page = index;
        },
        setSearchTitle(search: string) {
            self.searchTitle = search;
        }
    }))
    .views((self) => ({
        filteredProducts(title: string, page: number) {
            const start = (page - 1) * 10;
            const filtered = title
                ? self.products.filter((product) =>
                    product.title.toLowerCase().includes(title.toLowerCase())
                )
                : self.products;

            return filtered.slice(start, start + 10);
        },
    }));

