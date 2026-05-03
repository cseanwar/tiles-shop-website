"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
  toast,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const UpdateProfile = () => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    const { error } = await authClient.updateUser({ name, image });

    if (error) {
      toast.danger("Update Failed");
      return;
    }

    toast.success("Profile Updated successfully!");

    router.push("/my-profile");
  };

  return (
    <div className="bg-[#C3C7C630] flex items-center justify-center px-4 py-10">
      <Card className="border w-full max-w-sm sm:max-w-md py-8 sm:py-10 px-4 sm:px-6">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">
          Update Profile
        </h1>

        <Separator className="my-4 h-0.5 bg-olive-500 w-full" />

        <Form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
            type="text"
            className="w-full"
            defaultValue={user?.name}
          >
            <Label className="font-semibold text-sm sm:text-base md:text-lg">
              Name
            </Label>
            <Input placeholder="Enter your full name" className="w-full" />
            <FieldError />
          </TextField>

          <TextField
            name="image"
            type="text"
            className="w-full"
            defaultValue={user?.image}
          >
            <Label className="font-semibold text-sm sm:text-base md:text-lg">
              Image URL
            </Label>
            <Input placeholder="Enter image URL" className="w-full" />
            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="flex-1 bg-success font-semibold text-base py-2 sm:py-3 mt-4 w-full"
          >
            Update Information
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default UpdateProfile;
