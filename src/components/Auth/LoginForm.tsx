"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { TextInput } from "common/ui/inputs/TextInput";
import { AuthFormButton } from "common/ui/Buttons/AuthFormButton";
import { getDefaults } from "utils/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLoginContext } from "components/context/login";
const loginSchema = z.object({
  email: z.string().email("Email is required").default(""),
  password: z.string().min(1, "Password is required").default(""),
});

type Form = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { state, changeState } = useLoginContext();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isLoading },
  } = useForm<Form>({
    defaultValues: getDefaults(loginSchema),
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: Form) {
    setError("");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    if (res.error) setError(res.error);
    if (!res.error) {
      changeState(true);
      console.log(state);

      reset();
      router.push("/");
    }
  }

  return (
    <div className={"bg-white max-w-[426px] ml-16"}>
      <div className={"mb-10"}>
        <h4 className={"text-black text-center font-bold text-3xl"}>
          Login to your account
        </h4>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={"flex flex-col gap-8"}>
          <div className={"flex flex-col gap-4"}>
            <TextInput
              {...register("email")}
              label={"Email address*"}
              placeholder={"Enter email address"}
              helperText={errors.email?.message ?? ""}
            />
            <TextInput
              {...register("password")}
              label={"Password"}
              placeholder={"Enter password"}
              helperText={errors.password?.message ?? ""}
            />
          </div>
          {error && (
            <div className="text-red-500 bg-red-100 p-2 rounded-xlв">
              {error}
            </div>
          )}
          <AuthFormButton>Login</AuthFormButton>
        </div>
      </form>
    </div>
  );
}
