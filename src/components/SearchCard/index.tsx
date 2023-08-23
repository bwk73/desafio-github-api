import './styles.css';
import SearchButton from "../SearchButton";

export default function SearchCard() {

    return (
<div className="sc-container">
    <div>
        <h2>Encontre um perfil Github</h2>
    </div>
    <div className='sc-content-box'>
        <p>Usuário Github</p>
    </div>
    <div>
        <SearchButton />
    </div>
</div>
    );
}