import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Role = "admin" | "atendente" | "clinico";

const ROLES: { value: Role; label: string }[] = [
  { value: "admin", label: "Admin" },
  { value: "atendente", label: "Atendente" },
  { value: "clinico", label: "Clínico" },
];

const ROLE_HINTS: Record<Role, string> = {
  admin: "Acesso completo: gestão da clínica, equipe e configurações.",
  atendente: "Agendamento, recepção e admissão básica de pacientes.",
  clinico: "Atendimento clínico, prontuários e prescrições.",
};

export default function CreateProfile() {
  const [papel, setPapel] = useState<Role>("atendente");

  return (
    <main className="min-h-dvh bg-background text-foreground flex items-center justify-center p-6 selection:bg-primary selection:text-primary-foreground">
      <div className="w-full max-w-[560px] bg-card rounded-sm shadow-sm border border-border p-10 lg:p-14">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div
              className="size-6 bg-primary rounded-sm shrink-0"
              aria-hidden
            />
            <span className="text-sm font-semibold tracking-wider text-primary">
              ClinicaOS
            </span>
          </div>
          <span className="px-2 py-1 bg-background text-[10px] font-semibold text-muted-foreground uppercase tracking-widest rounded-sm">
            Cadastro
          </span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight mb-2 text-balance">
          Criar Perfil
        </h1>
        <p className="text-sm text-muted-foreground max-w-[44ch] mb-12">
          Registre um novo membro da equipe. O nível de acesso determina a
          visibilidade no sistema.
        </p>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="nome"
              className="text-xs font-semibold uppercase tracking-widest"
            >
              Nome completo
            </label>
            <Input
              id="nome"
              type="text"
              required
              placeholder="ex: Sarah Jenkins"
              className="h-11 px-4 text-sm border border-border rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-steel bg-card"
            />
          </div>

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
              placeholder="nome@nexus.clinic"
              className="h-11 px-4 text-sm border border-border rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-steel bg-card"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="senha"
              className="text-xs font-semibold uppercase tracking-widest"
            >
              Senha
            </label>
            <Input
              id="senha"
              type="password"
              required
              placeholder="Senha"
              className="h-11 px-4 text-sm border border-border rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-steel bg-card"
            />
          </div>

          <fieldset className="flex flex-col gap-2 mt-2">
            <legend className="text-xs font-semibold uppercase tracking-widest mb-3">
              Papel de Autorização
            </legend>
            <div className="grid grid-cols-3 gap-px bg-border rounded-sm p-px">
              {ROLES.map((r) => {
                const checked = papel === r.value;
                return (
                  <label
                    key={r.value}
                    className="relative cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="papel"
                      value={r.value}
                      checked={checked}
                      onChange={() => setPapel(r.value)}
                      className="sr-only"
                    />
                    <div
                      className={`h-10 flex items-center justify-center rounded-sm transition-all ${
                        checked
                          ? "bg-card shadow-[inset_0_1px_0_hsl(0_0%_100%)]"
                          : "bg-background"
                      }`}
                    >
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                          checked
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {r.label}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>
            <p className="text-[11px] text-steel mt-1">{ROLE_HINTS[papel]}</p>
          </fieldset>

          <Button
            type="submit"
            className="h-11 mt-4 w-full bg-foreground text-background text-sm font-semibold uppercase tracking-wider rounded-sm hover:opacity-90 active:scale-[0.99] transition-all"
          >
            Criar Perfil
          </Button>
        </form>
      </div>
    </main>
  );
}