import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div>
                <h1>My Store</h1>
            </div>
            <div>
                <button>Calcetines</button>
                <button>Playeras</button>
                <button>Pantalones</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar