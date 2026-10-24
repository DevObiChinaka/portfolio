export default function StatusBar() {
  return (
    <div
      className="mono fixed inset-x-0 bottom-0 z-40 flex h-7 items-center justify-between border-t rule px-4 text-xs mute"
      style={{ background: "var(--panel)" }}
    >
      <span>main</span>
      <span className="hidden sm:inline">TypeScript  UTF-8</span>
      <span>Chinaka Obinna</span>
    </div>
  );
}