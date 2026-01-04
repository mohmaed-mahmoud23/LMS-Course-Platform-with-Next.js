import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import Logo  from "@/public/window.svg";
import Image from "next/image";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex relative flex-col items-center min-h-screen  justify-center gap-8" >
      <div className=" mx-auto  w-full max-w-md p-8 item ">
        <Link
          className={buttonVariants({
            variant: "outline",
            className: "absolute top-4 left-4",
          })}
          href={"/"}
        >
          <ArrowLeft />
          Back
        </Link>

        <div className=" flex w-full max-w-sm justify-center items-center gap-2 ">
          <Link
            className="text-center items-center gap-2 self-center font-medium"
            href={"/"}
          >
            Marshaml.LMS
          </Link>
        <div>
        </div>
          <Image src={Logo} alt="sds" width={20} height={10} />
        </div>
        {children}




        <div className="text-balance  text-center text-sm hover:text-primary cursor-pointer hover:underline ">
          containue to policy, termes of services 
        </div>
      </div>
    </div>
  );
}
