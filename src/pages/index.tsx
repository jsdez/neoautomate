// pages/index.tsx

import { NextPage } from "next";
import Cover from "@/components/Hero";  // Import Cover component

const Home: NextPage = () => {
  return (
    <>
      <Cover />  {/* This will display only on the homepage */}
    </>
  );
};

export default Home;
