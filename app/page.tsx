import { Button, buttonVariants } from "@/components/ui/button";
import { ThemToggle } from "@/components/ui/themToggle";
import Link from "next/link";

export default function Home() {
  return (
    <header>
      <ThemToggle /> {/* صح ✅ */}
      
      <Button variant={"ghost"} className={buttonVariants()}>
      <Link href={"/login"} >  
Login

        
       </Link>
      </Button>
    </header>
  );
}
