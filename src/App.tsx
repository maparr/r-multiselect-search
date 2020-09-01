import React from 'react';
import {ThemeProvider, CssBaseline} from '@material-ui/core'
import {Theme} from "./theme";
import {Main} from "./containers";
import {observable} from "mobx";
import { root } from './store';



const storeInstance = observable.box<object | null>(null);
const store = root.create({
    products: [],
    page: 1,
    searchTitle: ''
})
storeInstance.set(store as any);

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline/>
            <Main store={store}/>
        </ThemeProvider>
    );
}

export default App;
