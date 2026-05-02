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

    if (error) {
      alert(error.message);
    }

    if (res) {
      alert("Signup successful");
      router.push("/");
    }
  };

  return (
    <div className="bg-[#C3C7C630] flex items-center justify-center px-4 py-10">
      <Card className="border w-full max-w-sm sm:max-w-md py-8 sm:py-10 px-4 sm:px-6">
      <h1 className="text-center text-xl sm:text-2xl font-bold">Register An Account</h1>

      <Separator className="my-4 h-0.5 w-full bg-olive-500" />

      <Form className="flex flex-col gap-4 sm:gap-6 w-full" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text" className="w-full">
          <Label className="font-semibold text-base sm:text-lg">Name</Label>
          <Input placeholder="Enter your full name" className="w-full"/>
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text" className="w-full">
          <Label className="font-semibold text-base sm:text-lg">Image URL</Label>
          <Input placeholder="Enter image URL" className="w-full"/>
          <FieldError />
        </TextField>

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
          <Label className="font-semibold text-base sm:text-lg">Email</Label>
          <Input placeholder="john@example.com" className="w-full"/>
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
          <Label className="font-semibold text-base sm:text-lg">Password</Label>
          <Input placeholder="Enter your password" className="w-full" />
          <Description className="text-red-500 text-xs sm:text-sm">
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <Button
          type="submit"
          className="w-full bg-success font-semibold text-base sm:text-lg py-4 sm:py-5 mt-2"
        >
          Register
        </Button>
      </Form>

      <p className="text-center mt-6 text-sm sm:text-base">
        Already Have An Account?{" "}
        <Link
          href={"/login"}
          className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-bold text-lg sm:text-xl"
        >
          Login
        </Link>
      </p>
    </Card>
    </div>
  );
};

export default RegisterPage;
