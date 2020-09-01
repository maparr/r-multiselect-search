import React, {FC, useCallback, useEffect} from 'react'
import {observer} from "mobx-react";
import Pagination from "@material-ui/lab/Pagination";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {
    Search,
    Card
} from "../components";
import {Product} from "../store";

interface MainProps {
    store: any
}

export const Main: FC<MainProps> = observer(({store}) => {

    const handleSearch = useCallback((e) => {
        store.setSearchTitle(e.target.value);
        store.setPage(1);
    }, [store.setSearchTitle, store.setPage]);

    const handlePagination = useCallback((_, page) => {
        store.setPage(page);
    }, [store.setPage]);

    useEffect(() => {
        store.fetchProducts();
    }, [store.fetchProducts]);

    const foundProducts = store
        .filteredProducts(store.searchTitle, store.page);

    const total = (store.searchTitle
        ? foundProducts.length
        : store.products.length) / 10


    return (
        <>
            <Search onChange={handleSearch}/>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid container item xs={12} spacing={3}
                      direction="row"
                      justify="center"
                      alignItems="center"
                >
                    {foundProducts
                        .map((product: Product) => (
                            <Card key={product.id} {...product} />
                        ))}
                </Grid>
            </Grid>

            <Box
                p={3}
                display="flex"
                justifyContent="center"

            >
                {total > 1
                    ? (
                        <Pagination
                            page={store.page}
                            count={total}
                            onChange={handlePagination}
                        />
                    )
                    : null}
            </Box>
        </>
    )
})
