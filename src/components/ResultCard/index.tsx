import './styles.css';
import { InformationDTO } from '../../models/data';

type Props = {
    information: InformationDTO;
}

export default function ResultCard({information}: Props) {

    return (
<div className="rc-container">
    <div>
        <img src={information.profileImg} alt={information.name} />
    </div>
    <div className="rc-information-content">
        <div>
            <h4>Infomações</h4>
        </div>
        <div className="rc-content-box">
            <span className="fnt-bold">Perfil:</span>&nbsp;<span className="fnt-blue">{information.githubUrl}</span>
        </div>
        <div className="rc-content-box">
            <span className="fnt-bold">Seguidores:</span>&nbsp;{information.followers}
        </div>
        <div className="rc-content-box">
        <span className="fnt-bold">Localidade:</span>&nbsp;{information.location}
        </div>
        <div className="rc-content-box">
        <span className="fnt-bold">Nome:</span>&nbsp;{information.name}
        </div>
    </div>
</div>
    );
}