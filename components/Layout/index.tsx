import { ReactNode } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import Link from "next/link";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { RootState } from "../../store";
import { AuthenticationState } from "../../store/authentication/type";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  const authentication: AuthenticationState = useSelector(
    (state: RootState) => state.authentication
  );
  if (authentication.isAuth) {
    return (
      <>
        <Head>
          <title>NextJS Basic</title>
          <meta name="description" content="Website NextJS Basic" />
        </Head>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header />
            <div className="h-full overflow-y-auto">{children}</div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Silahkan Login</title>
      </Head>
      <div className="bg-blue-700 text-white min-h-screen flex items-center">
        <div className="container mx-auto p-4 flex flex-wrap items-center">
          <div className="w-full md:w-5/12 text-center p-4">
            <img
              src="https://themichailov.com/img/not-found.svg"
              alt="Not Found"
            />
          </div>
          <div className="w-full md:w-7/12 text-center md:text-left p-4">
            <div className="text-6xl font-medium">401</div>
            <div className="text-xl md:text-3xl font-medium mb-4">
              Oops. You not authenticated.
            </div>
            <div className="text-lg mb-8">
              You may have identity to access out dashboard.
            </div>
            <Link href="/signin">
              <a className="border border-white rounded p-4">Log in</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
