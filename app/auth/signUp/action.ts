"use server";
import { pb } from "@/app/utils/pocketbase";
import { cookies } from "next/headers";
export default async function signup(
  userName: string,
  fullName: string,
  email: string,
  password: string,
  confirmPassword: string,
  emailVisibility: boolean
) {
  const data = {
    username: userName,
    email: email,
    emailVisibility: emailVisibility,
    password: password,
    passwordConfirm: confirmPassword,
    name: fullName,
  };

  const record = await pb.collection("users").create(data);
  const authData = await pb
    .collection("users")
    .authWithPassword(email, password);

  cookies().set("token", pb.authStore.token ?? "", {
    secure: true,
  });
  cookies().set("user", JSON.stringify(pb.authStore.model), {
    secure: true,
  });
}
