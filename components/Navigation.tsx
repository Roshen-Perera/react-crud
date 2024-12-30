import {Link} from "react-router";


export function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link to='/customer'>Customer</Link>
                        <Link to='/item'>Item</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}