import { useParams } from 'react-router-dom';
import '../../App.css';

function Product() {
    const { id } = useParams();

    return (
        <div className="App">
            <h2>Product Id {id}!</h2>
        </div>
    );
}

export default Product;
     