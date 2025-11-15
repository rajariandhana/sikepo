import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <div className={`flex min-h-screen min-w-full flex-col items-center bg-white gap-6`}>
      <nav className="w-full p-4 bg-gray-800 text-white flex items-center justify-between h-12">
        <Link to="/" className="text-lg font-semibold">SIKEPO</Link>
        <div>
          <Link to="/" className="mr-4 hover:underline">Home</Link>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center w-full pt-4 px-12 gap-12 lg:gap-12">
        <Outlet />
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
