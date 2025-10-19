
import { ScrollArea } from "@/components/ui/scroll-area";
import{Sheet, SheetContent, SheetHeader, SheetTitle} from "@/components/ui/sheet";

import Link from "next/link";
interface NavbarItem{
    href: string;
    children: React.ReactNode;
}
//aman
interface Props{
    items: NavbarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

 export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  return (
    <div>
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="p-0 transition-none">
                <SheetHeader className="p-4 border-b">
                    <div className="flex items-center">
                    <SheetTitle>Menu</SheetTitle>
                    </div>
                    
                </SheetHeader>
                <ScrollArea className="h-full flex flex-col overflow-y-auto pb-2">
                    {items.map((item) => (
                    <Link key={item.href} href={item.href} className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium ">
                        {item.children}
                    </Link>
                    ))}
                    <div className="border-t">
                <Link onClick={() => onOpenChange(false)} href="/sign-in" className="w-full text-left p-4 flex hover:bg-black hover:text-white items-center text-base font-medium ">
                   Log In
                </Link>
                <Link onClick={() => onOpenChange(false)} href="/sign-up" className="w-full text-left p-4 flex hover:bg-black hover:text-white items-center text-base font-medium ">
                   Start Selling
                </Link>
                </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    </div>
  )
}

