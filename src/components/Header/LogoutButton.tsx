import clsx from "clsx";

import { useLoginContext } from "components/context/login";
import { useRouter } from "next/navigation";
type LogoutButtonProps = {
  className?: string;
};
export default function LogoutButton({ className }: LogoutButtonProps) {
  const { changeState } = useLoginContext();
  const router = useRouter();
  function onClick() {
    changeState(false);
    router.push("/");
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "px-20 py-5 text-white whitespace-nowrap bg-_violet-500 hover:bg-_violet-600 transition-colors",
        className
      )}
    >
      Log Out
    </button>
  );
}
