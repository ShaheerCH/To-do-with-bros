import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <li className='list'>
        <ul>
          <Link to="/" className="btn">
            Tasks
          </Link>
        </ul>
        <ul>
          <Link to="/Addtask" className="btn">
            Add Task
          </Link>
        </ul>
      </li>
    </nav>
  );
}
