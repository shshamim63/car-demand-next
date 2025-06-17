// components/Header/MobileMenu.tsx
import { DisclosureButton } from '@headlessui/react';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

const MobileMenu = () => (
  <div className="space-y-1 px-2 pt-2 pb-3">
    {navigation.map((item) => (
      <DisclosureButton
        key={item.name}
        as="a"
        href={item.href}
        aria-current={item.current ? 'page' : undefined}
        className={classNames(
          item.current
            ? 'bg-gray-900 text-white'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          'block rounded-md px-3 py-2 text-base font-medium'
        )}
      >
        {item.name}
      </DisclosureButton>
    ))}
  </div>
);

export default MobileMenu;
