import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Customers} from "../pages/Customers.tsx";
import {CustomerProvider} from "../store/CustomerProvider.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            children : [
                { path : '/customer', element : <Customers/>},
            ]
        },
    ])

    return (
        <>
            <CustomerProvider>
                <RouterProvider router={routes} />
            </CustomerProvider>
        </>
    )
}

export default App
