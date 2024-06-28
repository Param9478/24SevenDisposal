import React from 'react';
// import { a } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/logo.png';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  return (
    <Disclosure
      as="nav"
      className="fixed w-full z-50 top-0"
      style={{ backgroundColor: '#111827' }}
      // style={{ backgroundColor: '#191919' }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <a to="/" className="flex flex-shrink-0 items-center">
                <img alt="boondocks" className="h-14" src={Logo} />
                <h5 className="hidden sm:block text-white ml-2">
                  24SEVEN DISPOSAL
                </h5>
              </a>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 items-center h-full">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      to={item.path}
                      target={item.target}
                      className={`rounded-md px-3 py-3 text-sm ${
                        item.current
                          ? 'text-white bg-orange-500'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  to={item.path}
                  target={item.target}
                  className={`${
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } block rounded-md px-3 py-2 text-base font-medium`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
