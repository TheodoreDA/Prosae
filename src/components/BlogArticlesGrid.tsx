import Image from 'next/image';

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
    title: "En entretien biographique...",
    description: "Une expérience immersive digne des plus grands films",
    image: "/blog/entretien_bibliographie.webp",
    link: "https://prosae.odoo.com/blog/biographie-4/en-entretien-biographique-3",
  },
  {
    id: 2,
    title: "Un festival tout en odeur !",
    description: "La fête de la bouse de Triaize",
    image: "/blog/festival_bouse.webp",
    link: "https://prosae.odoo.com/blog/anecdotes-2/un-festival-tout-en-odeur-1",
  },
];
