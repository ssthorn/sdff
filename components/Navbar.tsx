//components/Navbar.tsx
import Link from "next/link";
// import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Navbar() {

  // const isMobile = useIsMobile()

  return (
      <NavigationMenu>
        <NavigationMenuList className='flex-wrap'>
          <NavigationMenuItem className='hidden md:block'>
            <NavigationMenuTrigger>Film Festival</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Festival Info</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Tickets</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Film Program</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">History</Link>
                </NavigationMenuLink><NavigationMenuLink asChild>
                  <Link href="#">Submit Your Film</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className='hidden md:block'>
            <NavigationMenuTrigger>Visit San Diego</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">S.D. Tourism</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Restaurants</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Hotels & Lodging</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Travel & Transport</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className='hidden md:block'>
            <NavigationMenuTrigger>SD Film</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Mission</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">S.D. Cinemas</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Film Awards</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Press & Industry</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Membership</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className='hidden md:block'>
            <NavigationMenuTrigger>Submissions</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Submit Your Film</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Screenplay Contest</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Submission Guide</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Festival Rules</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      
  );
}
