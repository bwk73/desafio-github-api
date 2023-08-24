import { Link } from 'react-router-dom';
import './styles.css';

export default function SearchButton() {

    return (
<div>
    <Link to="/result">
    <button className='btn-search' type='submit'>Encontrar</button>
    </Link>
</div>
    );
}