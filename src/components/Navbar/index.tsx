"use client";

import clsx from "clsx";
import React, { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";
// import Button from "../Button";
import Image from "next/image";

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const navItems = [];

    return (
        <nav aria-label="Main navigation">
            <ul className="flex flex-col justify-between bg-black px-16 py-2 md:flex-row md:items-center">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between gap-3">
                    <Image src='/logos/light.png' alt='logo' height={24} width={36} />
                    <NameLogo name={'Ittfaq Engineering'} />
                    </div>
                    <button
                        aria-expanded={open}
                        aria-label="Open menu"
                        className="block p-2 text-2xl text-slate-800 md:hidden"
                        onClick={() => setOpen(true)}
                    >
                        <MdMenu />
                    </button>
                </div>
                <div
                    className={clsx(
                        "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
                        open ? "translate-x-0" : "translate-x-[100%]",
                    )}
                >
                    <button
                        aria-label="Close menu"
                        aria-expanded={open}
                        className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden "
                        onClick={() => setOpen(false)}
                    >
                        <MdClose />
                    </button>
                    {/* {navItems.map(({ link, label }, index) => (
                        <React.Fragment key={label}>
                            <li className="first:mt-8">
                                <Link
                                    className={clsx(
                                        "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 ",
                                    )}
                                    href={link}
                                    onClick={() => setOpen(false)}
                                    aria-current={
                                        pathname.includes(link as string)
                                            ? "page"
                                            : undefined
                                    }
                                >
                                    <span
                                        className={clsx(
                                            "absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                                            pathname.includes(link as string)
                                                ? "translate-y-6"
                                                : "translate-y-18",
                                        )}
                                    />
                                    <span className="relative">{label}</span>
                                </Link>
                            </li>
                            {index < navItems.length - 1 && (
                                <span
                                    className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                                    aria-hidden="true"
                                >
                                    /
                                </span>
                            )}
                        </React.Fragment>
                    ))} */}
                    {/* <li>
                        <Button
                            link={'https://www.linkedin.com/in/yasir-rafiq-b84b41102/'}
                            label={'Contact'}
                            download=""
                            target="_blank"
                            className="ml-3"
                        />
                    </li> */}
                </div>
                {/* <DesktopMenu navItems={navItems} pathname={pathname} /> */}
            </ul>
        </nav>
    );
}

function NameLogo({ name }: { name: string }) {
    return (
        <Link
            href="/"
            aria-label="Home page"
            className="text-xl font-extrabold text-white"
        >
            {name}
        </Link>
    );
}

interface headerItems {
    label: string;
    link: string;
}

function DesktopMenu({
    navItems,
    pathname,
}: {
    navItems: headerItems[],
    pathname: string;
}) {
    return (
        <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
            {navItems.map(({ link, label }, index) => (
                <React.Fragment key={label}>
                    <li>
                        <Link
                            className={clsx(
                                "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-white",
                            )}
                            href={link}
                            aria-current={
                                pathname.includes(link as string) ? "page" : undefined
                            }
                        >
                            <span
                                className={clsx(
                                    "absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
                                    pathname.includes(link as string)
                                        ? "translate-y-6"
                                        : "translate-y-8",
                                )}
                            />
                            <span className="relative">{label}</span>
                        </Link>
                    </li>
                    {index < navItems.length - 1 && (
                        <span
                            className="hidden text-4xl font-thin leading-[0] text-white md:inline"
                            aria-hidden="true"
                        >
                            /
                        </span>
                    )}
                </React.Fragment>
            ))}
            <li>
                <Button
                    link={'https://www.linkedin.com/in/yasir-rafiq-b84b41102/'}
                    label={'Contact'}
                    download=""
                    target="_blank"
                    className="ml-3"
                />
            </li>
        </div>
    );
}