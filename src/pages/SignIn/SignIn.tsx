import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignIn() {
  return (
    <main className="min-h-dvh bg-background text-foreground flex items-center justify-center p-6 selection:bg-primary selection:text-primary-foreground">
      <div className="w-full max-w-[520px] bg-card rounded-sm shadow-sm border border-border p-10 lg:p-14 flex flex-col justify-between min-h-[640px]">
        <div>
          <div className="flex items-center gap-3 mb-12">
            <div
              className="size-6 bg-primary rounded-sm shrink-0"
              aria-hidden
            />
            <span className="text-sm font-semibold tracking-wider text-primary">
              ClinicaOS
            </span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight mb-2 text-balance">
            Acesso ao Sistema
          </h1>
          <p className="text-sm text-muted-foreground max-w-[40ch]">
            Insira suas credenciais institucionais para acessar.
          </p>
        </div>

        <form className="flex flex-col gap-6 mt-12 mb-16">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-widest"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              required
              placeholder="nome@clinicaos.clinic"
              className="h-11 px-4 text-sm bg-background border-none rounded-sm focus:bg-card focus:ring-1 focus:ring-inset focus:ring-primary outline-none transition-colors placeholder:text-steel"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label
                htmlFor="senha"
                className="text-xs font-semibold uppercase tracking-widest"
              >
                Senha
              </label>
              <a
                href="#"
                className="text-xs font-medium text-primary hover:text-primary-hover"
              >
                Recuperar acesso
              </a>
            </div>
            <Input
              id="senha"
              type="password"
              required
              placeholder="••••••••••••"
              className="h-11 px-4 text-sm bg-background border-none rounded-sm focus:bg-card focus:ring-1 focus:ring-inset focus:ring-primary outline-none transition-colors placeholder:text-steel"
            />
          </div>

          <Button
            type="submit"
            className="h-11 mt-2 w-full bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-primary-hover active:scale-[0.99] transition-all"
          >
            Entrar
          </Button>
        </form>
      </div>
    </main>
  );
}
