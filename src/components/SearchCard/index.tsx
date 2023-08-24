import './styles.css';
import SearchButton from "../SearchButton";

export default function SearchCard() {

    return (
<div className="sc-container">
    <div>
        <h2>Encontre um perfil Github</h2>
    </div>
    <form className='sc-content-box'>
        <input type="text" placeholder='Usuário Github'/>
    </form>
    <div>
        <SearchButton />
    </div>
</div>
    );
}