"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Settings,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: ShoppingBag,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r bg-white p-8">
      <h1 className="mb-12 text-3xl font-light tracking-wide">
        Variare
      </h1>

      <nav className="space-y-3">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                pathname === link.href
                  ? "bg-black text-white"
                  : "hover:bg-neutral-100"
              }`}
            >
              <Icon size={20} />

              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}