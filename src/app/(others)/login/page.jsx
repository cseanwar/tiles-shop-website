/* eslint-disable react/no-unescaped-entities */
"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { toast } from "@heroui/react";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    console.log({ data, error });

    if (error) {
      toast.danger("Login Failed: " + error.message);
      return;
    }

    toast.success("Login Successful!" + (data?.user?.name ? ` Welcome back, ${data.user.name}!` : ""));
  };

  const handlGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="bg-[#C3C7C630] flex items-center justify-center px-4 py-10">
      <Card className="border w-full max-w-sm sm:max-w-md py-8 sm:py-10 px-4 sm:px-6">
      <h1 className="text-center text-2xl sm:text-3xl font-bold">Login</h1>

      <Separator className="my-4 h-0.5 bg-olive-500 w-full" />

      <Form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          className="w-full"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label className="text-base sm:text-lg font-semibold">Email</Label>
          <Input placeholder="john@example.com" className="w-full" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          className="w-full"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label className="text-base sm:text-lg font-semibold">Password</Label>
          <Input placeholder="Enter your password" className="w-full"/>
          <Description className="text-red-500 text-xs">
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <Button
          type="submit"
          className="w-full bg-success font-semibold text-base sm:text-lg py-4 sm:py-5 mt-3"
        >
          Login
        </Button>

        <div className="flex items-center gap-3 w-full mt-2">
          <Separator className="bg-olive-500 h-0.5 flex-1" />
          <span className="whitespace-nowrap text-base sm:text-lg text-olive-500 font-bold">
            OR
          </span>
          <Separator className="bg-olive-500 h-0.5 flex-1" />
        </div>

        <Button onClick={handlGoogleSignIn} 
          className="w-full text-sm sm:text-base font-semibold py-4 sm:py-5 flex items-center justify-center gap-3" 
          variant="tertiary">
          <Icon icon="devicon:google" width={20} />
          Sign in with Google
        </Button>
      </Form>

      <p className="text-center mt-6 text-sm sm:text-base">
        Don't Have An Account?{" "}
        <Link
          href={"/register"}
          className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-bold text-lg sm:text-xl"
        >
          Register
        </Link>
      </p>
    </Card>
    </div>
  );
};

export default LoginPage;
