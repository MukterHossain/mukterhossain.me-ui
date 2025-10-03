'use server'
import { FieldValues } from "react-hook-form";



export const login = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await res.json()
  console.log("res login", res)
  if (!res?.ok) {
    console.error("Login Failed", await res.text());
    throw new Error(result?.message || "Login Failed")
  }
  return result
};