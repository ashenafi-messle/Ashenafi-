export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 px-4 py-8 text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center md:flex-row md:items-center md:justify-between">
        <p className="text-sm">© {new Date().getFullYear()} Ashenafi Messle. Built for modern web experiences.</p>
        <p className="text-sm text-slate-500">Designed to scale with projects, skills, and AI showcases.</p>
      </div>
    </footer>
  );
}
