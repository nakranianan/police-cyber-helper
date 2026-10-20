import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./header";

const MainLayout = () => {
  return (
    <div className="dark flex min-h-screen flex-col font-sans text-foreground bg-background">
      <Header />
      <main className="flex-1 container m-auto p-4 md:p-8">
        <Outlet />
      </main>
      <footer className="border-t py-6 text-center text-xs text-muted-foreground font-mono">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Police Cyber Helper &bull; Case Management System</span>
          <span>Developed by <span className="text-foreground font-medium">Anan Nakrani</span></span>
        </div>
      </footer>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default MainLayout;
