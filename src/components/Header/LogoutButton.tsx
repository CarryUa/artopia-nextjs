import clsx from "clsx";

import { useAuth } from "components/context/login";
import { useRouter } from "next/navigation";
type LogoutButtonProps = {
  className?: string;
};
export default function LogoutButton({ className }: LogoutButtonProps) {
  const { changeIsLoggedIn } = useAuth();
  const router = useRouter();
  function onClick() {
    changeIsLoggedIn();
    router.push("/");
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "sm:px-20 px-7 py-5 text-white whitespace-nowrap bg-_violet-500 hover:bg-_violet-600 transition-colors",
        className
      )}
    >
      Log Out
    </button>
  );
}
