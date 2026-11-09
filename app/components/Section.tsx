import type { ReactNode } from "react";

// judul di kolom kiri desktop: semua seksi berbagi satu garis tepi
export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-h`}
      className="border-rule border-t py-16 sm:py-20 lg:grid lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-x-16"
    >
      <h2
        id={`${id}-h`}
        className="text-2xl font-semibold tracking-tight sm:text-3xl lg:sticky lg:top-24 lg:self-start lg:text-2xl"
      >
        {title}
      </h2>
      <div className="mt-8 lg:mt-0">{children}</div>
    </section>
  );
}
