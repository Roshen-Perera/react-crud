import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Customers} from "../pages/Customers.tsx";
import {CustomerProvider} from "../store/CustomerProvider.tsx";
import {ItemProvider} from "../store/ItemProvider.tsx";
import {Items} from "../pages/Items.tsx";
import {RootLayout} from "../components/RootLayout.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '/customer', element : <Customers/>},
                { path : '/item', element : <Items/>},
            ]
        },
    ])

    return (
        <>
            <ItemProvider>
                <CustomerProvider>
                    <RouterProvider router={routes} />
                </CustomerProvider>
            </ItemProvider>
        </>
    )
}

export default App
