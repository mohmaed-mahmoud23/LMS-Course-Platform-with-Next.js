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
import { GithubIcon } from "lucide-react";
import React from "react";

const Loginpage = () => {
  return (
    <Card className="flex flex-col gap-5">
      <CardHeader>
        <CardTitle className="text-xl">welocem back !</CardTitle>
        <CardDescription>Login wiht youe GitHup Email Account </CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full " variant={"outline"}>
          <GithubIcon className="size-5" /> 
          sign in with GitHub
        </Button>
        <div className=" relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:flex after: items-center after:border-t ">
          <span className="z-10 relative bg-card px-2 text-muted-foreground">
            Or containue with{" "}
          </span>
        </div>

        <div className="grid gap-2.5 ">
          <div className=" grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="MOhamed@examlple"></Input>
          </div>
          <Button>containue youer email</Button>
        </div>
      </CardContent>
    </Card> 
  );
};

export default Loginpage;
