"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  User,
  BookOpen,
  FolderOpen,
  PenTool,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Settings,
} from "lucide-react";

const navigation = [
  { name: "About", href: "/", icon: User },
  { name: "Publications", href: "/publications", icon: BookOpen },
  { name: "Portfolio", href: "/portfolio", icon: FolderOpen },
  { name: "Blog", href: "/blog", icon: PenTool },
  { name: "CV", href: "/cv", icon: FileText },
  { name: "Admin", href: "/admin", icon: Settings },
];

const socialLinks = [
  { name: "GitHub", href: "#", icon: Github },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Email", href: "mailto:", icon: Mail },
];

export const Sidebar = (): JSX.Element => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-white rounded-md shadow-md border border-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 overflow-y-auto transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="p-6 text-center border-b border-gray-200">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-16 h-16 text-gray-400" />
              </div>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Your Name</h1>
            <p className="text-sm text-gray-600 mt-1">Academic Title</p>
            <p className="text-sm text-gray-600">Institution</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
