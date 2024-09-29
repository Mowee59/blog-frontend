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