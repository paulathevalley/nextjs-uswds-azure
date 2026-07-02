"use server";
import { redirect } from "next/navigation";

export async function simple(formData: FormData) {
  const q = formData.get("q");
  redirect(`/?q=${q}`);
}
