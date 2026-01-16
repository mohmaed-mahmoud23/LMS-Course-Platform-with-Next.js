"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Loader from "@/components/ui/Loader";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export default function verfiyrequest() {
  const [verfiyrequestPending, startverfiyrequestTransition] = useTransition();

  const params = useSearchParams();
  const email = params.get("email") as string;
  const router = useRouter();
  const [emailOtp, setEmailotp] = useState("");
  const isCompleted = emailOtp.length === 6;

  async function verfiyrequest() {
    startverfiyrequestTransition(async () => {
      authClient.signIn.emailOtp({
        email: email ,
        otp: emailOtp,
        fetchOptions: {
          onSuccess: () => {
            toast.success("verfiyrequest is success");
            router.push("/")
          },
          onError: (error) => {
            toast.error(error.error.message);
          },
        },
      });
    });
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center"> Please Check Your Email </CardTitle>
        <CardDescription className="text-xl fo">
          {" "}
          we have sent verfiyrequest email code to your email{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center gap-3 p-3">
          <InputOTP
            value={emailOtp}
            onChange={(value) => setEmailotp(value)}
            maxLength={6}
            className="gap-2 "
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-muted-foreground mb-1">
            Enter the 6digit code sent to your email
          </p>
        </div>
        <Button
          disabled={verfiyrequestPending || !isCompleted}
          onClick={verfiyrequest}
          className="w-full"
        >
          {verfiyrequestPending ? (
            <>
              <Loader />
              <span>Loding.....</span>
            </>
          ) : (
            <> verfiy Account</>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
