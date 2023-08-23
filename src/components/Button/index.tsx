import { Link } from 'react-router-dom';
import './styles.css';

export default function Button() {

    return (
<div className='btn-start'>
    <Link to="/search">
    <p>Começar</p>
    </Link>
</div>
    );
}