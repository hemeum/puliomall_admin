import { Link } from 'react-router-dom';
import { SideMenuProps } from '../../types/sidemenu';

const SideBarItem = ({ index, href, text }: SideMenuProps) => {
  return (
    <li key={index} className="h-10 leading-10">
      <Link className="inline-block h-full w-full" to={href}>
        {text}
      </Link>
    </li>
  );
};

export default SideBarItem;
