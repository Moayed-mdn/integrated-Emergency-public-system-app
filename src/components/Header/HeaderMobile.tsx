'use client';

import HeaderLinks from './HeaderLinks';

import { Menu, MenuButton, MenuItems, Transition } from '@headlessui/react'

export default function HeaderMobile() {
  return (
    <Menu as="div" className="relative md:hidden">
      
      <MenuButton className="flex flex-col justify-around w-6 h-6 focus:outline-none">
        <span className="block h-0.5 w-full bg-black" />
        <span className="block h-0.5 w-full bg-black" />
        <span className="block h-0.5 w-full bg-black" />
      </MenuButton>

      
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <MenuItems className="absolute right-0 top-10 w-[120px] origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <HeaderLinks  />
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
