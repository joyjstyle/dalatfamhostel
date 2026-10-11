"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteNavigation } from "@/content/navigation";
export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <div
      className="lg:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <button
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
        className="flex min-h-11 items-center gap-2 rounded-sm px-3 font-semibold"
      >
        {open ? (
          <X size={20} aria-hidden="true" />
        ) : (
          <Menu size={20} aria-hidden="true" />
        )}
        {open ? "Close" : "Menu"}
      </button>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-border-subtle bg-background px-5 py-4 shadow-sm"
      >
        <ul className="mobile-navigation-list">
          {siteNavigation.map((item) => (
            <li key={item.href}>
              {item.children ? (
                <details>
                  <summary>{item.label}</summary>
                  <ul>
                    <li>
                      <Link
                        href={item.href}
                        onClick={() => {
                          setOpen(false);
                          trigger.current?.focus();
                        }}
                      >
                        Overview
                      </Link>
                    </li>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => {
                            setOpen(false);
                            trigger.current?.focus();
                          }}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => {
                    setOpen(false);
                    trigger.current?.focus();
                  }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
