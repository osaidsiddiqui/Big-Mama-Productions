import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="bg-black min-h-[70vh] flex items-center justify-center pt-20 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-9xl md:text-[150px] text-amber-600 font-bold leading-none mb-4">404</h1>
          <p className="text-4xl text-white font-bold mb-4">Page Not Found</p>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Looks like we're still looking for this track. The page you're looking for doesn't exist at Big Mama Productions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block bg-amber-600 text-black font-bold px-8 py-4 hover:bg-amber-500 transition-colors text-lg"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-block border-2 border-amber-600 text-amber-500 font-bold px-8 py-4 hover:bg-amber-900 transition-colors text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
