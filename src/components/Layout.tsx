import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className={`flex min-h-screen min-w-full flex-col items-center justify-between bg-white`}>
      {/* <Header2/> */}
      <main className="flex flex-col items-center justify-center max-w-screen-sm lg:max-w-7xl pt-4 px-4 gap-12 lg:gap-24 mb-12 lg:mb-24">
        <Outlet />
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
