import { z } from "zod";
import { AuthWrapper } from "../../components/Auth/AuthWrapper";
import { RegisterForm } from "../../components/Auth/RegisterForm";

export default function register() {
  return (
    <AuthWrapper>
      <RegisterForm />
    </AuthWrapper>
  );
}
