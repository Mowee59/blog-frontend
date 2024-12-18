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


import React from "react";

const ArticleCardFallback: React.FC<{ error: Error }> = ({ error }) => {
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <div className="border border-red-300 rounded p-4 bg-red-50 text-red-800">
      <h3 className="text-lg font-semibold mb-2">Erreur lors du chargement de l'article</h3>
      {isDevelopment && <p className="text-sm">{error.message}</p>}
    </div>
  );
};

export default ArticleCardFallback;