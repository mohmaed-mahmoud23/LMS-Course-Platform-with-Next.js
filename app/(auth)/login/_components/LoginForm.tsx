"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loader from "@/components/ui/Loader";
import { authClient } from "@/lib/auth-client";
import { GithubIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { toast } from "sonner";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [githubPending, startgithubTransition] = useTransition();
  const [emailPending, startemailPending] = useTransition();
  async function sinhwhithgithub() {
    startgithubTransition(async () => {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("singed in with Github, you will be redicrectid....");
          },
          onError: (error) => {
            toast.error(error.error.message);
          },
        },
      });
    });
  }

  async function containue() {
    startemailPending(async () => {
      await authClient.emailOtp.sendVerificationOtp({
        email: email,
        type: "sign-in",

        fetchOptions: {
          onSuccess: () => {
            toast.success("Email sent ");
            router.push(`/verfiyrequest?email=${encodeURIComponent(email)}`);
          },
          onError: (error) => {
            toast.error(error.error.message);
          },
        },
      });
    });
    console.log(email);
  }
  return (
    <Card className="flex flex-col gap-5">
      <CardHeader>
        <CardTitle className="text-xl">welocem back !</CardTitle>
        <CardDescription>
          Login wiht youe GitHup Or Email Account{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          disabled={githubPending}
          onClick={sinhwhithgithub}
          className="w-full "
          variant={"outline"}
        >
          {githubPending ? (
            <>
              <Loader />
              Loding.....
            </>
          ) : (
            <>
              <GithubIcon className="size-5" />
              sign in with GitHub
            </>
          )}
        </Button>
        <div className=" relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:flex after: items-center after:border-t ">
          <span className="z-10 relative bg-card px-2 text-muted-foreground">
            Or containue with
          </span>
        </div>

        <div className="grid gap-2.5 ">
          <div className=" grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="MOhamed@examlple"
            ></Input>
          </div>
          <Button disabled={emailPending} onClick={containue}>
            {emailPending ? (
              <>
                <Loader />
              </>
            ) : (
              <>containue youer email</>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
