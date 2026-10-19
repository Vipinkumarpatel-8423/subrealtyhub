
import AuthForm from "@/components/auth/AuthForm";
import AuthAboutPanel from "@/components/auth/AuthAboutPanel";

export default function RegisterPage() {
  return (
    <main className="relative min-h-[calc(100vh-40px)] overflow-hidden border-t-[3px] border-brand bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rotate-45 border border-border"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-8 h-44 w-44 rotate-45 border border-brand/20"
      />

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-16 xl:gap-20">
        <AuthForm mode="register" />

        <AuthAboutPanel />
      </div>
    </main>
  );
}
