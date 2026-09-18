export default function Header() {
    const today = new Date().toLocaleDateString();
      return (
            <header className="bg-blue-700 text-white p-4 text-center">
                <h1 className="text-2xl font-bold mb-2">Springfield Ward</h1>
                <p>{today}</p>
            </header>
              );
}