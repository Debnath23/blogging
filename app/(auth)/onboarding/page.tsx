import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import AccountProfile from "@/components/forms/AccountProfile";

async function Page() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/home");

  const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user.username,
    name: userInfo ? userInfo?.name : user.firstName ?? "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : user.imageUrl,
    dob: userInfo ? userInfo?.dob : "",
    sex: userInfo ? userInfo?.sex : "",
    bloodGroup: userInfo ? userInfo?.bloodGroup : "",
    lastPassIns: userInfo ? userInfo?.lastPassIns : "",
    currentStatus: userInfo ? userInfo?.currentStatus : "",
    experties: userInfo ? userInfo?.experties : "",
    memories: userInfo ? userInfo?.memories : "",
    userMail: userInfo ? userInfo?.userMail : "",
    phoneNo: userInfo ? userInfo?.phoneNo : "",
    futureScope: userInfo ? userInfo?.futureScope : "",
  };

  return (
    <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
      <h1 className='head-text'>Onboarding</h1>
      <p className='mt-3 text-base-regular text-light-2'>
        Complete your profile now, to use Threds.
      </p>

      <section className='mt-9 bg-dark-2 p-10'>
        <AccountProfile user={userData} btnTitle='Continue' />
      </section>
    </main>
  );
}

export default Page;