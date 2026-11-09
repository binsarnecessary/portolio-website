const tones = {
  enamel: "text-enamel-muted",
  ink: "text-ink-muted",
} as const;

// NBSP setelah titik: separator tak pernah menutup baris
export default function Sep({ tone = "enamel" }: { tone?: keyof typeof tones }) {
  return (
    <>
      {" "}
      <span aria-hidden="true" className={`${tones[tone]} align-[0.1em] text-[0.55em]`}>
        {"●"}
      </span>
      {" "}
    </>
  );
}
