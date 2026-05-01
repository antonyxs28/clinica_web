import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <main className="min-h-dvh bg-background text-foreground flex items-center justify-center p-6">
            <div className="max-w-xl w-full text-center">
                <div className="flex items-center justify-center gap-3 mb-10">
                    <div className="size-6 bg-primary rounded-sm" aria-hidden />
                    <span className="text-sm font-semibold tracking-wider text-primary">
                        ClinicaOS
                    </span>
                </div>
                <h1 className="text-4xl font-semibold tracking-tight mb-4 text-balance">
                    Sistema de gestão clínica
                </h1>
                <p className="text-sm text-muted-foreground mb-10 max-w-md mx-auto">
                    Bem-vindo ao ClinicaOS <br />
                    Simplifique o dia a dia da sua clínica — agendamentos, prontuários e muito mais em um só lugar. Faça login para começar.
                </p>
                <div className="flex gap-px bg-border rounded-sm p-px max-w-sm mx-auto">
                    <Link
                        to="/signIn"
                        className="flex-1 h-11 flex items-center justify-center bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-primary-hover transition-colors"
                    >
                        <Button>
                            Entrar
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    )
}