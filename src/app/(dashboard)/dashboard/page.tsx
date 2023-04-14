"use client";
import { signOut } from "next-auth/react";

const page = async ({}) => {
  return <button onClick={() => signOut()}>Sign out</button>;
};

export default page;
