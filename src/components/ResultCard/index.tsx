import './styles.css';
import profileImg from "../../assets/profile_img.png";

export default function ResultCard() {

    return (
<div className="rc-container">
    <div>
        <img src={profileImg} alt="profileImg" />
    </div>
    <div className='rc-information-content'>
        <div>
            <h4>Infomações</h4>
        </div>
        <div className='rc-content-box'>
            <p>Perfil: https://api.github.com/users/acenelio</p>
        </div>
        <div className='rc-content-box'>
            <p>Seguidores: 4379</p>
        </div>
        <div className='rc-content-box'>
            <p>Localidade: Uberlândia</p>
        </div>
        <div className='rc-content-box'>
            <p>Nome: Nelio Alves</p>
        </div>
    </div>
</div>
    );
}