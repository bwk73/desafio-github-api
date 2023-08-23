import { NavLink } from 'react-router-dom';
import './styles.css';

export default function Header() {
  return (
    <header>
      <NavLink to="/">
      <h3 className='ml-41'>Github API</h3>
      </NavLink>
    </header>
  );
}
