import React from 'react';
import './Navbar.css'
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import profile from './profile.jpg'

import { Link } from 'react-router-dom';
import Home from './Home';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Skills', href: '/skills', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Resume', href: '/', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="fixed top-0 left-0 w-full custom-bg-color z-50">
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={profile}
                            alt="Arpit Jain"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        {({ open }) => (
                          <Menu.Items
                            className={classNames(
                              'absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
                              open ? 'right-0' : 'right-auto'
                            )}
                          >
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/http"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Your Profile
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/http"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Settings
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/http"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Sign out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        )}
                      </Transition>
                    </Menu>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=arpitjain25032001@gmail.com"
                      className="pl-2 text-gray-300 hover:text-white"
                    >
                      arpitjain25032001@gmail.com
                    </a>
                  </div>

                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
      <Home/>
    
    </>
  );
}
