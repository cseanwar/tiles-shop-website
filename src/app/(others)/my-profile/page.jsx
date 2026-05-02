"use client";
import UpdateUserModal from "@/components/shared/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const MyProfile = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="bg-[#C3C7C630] px-4 py-10">
      <Card className="w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center gap-3 border p-6 sm:p-10">
        <Avatar className="h-20 w-20 sm:h-24 sm:w-24 text-3xl">
          {user?.image && (
            <Avatar.Image
              alt={user?.name}
              src={user.image}
              referrerPolicy="no-referrer"
            />
          )}
          <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
        </Avatar>

        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold">{user?.name}</h2>
          <p className="text-sm sm:text-base text-gray-500">{user?.email}</p>
        </div>

        <div className="w-full h-px bg-gray-200 my-2" />

        <UpdateUserModal />
      </Card>
    </div>
  );
};

export default MyProfile;
