export function Footer() {
  return (
    <footer className="w-full bg-white border-t">
      <div className="max-w-5xl mx-auto px-6 py-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Juan Pablo Jimenez Vargas
        </p>
      </div>
    </footer>
  );
}
