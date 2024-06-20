import { Link } from 'react-router-dom';
import './PopularSearchBtn.css';

export default function PopularSearchBtn({name}) {
  return (
    <Link to={`/jobs/${name}`}>
    <button className="popularSearchBtn">
        {name}
    </button>
    </Link>
  )
}
