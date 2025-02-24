import SideBarItem from './SideBarItem';
import { SideMenuProps } from '../../types/sidemenu';

const SideBar = () => {
  const sideMenuItems: SideMenuProps[] = [
    { href: '/', text: '홈' },
    { href: '/product', text: '상품' },
  ];
  return (
    <aside className="border-#f5f5f5; fixed left-0 top-0 mt-14 h-full w-64 border-r p-6">
      <ul>
        {sideMenuItems.map((item, index) => (
          <SideBarItem key={index} href={item.href} text={item.text} />
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
