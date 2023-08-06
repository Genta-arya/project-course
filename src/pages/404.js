
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <main className={`flex min-h-screen max-w-2xl m-auto flex-col items-center p-4 pt-24 ${inter.className}`}>
      <div className="flex flex-col items-center gap-2 w-full mb-6">
        <h3 className="text-2xl font-bold">Halaman Tidak Ditemukan</h3>
        <p className="text-lg">Maaf, halaman yang Anda cari tidak ditemukan.</p>
      </div>
    </main>
  );
}
