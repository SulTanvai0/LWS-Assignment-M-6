import Image from 'next/image';
import Link from "next/link";

const Nav = () => {
    return (
        <>
            <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
                <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/assets/svg/menu.svg"
                            width={20}
                            height={20}
                            className="lg:hidden w-5 h-5"
                            alt="" />
                        <Link href="/" prefetch={false}>
                            <Image
                                src="/assets/lws-logo-black.svg"
                                width={100}
                                height={40}
                                className="h-10"
                                alt="" />
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
                    <Image
                        src="/assets/svg/avatar.svg"
                        width={18}
                        height={18}
                        className="hidden lg:block w-[18px] h-[18px]"
                        alt="login amount avatar" />

                    <Image
                        src="/assets/svg/shopping-Cart.svg"
                        width={20}
                        height={20}
                        className="block w-5 h-5"
                        alt="shopping cart icon" />
                </div>
            </nav>
        </>
    );
};

export default Nav;
