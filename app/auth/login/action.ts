"use server";
import { cookies } from "next/headers";
import { pb } from "@/app/utils/pocketbase";

export default async function login(email: string, password: string) {
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
