import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const url: any = {};
  let [searchParams, setSearchParams] = useSearchParams();
  for (const [key, value] of searchParams.entries()) {
    url[key] = value;
  }
  return (
    <main>
      <h1>About Page</h1>
    </main>
  );
};

export default About;
