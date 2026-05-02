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
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data: res, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    console.log({ data: res, error });

    if (error) {
      alert(error.message);
    }

    if (res) {
      alert("Signup successful");
      router.push("/");
    }
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-10">
      <h1 className="text-center text-2xl font-bold">Register An Account</h1>

      <Separator className="mb-5 h-0.5 w-96 ml-10 bg-olive-500" />

      <Form className="flex w-96 mx-auto flex-col gap-6" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label className="font-semibold text-lg">Name</Label>
          <Input placeholder="Enter your full name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label className="font-semibold text-lg">Image URL</Label>
          <Input placeholder="Enter image URL" />
          <FieldError />
        </TextField>

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
          <Label className="font-semibold text-lg">Email</Label>
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
          <Label className="font-semibold text-lg">Password</Label>
          <Input placeholder="Enter your password" />
          <Description className="text-red-500">
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <Button
          type="submit"
          className="w-full bg-success font-semibold text-lg py-5 mt-3"
        >
          Register
        </Button>
      </Form>

      <p className="text-center mt-10">
        Already Have An Account?{" "}
        <Link
          href={"/login"}
          className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-bold text-xl"
        >
          Login
        </Link>
      </p>
    </Card>
  );
};

export default RegisterPage;
