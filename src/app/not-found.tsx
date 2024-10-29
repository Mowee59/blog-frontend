/*
 * This file is part of the Blog Frontend project.
 *
 * Copyright (C) 2024 Aniss.dev
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f3f4f6] dark:bg-[#171717]">
      <h1 className="text-9xl font-extrabold tracking-widest text-gray-800 dark:text-gray-200">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-[#FF6A3D] px-2 text-sm">
        Page Introuvable
      </div>
      <h2 className="mt-8 text-3xl font-semibold text-gray-700 dark:text-gray-300">
        Oops, quelque chose s'est mal passé
      </h2>
      <Link href="/" className="mt-6">
        <span className="rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600">
          Retourner à l'accueil
        </span>
      </Link>
    </div>
  );
}
