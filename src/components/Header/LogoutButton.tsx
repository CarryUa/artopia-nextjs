import clsx from "clsx";
type LogoutButtonProps = {
  className?: string;
};
export default function LogoutButton({ className }: LogoutButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        "px-20 py-5 text-white whitespace-nowrap bg-_violet-500 hover:bg-_violet-600 transition-colors",
        className
      )}
    >
      Log Out
    </button>
  );
}
