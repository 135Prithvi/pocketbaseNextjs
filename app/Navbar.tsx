import Link from "next/link";
import { useUser } from "./utils/sHooks";
export const dynamic = "force-dynamic";
export const runtime = "edge";
const Navbar = async () => {
  const Rawuser = await useUser();
  const user = Rawuser?.model;
  console.log(user);
  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white p-4">
      <div className="flex items-center space-x-4">
        <Link href="/" className="hover:text-gray-300">
          My Shop
        </Link>
        <Link href="/orders" className="hover:text-gray-300">
          Orders
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {user ? (
          <div className="relative group">
            <img
              src={`https://pocketbase-docker-production-acb9.up.railway.app/api/files/_pb_users_auth_/${user.id}/${user.avatar}?thumb=100x100`}
              alt="Profile Avatar"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
            <div className="absolute right-0 bg-white text-gray-900 p-2 rounded-lg shadow-md  transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm font-light text-blue-300">
                {user.emailVisibility && user.email}
              </p>
            </div>
          </div>
        ) : (
          <Link href="auth/login" className="hover:text-gray-300">
            Login Bitch
          </Link>
        )}

        <Link href="/cart" className="hover:text-gray-300">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
