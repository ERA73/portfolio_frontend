import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <div>
        <ul>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/skills">Skills</Link>
            </li>
            <li>
            <Link to="/experience">Experience</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <hr />
            <li>
            <Link to="/contactlist">Contact List</Link>
            </li>
        </ul>
    </div>
  )
}