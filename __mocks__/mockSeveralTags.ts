// New file: __mocks__/mockSeveralTags.ts
import { Article, Article_NoRelations } from '@/interfaces/Article';
import { Tag } from '@/interfaces/Tag';

export const mockSeveralTags: Tag[] = [
  {
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
            name: "react.webp",
            alternativeText: "Image de couverture catégorie React",
            caption: "React",
            width: 6000,
            height: 4000,
            formats: {
              thumbnail: {
                name: "thumbnail_react.webp",
                hash: "thumbnail_react_8111d1aa1b",
                ext: ".webp",
                mime: "image/webp",
                path: '',
                width: 234,
                height: 156,
                size: 3.86,
                url: "/uploads/thumbnail_react_8111d1aa1b.webp"
              },
              small: {
                name: "small_react.webp",
                hash: "small_react_8111d1aa1b",
                ext: ".webp",
                mime: "image/webp",
                path: '',
                width: 300,
                height: 200,
                size: 5.21,
                url: "/uploads/small_react_8111d1aa1b.webp"
              },
              medium: {
                name: "medium_react.webp",
                hash: "medium_react_8111d1aa1b",
                ext: ".webp",
                mime: "image/webp",
                path: '',
                width: 750,
                height: 500,
                size: 15.35,
                url: "/uploads/medium_react_8111d1aa1b.webp"
              },
              large: {
                name: "large_react.webp",
                hash: "large_react_8111d1aa1b",
                ext: ".webp",
                mime: "image/webp",
                path: '',
                width: 1000,
                height: 667,
                size: 21.93,
                url: "/uploads/large_react_8111d1aa1b.webp"
              }
            },
            hash: "react_8111d1aa1b",
            ext: ".webp",
            mime: "image/webp",
            size: 3633.27,
            url: "/uploads/react_8111d1aa1b.webp",
            previewUrl: '',
            provider: "local",
            createdAt: "2024-09-11T08:17:11.574Z",
            updatedAt: "2024-09-20T09:36:16.491Z"
          }
        }
      },
      articles: {
        data: [{} as Article, {} as Article, {} as Article]
      },
      localizations: {
        data: []
      }
    }
  },
  {
    id: 2,
    attributes: {
      name: "TypeScript",
      locale: "fr",
      createdAt: "2024-09-12T10:20:30.123Z",
      updatedAt: "2024-09-28T11:22:33.456Z",
      description: "Un sur-ensemble typé de JavaScript qui se compile en JavaScript pur",
      cover: {
        data: {
          id: 4,
          attributes: {
            name: "typescript.webp",
            alternativeText: "Image de couverture catégorie TypeScript",
            caption: "TypeScript",
            width: 6000,
            height: 4000,
            formats: {
              thumbnail: {
                name: "thumbnail_typescript.webp",
                hash: "thumbnail_typescript_9222e2bb2c",
                ext: ".webp",
                mime: "image/webp",
                path: '',
                width: 234,
                height: 156,
                size: 4.12,
                url: "/uploads/thumbnail_typescript_9222e2bb2c.webp"
              },
              small: {
                name: "small_typescript.webp",
                hash: "small_typescript_9222e2bb2c",
                ext: ".webp",
                mime: "image/webp",
                path: '',
                width: 300,
                height: 200,
                size: 5.67,
                url: "/uploads/small_typescript_9222e2bb2c.webp"
              },
              medium: {
                name: "medium_typescript.webp",
                hash: "medium_typescript_9222e2bb2c",
                ext: ".webp",
                mime: "image/webp",
                path: '',
                width: 750,
                height: 500,
                size: 16.89,
                url: "/uploads/medium_typescript_9222e2bb2c.webp"
              },
              large: {
                name: "large_typescript.webp",
                hash: "large_typescript_9222e2bb2c",
                ext: ".webp",
                mime: "image/webp",
                path: '',
                width: 1000,
                height: 667,
                size: 24.56,
                url: "/uploads/large_typescript_9222e2bb2c.webp"
              }
            },
            hash: "typescript_9222e2bb2c",
            ext: ".webp",
            mime: "image/webp",
            size: 3987.65,
            url: "/uploads/typescript_9222e2bb2c.webp",
            previewUrl: '',
            provider: "local",
            createdAt: "2024-09-12T10:20:15.789Z",
            updatedAt: "2024-09-21T12:34:56.789Z"
          }
        }
      },
      articles: {
        data: [{} as Article, {} as Article]
      },
      localizations: {
        data: []
      }
    }
  },
  {
    id: 3,
    attributes: {
      name: "Next.js",
      locale: "fr",
      createdAt: "2024-09-13T14:25:36.789Z",
      updatedAt: "2024-09-29T15:27:39.012Z",
      description: "Un framework React pour la production",
      cover: {
        data: {
          id: 5,
          attributes: {
            name: "nextjs.webp",
            alternativeText: "Image de couverture catégorie Next.js",
            caption: "Next.js",
            width: 6000,
            height: 4000,
            formats: {
              thumbnail: {
                name: "thumbnail_nextjs.webp",
                hash: "thumbnail_nextjs_3333f3cc3d",
                ext: ".webp",
                mime: "image/webp",
                path: '',
                width: 234,
                height: 156,
                size: 3.98,
                url: "/uploads/thumbnail_nextjs_3333f3cc3d.webp"
              },
              small: {
                name: "small_nextjs.webp",
                hash: "small_nextjs_3333f3cc3d",
                ext: ".webp",
                mime: "image/webp",
                path: '',
                width: 300,
                height: 200,
                size: 5.43,
                url: "/uploads/small_nextjs_3333f3cc3d.webp"
              },
              medium: {
                name: "medium_nextjs.webp",
                hash: "medium_nextjs_3333f3cc3d",
                ext: ".webp",
                mime: "image/webp",
                path: '',
                width: 750,
                height: 500,
                size: 15.87,
                url: "/uploads/medium_nextjs_3333f3cc3d.webp"
              },
              large: {
                name: "large_nextjs.webp",
                hash: "large_nextjs_3333f3cc3d",
                ext: ".webp",
                mime: "image/webp",
                path: '',
                width: 1000,
                height: 667,
                size: 22.76,
                url: "/uploads/large_nextjs_3333f3cc3d.webp"
              }
            },
            hash: "nextjs_3333f3cc3d",
            ext: ".webp",
            mime: "image/webp",
            size: 3845.92,
            url: "/uploads/nextjs_3333f3cc3d.webp",
            previewUrl: '',
            provider: "local",
            createdAt: "2024-09-13T14:25:30.123Z",
            updatedAt: "2024-09-22T16:38:59.012Z"
          }
        }
      },
      articles: {
        data: [{} as Article, {} as Article, {} as Article, {} as Article]
      },
      localizations: {
        data: []
      }
    }
  }
];