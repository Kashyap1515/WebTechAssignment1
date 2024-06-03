import { Link } from 'react-router-dom';
import '../../App.css';

function ProductList() {
    return (
        <div className="App">
            <h2>Product List</h2>
            <br /><br />
            <Link to="/product/1">Product 1</Link>
            <br /><br />
            <Link to="/product/2">Product 2</Link>
            <br /><br />
            <Link to="/product/add">Add New</Link>
        </div>
    );
}

export default ProductList;