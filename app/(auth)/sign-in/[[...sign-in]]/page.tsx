import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="md:mt-[10%] mt-[42%]">
      <SignIn />
    </div>
  )
}