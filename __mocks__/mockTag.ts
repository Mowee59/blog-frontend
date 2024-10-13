import { Article, Article_NoRelations } from '@/interfaces/Article';
import { Tag } from '@/interfaces/Tag';

export const mockTag: Tag = {
  id: 1,
  attributes: {
    name: "React",
    locale: "fr",
    createdAt: "2024-09-11T08:17:24.849Z",
    updatedAt: "2024-09-27T10:18:29.586Z",
    description: "Une librairie Javascript pour construire des interfaces utilisateur",
    cover: {
      data: {
        id: 3,
        attributes: {
          name: "algo.webp",
          alternativeText: "Image de couverture catégorie Algorithmie",
          caption: "Alogrithmie",
          width: 6000,
          height: 4000,
          formats: {
            thumbnail: {
              name: "thumbnail_algo.webp",
              hash: "thumbnail_algo_8111d1aa1b",
              ext: ".webp",
              mime: "image/webp",
              path: '',
              width: 234,
              height: 156,
              size: 3.86,
              url: "/uploads/thumbnail_algo_8111d1aa1b.webp"
            },
            small: {
              name: "small_algo.webp",
              hash: "small_algo_8111d1aa1b",
              ext: ".webp",
              mime: "image/webp",
              path: '',
              width: 300,
              height: 200,
              size: 5.21,
              url: "/uploads/small_algo_8111d1aa1b.webp"
            },
            medium: {
              name: "medium_algo.webp",
              hash: "medium_algo_8111d1aa1b",
              ext: ".webp",
              mime: "image/webp",
              path: '',
              width: 750,
              height: 500,
              size: 15.35,
              url: "/uploads/medium_algo_8111d1aa1b.webp"
            },
            large: {
              name: "large_algo.webp",
              hash: "large_algo_8111d1aa1b",
              ext: ".webp",
              mime: "image/webp",
              path: '',
              width: 1000,
              height: 667,
              size: 21.93,
              url: "/uploads/large_algo_8111d1aa1b.webp"
            }
          },
          hash: "algo_8111d1aa1b",
          ext: ".webp",
          mime: "image/webp",
          size: 3633.27,
          url: "/uploads/algo_8111d1aa1b.webp",
          previewUrl: '',
          provider: "local",
          createdAt: "2024-09-11T08:17:11.574Z",
          updatedAt: "2024-09-20T09:36:16.491Z"
        }
      }
    },
    articles: {
      data: [  {} as Article, {} as Article , {} as Article]
    },
    localizations: {
      data: []
    }
  }
}

