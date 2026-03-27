interface SectionLabelProps {
  name: string;
  index: number;
  total?: number;
}

export function SectionLabel({ name, index, total = 8 }: SectionLabelProps) {
  return (
    <div className="flex justify-between text-xs uppercase tracking-widest text-muted mb-12 pb-4 border-b border-border font-mono">
      <span>{name}</span>
      <span>[{index}/{total}]</span>
    </div>
  );
}
