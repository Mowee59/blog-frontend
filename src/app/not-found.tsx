import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-9xl font-extrabold text-gray-800 dark:text-gray-200 tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-8">
        Oops something went wrong
      </h2>
      <Link href="/" className="mt-6">
        <span className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
          Go Home
        </span>
      </Link>
    </div>
  )
}