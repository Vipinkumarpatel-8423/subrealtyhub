
"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

type AuthFormProps = {
  mode: "login" | "register";
};

export default function AuthForm({ mode }: AuthFormProps) {
  const isRegister = mode === "register";

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    remember: true,
    privacy: false,
    terms: false,
  });

  const update = (key: keyof typeof form, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setMessage("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (isRegister && !form.privacy) {
      setMessage("Please agree to the Privacy Policy.");
      return;
    }

    if (isRegister && !form.terms) {
      setMessage("Please agree to the Terms & Conditions.");
      return;
    }

    // Connect the login or registration API here in the future.
    setMessage(
      isRegister
        ? "Registration form is ready. API integration is pending."
        : "Sign-in form is ready. API integration is pending."
    );
  };

  const fieldClass =
    "w-full border-0 border-b border-border bg-transparent px-0 py-5 text-sm text-foreground outline-none transition-colors placeholder:text-brand-grey focus:border-accent focus:ring-0";

  return (
    <section className="relative flex items-center py-8 lg:py-12">
      <div className="w-full rounded-2xl border border-border/60 bg-background px-6 pb-8 pt-8 shadow-[0_8px_35px_rgba(23,32,51,0.10)] sm:px-10 sm:pb-10 sm:pt-10">
        <div className="-mt-12 mb-4">
          <span className="inline-flex rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm">
            {isRegister ? "Sign Up" : "Sign In"}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-1">
          {isRegister && (
            <div>
              <label htmlFor="auth-name" className="sr-only">
                Username
              </label>
              <input
                id="auth-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Username *"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={fieldClass}
                required
              />
            </div>
          )}

          <div>
            <label htmlFor="auth-email" className="sr-only">
              {isRegister ? "Email" : "Username or Email Address"}
            </label>
            <input
              id="auth-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={
                isRegister ? "Email *" : "Username or Email Address"
              }
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={fieldClass}
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="auth-password" className="sr-only">
              Password
            </label>
            <input
              id="auth-password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete={isRegister ? "new-password" : "current-password"}
              placeholder={isRegister ? "Password *" : "Password"}
              value={form.password}
              onChange={(e) => update("password", e.target.value)}
              className={`${fieldClass} pr-10`}
              minLength={8}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-1 top-1/2 -translate-y-1/2 text-brand-grey transition-colors hover:text-accent"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {isRegister ? (
            <div className="space-y-3 pt-4">
              <label className="flex cursor-pointer items-start gap-2.5 text-sm text-foreground">
                <input
                  type="checkbox"
                  checked={form.privacy}
                  onChange={(e) => update("privacy", e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent)]"
                  required
                />
                <span>
                  I agree to the{" "}
                  <Link
                    href="/privacy-policy/"
                    className="font-medium text-accent hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  <span className="text-accent">*</span>
                </span>
              </label>

              <label className="flex cursor-pointer items-start gap-2.5 text-sm text-foreground">
                <input
                  type="checkbox"
                  checked={form.terms}
                  onChange={(e) => update("terms", e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent)]"
                  required
                />
                <span>
                  I agree to all{" "}
                  <Link
                    href="/terms-and-conditions/"
                    className="font-medium text-accent hover:underline"
                  >
                    Terms &amp; Conditions
                  </Link>{" "}
                  <span className="text-accent">*</span>
                </span>
              </label>
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-between gap-4 py-5">
              <label className="flex cursor-pointer items-center gap-2.5 text-sm text-foreground">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={(e) => update("remember", e.target.checked)}
                  className="h-4 w-4 accent-[var(--accent)]"
                />
                Remember Me
              </label>

              <button
                type="button"
                onClick={() =>
                  setMessage(
                    "Password recovery will be available after API integration."
                  )
                }
                className="border-b border-dashed border-brand-grey pb-1 text-sm text-brand transition-colors hover:text-accent"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {message && (
            <p
              role="status"
              className="mt-4 rounded-lg bg-light-bg p-3 text-sm leading-6 text-foreground"
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-accent px-5 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            {isRegister ? "Sign Up" : "Sign In"}
          </button>

          <p className="pt-4 text-sm leading-6 text-brand-grey">
            {isRegister
              ? "Already have an account? Please Sign In."
              : "Don't have an account?"}{" "}
            <Link
              href={
                isRegister
                  ? "/sign-in-register/sign-in/"
                  : "/sign-in-register/register/"
              }
              className="ml-1 font-medium text-brand transition-colors hover:text-accent"
            >
              {isRegister ? "Here" : "Sign Up"}
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
