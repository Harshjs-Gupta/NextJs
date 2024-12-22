"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./nav-link.module.css";

function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <div>
      <Link
        href={href}
        className={
          path.startsWith(href) ? `${style.link} ${style.active}` : style.link
        }
      >
        {children}
      </Link>
    </div>
  );
}
export default NavLink;
