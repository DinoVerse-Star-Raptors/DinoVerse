import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
      <Link href="/" className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-purple-600"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="text-xl font-bold text-purple-600">DinoVerse</span>
      </Link>

      <div className="hidden md:flex space-x-6">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link href="/about" className="text-gray-600 hover:text-gray-900">
          About
        </Link>
        <Link href="/toys" className="text-gray-600 hover:text-gray-900">
          Toys
        </Link>
        <Link href="/age" className="text-gray-600 hover:text-gray-900">
          Age
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-900">
          Contact
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <ShoppingCart className="text-gray-600 w-6 h-6" />
        <Button
          variant="default"
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          Login
        </Button>
      </div>
    </nav>
  );
}
