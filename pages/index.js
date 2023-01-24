import { useEffect, } from "react";
import { primaryColor } from "../styles/variables.module.scss";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    console.log("color is", primaryColor);
    // router.push("/cooperative-members/register");
    router.push("/yebox");
  });
  
  return <div></div>;
}
