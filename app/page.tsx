"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { ThemToggle } from "@/components/ui/themToggle";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { set } from "zod";

export default function Home() {
  const [loding,setLoding]=useState(false)

  const { data: session } = authClient.useSession();
    const router = useRouter();


async function SinOut(){
  setLoding(true)
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        router.push("/login"); // redirect to login page
        toast.success("sing out success");
      },
    
    },
     
    
  })
  setLoding(false)
}


  return (
    <header>
      <ThemToggle /> {/* صح ✅ */}
      {session ? (
        <div>
          {session.user.name}

          {loding ? (
            "Loding....."
          ) : (
            <Button onClick={SinOut} variant={"outline"}>
              Logout
            </Button>
          )}
        </div>
      ) : (
        <>
          <Button variant={"ghost"} className={buttonVariants()}>
            <Link href={"/login"}>Login</Link>
          </Button>
        </>
      )}
    </header>
  );
}
