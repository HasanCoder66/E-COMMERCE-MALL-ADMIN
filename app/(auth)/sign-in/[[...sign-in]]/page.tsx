import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
};

export default page;
