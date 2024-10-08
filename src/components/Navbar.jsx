import CustomLink from "./CustomLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import DropDownLink from "./DropDownLink";

const navigation = [
    { routeName: "NEWS", routeTo: "/" },
    { routeName: "HEADLINES", routeTo: "/headlines" },
];

const Navbar = () => {

    const [show, setShow] = useState(false);

    return (
        <header className="bg-toodark sticky top-0 z-50">
            <nav className="h-16 w-full lg:max-w-6xl flex justify-center items-center p-2 desktop:max-w-5xl mx-auto">
                <a className="font-bold tablet:basis-1/3 desktop:basis-2/12 desktop:justify-start flex h-full justify-center items-center font-custom text-lg text-center text-white"
                    href="https://gnews.io"
                    target="_blank"
                    rel="noreferrer"
                >
                    GNews
                </a>
                <div className="flex -order-1 basis-1/2 tablet:basis-1/3 desktop:hidden text-white">
                    <GiHamburgerMenu className="hover:bg-lite hover:text-toodark p-2 cursor-pointer" fontSize={48} onClick={() => setShow(!show)} />
                </div>
                <div className="hidden desktop:flex gap-2 lg:gap-8 basis-8/12 h-full items-center justify-center">
                    {
                        navigation.map(item => (
                            <CustomLink
                                key={item.routeName}
                                routeTo={item.routeTo}
                                routeName={item.routeName}
                            />
                        ))
                    }
                </div>
                <div className="basis-1/2 tablet:basis-1/3 flex h-full desktop:basis-2/12 justify-end w-full items-center text-white font-bold">
                    {new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                </div>
            </nav >
            {
                show &&
                <div className="flex flex-col p-2 border-t border-toolite desktop:hidden">
                    {
                        navigation.map(item => (
                            <DropDownLink
                                key={item.routeName}
                                routeTo={item.routeTo}
                                routeName={item.routeName}
                                onClick={() => setShow(false)}
                            />
                        ))
                    }
                </div>
            }
        </header >
    )
}

export default Navbar;