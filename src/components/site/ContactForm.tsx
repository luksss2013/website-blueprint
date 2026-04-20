import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Loader2, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome muito curto").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  company: z.string().trim().max(120).optional(),
  role: z.string().trim().max(120).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais (mín. 10 caracteres)")
    .max(1500, "Mensagem longa demais"),
});

type ContactValues = z.infer<typeof contactSchema>;

const WHATSAPP_NUMBER = "5511999999999"; // placeholder — substitua pelo real

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactValues) => {
    const lines = [
      `Olá, sou ${values.name}.`,
      values.role || values.company ? `${values.role ?? ""}${values.role && values.company ? " · " : ""}${values.company ?? ""}` : "",
      `E-mail: ${values.email}`,
      "",
      values.message,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nome" error={errors.name?.message}>
          <input
            {...register("name")}
            type="text"
            autoComplete="name"
            className="input-field"
            placeholder="Seu nome"
          />
        </Field>
        <Field label="E-mail" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            className="input-field"
            placeholder="voce@empresa.com"
          />
        </Field>
        <Field label="Empresa" error={errors.company?.message}>
          <input {...register("company")} type="text" className="input-field" placeholder="Empresa" />
        </Field>
        <Field label="Cargo" error={errors.role?.message}>
          <input {...register("role")} type="text" className="input-field" placeholder="Ex: Head de Pessoas" />
        </Field>
      </div>

      <Field label="Como podemos ajudar?" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          className="input-field resize-none"
          placeholder="Conte brevemente o desafio do seu time ou liderança."
        />
      </Field>

      <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          Ao enviar, abriremos uma conversa direta no WhatsApp com sua mensagem.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-forest-deep disabled:opacity-60"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          Enviar mensagem
        </button>
      </div>

      {submitted && (
        <p className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-primary">
          Conversa aberta no WhatsApp. Em breve respondemos.
        </p>
      )}

      <style>{`
        .input-field {
          width: 100%;
          background: var(--color-card);
          border: 1px solid var(--color-border);
          color: var(--color-foreground);
          border-radius: 0.5rem;
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
          transition: all .2s ease;
        }
        .input-field::placeholder { color: var(--color-muted-foreground); opacity: .7; }
        .input-field:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 15%, transparent);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground/70">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
