import { Link } from 'react-router-dom';
import './styles.css';

export default function SearchButton() {

    return (
<div className='btn-search'>
    <Link to="/result">
    <p>Encontrar</p>
    </Link>
</div>
    );
}