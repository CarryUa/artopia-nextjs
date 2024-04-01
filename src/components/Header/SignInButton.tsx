import clsx from "clsx";
import Link from "next/link";

type SignInButtonProps = {
  className?: string;
};
export default function SignInButton({ className }: SignInButtonProps) {
  return (
    <Link
      href={"/login"}
      type="button"
      className={clsx(
        "px-20 py-5 bg-_violet-500 hover:bg-_violet-600 transition-colors",
        className
      )}
    >
      Sing In
    </Link>
  );
}
