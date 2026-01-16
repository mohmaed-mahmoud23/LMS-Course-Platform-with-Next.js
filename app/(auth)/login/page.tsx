
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { LoginForm } from "./_components/LoginForm";
import { redirect } from "next/navigation";

 export async function Loginpage ()  {


    const session = await auth.api.getSession({
      headers: await headers(),
    });
    
    if (session) {
      return redirect("/")
    }
    return (
      <LoginForm />

    
  );
};

export default Loginpage;
