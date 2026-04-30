/* eslint-disable react/no-unescaped-entities */
"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
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
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";

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
  };

  const handlGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-12">
      <h1 className="text-center text-3xl font-bold">Login</h1>

      <Separator className="mb-5 h-0.5 bg-olive-500 w-96 ml-10" />

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label className="text-lg font-semibold">Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
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
          <Label className="text-lg font-semibold">Password</Label>
          <Input placeholder="Enter your password" />
          <Description className="text-red-500">
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2 items-center justify-center mt-5">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="danger">
            Reset
          </Button>
        </div>

        <div className="flex items-center gap-3 w-42 mt-5">
          <Separator className="bg-olive-500 h-0.5" />
          <span className="whitespace-nowrap text-lg text-olive-500 font-bold">OR</span>
          <Separator className="bg-olive-500 h-0.5" />
        </div>

        <Button
          onClick={handlGoogleSignIn}
          variant="outline"
          className="w-full"
        >
          <GrGoogle /> Sign In With Google
        </Button>
      </Form>

      <p className="text-center mt-10">
          Don't Have An Account?{" "}
          <Link href={"/register"} className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-bold text-xl">
            Register
          </Link>
        </p>

      {/* <span>OR<Separator /></span>   */}
      {/* <p className="text-center"> Or</p> */}
    </Card>
  );
};

export default LoginPage;
