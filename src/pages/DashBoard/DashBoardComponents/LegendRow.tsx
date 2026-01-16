const LegendRow = ({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-2">
    <span className={`h-2 w-2 rounded-full bg-${color}-400`} />
    <span className="text-slate-600">{label}</span>
    <span className=" text-slate-400">{value}</span>
  </div>
);

export default LegendRow;
