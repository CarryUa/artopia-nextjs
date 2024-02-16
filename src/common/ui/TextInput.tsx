import clsx from "clsx";
import { InputHTMLAttributes, useId } from "react";

type TextInputProps = {
  label?: string;
  className?: {
    inputClasses?: string;
    labelClasses?: string;
    containerClasses?: string;
    helperTextClasses?: string;
  };
  helperText?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "className">;
export default function TextInput({
  label,
  className = {},
  helperText,
  type = "text",
  ...props
}: TextInputProps) {
  const id = useId();
  const { labelClasses, inputClasses, containerClasses, helperTextClasses } =
    className;
  return (
    <div className={clsx("", containerClasses)}>
      {label && (
        <label htmlFor={id} className={clsx("", labelClasses)}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={clsx(
          "text-standart_grey-400, border-gray-400 placeholder:text-gray-500",
          inputClasses
        )}
        {...props}
      />
      <div>
        {helperText && (
          <p className={clsx("text-red-500", helperTextClasses)}>
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
}
