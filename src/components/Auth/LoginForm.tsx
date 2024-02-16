"use client";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../../common/ui/TextInput";
import { AuthFormButton } from "../../common/ui/AuthFormButton";
const LoginSchema = z.object({
  email: z.string().email().default(""),
  password: z.string().min(6, "this is not a valid password").default(""),
});
type Form = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isLoading },
  } = useForm<Form>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });
  function onSubmit(data: Form) {
    console.log(data);
    reset();
  }
  return (
    <div className={"bg-white max-w-[426px] ml-16"}>
      <div className={"mb-10"}>
        <h4 className={"text-black font-bold text-3xl"}>Log in</h4>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={"flex flex-col gap-6"}>
          <TextInput
            type={"email"}
            {...register("email")}
            label={"Email address*"}
            placeholder={"Enter email address"}
            helperText={errors.email?.message}
          />
          <TextInput
            type={"password"}
            {...register("password")}
            label={"Enter password*"}
            placeholder={"Enter your password"}
            helperText={errors.password?.message}
            // className={{ helperTextClasses: "text-red-500" }}
          />
        </div>
        <AuthFormButton>Log in</AuthFormButton>
      </form>
    </div>
  );
}
