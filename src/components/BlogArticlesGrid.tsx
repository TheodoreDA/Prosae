import Image from 'next/image';

import type { JSX } from "react";

export default function BlogArticlesGrid(): JSX.Element {

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {articles.map((article) => (
        <div
          key={article.id}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105"
        >
          <a href={article.link}>
          <div className='w-full h-48 relative'>
              <Image
                src={article.image}
                alt={article.title}
                fill
                style={{objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-semibold mb-1">{article.title}</h3>
              <p className="text-xl text-gray-700">{article.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
    );
}

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Inktober",
    description: "",
    image: "/blog/Inktober.webp",
    link: "https://prosae.odoo.com/blog/actualite-5/inktober-4",
  },
  {
    id: 2,
    title: "Retour de lecture : La Passe-Miroir",
    description: "Un livre dont on ne se lasse pas",
    image: "/blog/lecture_Passe-Miroir.webp",
    link: "https://prosae.odoo.com/blog/retour-de-lecture-3/retour-de-lecture-la-passe-miroir-2",
  },
];
