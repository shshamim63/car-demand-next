import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const ProfileMenu = () => {
  return (
    <div className="flex space-x-4">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "h-8 w-8",
            },
          }}
        />
      </SignedIn>
    </div>
  );
};

export default ProfileMenu;
