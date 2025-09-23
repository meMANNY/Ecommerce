"use client";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const poppins = Poppins({
    subsets: ["latin"],
    weight:["700"]
});

interface NavbarItemProps {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}

const NavbarItem = ({ children, href, isActive }: NavbarItemProps) => {
  return (
   <Button asChild variant={"outline"} className={cn(" bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg", isActive && "bg-black text-white hover:bg-black hover:text-white")}>
    <Link href={href}>
      {children}
    </Link>
   </Button>
  );
};

const navbarItems = [
  { children: "Home", href: "/" },
  { children: "About", href: "/about" },
  { children: "Contact", href: "/contact" },
];

export const Navbar = () => {

    const pathname = usePathname();

  return (
 <nav className="h-20 flex border-b justify-between font-medium bg-white">
    <Link href="/" className={"pl-6 flex items-center"}>
      <span className={cn(" text-5xl font-semibold ", poppins.className)}>funroad</span>
    </Link>

    <div className=" items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
            <NavbarItem 
            key ={item.href}
            href={item.href}
            >
              {item.children}
            </NavbarItem>
        ))}
    </div>
 </nav>
    );
};

