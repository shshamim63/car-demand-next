// components/Header/Header.tsx
"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

import ProfileMenu from "./ProfileMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile Menu Button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block size-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block size-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* Logo + Nav */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Logo />
                <div className="hidden sm:ml-6 sm:block">
                  <NavLinks />
                </div>
              </div>

              {/* Right Actions */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ProfileMenu />
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <MobileMenu />
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
