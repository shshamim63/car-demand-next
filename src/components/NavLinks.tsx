"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Cars", href: "/cars" },
  { name: "Projects", href: "/projects" },
  { name: "Calendar", href: "/calendar" },
];

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex space-x-4">
      {navigation.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={classNames(
              isActive
                ? "text-white ring-2 ring-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "rounded-md px-3 py-2 text-sm font-medium"
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
