import { Article_Preview } from "@/interfaces/article";
import { Media } from "@/interfaces/Media";

export const mockArticle: Article_Preview = {
	id: 2,
	attributes: {
		title: "Article test",
		slug: "article-test",
	
		publishedAt: "2024-09-10T16:16:35.724Z",
		description: "This is a test article summary",
		coverImage: {
			data: {
				id: 5,
				attributes: {
					name: "coverARticleTest.webp",
					alternativeText: "CoverImage",
					caption: "La description de l'image",
					width: 6000,
					height: 4000,
					formats: {
						thumbnail: {
							name: "thumbnail_coverARticleTest.webp",
							hash: "thumbnail_cover_A_Rticle_Test_44ad5169b1",
							ext: ".webp",
							mime: "image/webp",
							path: '',
							width: 234,
							height: 156,
							size: 4.9,
							url: "https://example.com/image.jpg"
						},
						small: {
							name: "small_coverARticleTest.webp",
							hash: "small_cover_A_Rticle_Test_44ad5169b1",
							ext: ".webp",
							mime: "image/webp",
							path: '',
							width: 500,
							height: 333,
							size: 13.1,
							url: "https://example.com/image1.jpg"
						},
						large: {
							name: "large_coverARticleTest.webp",
							hash: "large_cover_A_Rticle_Test_44ad5169b1",
							ext: ".webp",
							mime: "image/webp",
							path: '',
							width: 1000,
							height: 667,
							size: 33.6,
							url: "https://example.com/image2.jpg"
						},
						medium: {
							name: "medium_coverARticleTest.webp",
							hash: "medium_cover_A_Rticle_Test_44ad5169b1",
							ext: ".webp",
							mime: "image/webp",
							path: '',
							width: 750,
							height: 500,
							size: 22.59,
							url: "https://example.com/image3.jpg"
						}
					},
					hash: "cover_A_Rticle_Test_44ad5169b1",
					ext: ".webp",
					mime: "image/webp",
					size: 1282.64,
					url: "https://example.com/imageOriginal.jpg",
					previewUrl: '',
					provider: "local",
					createdAt: "2024-09-18T18:00:47.473Z",
					updatedAt: "2024-09-25T17:35:19.841Z"
				}
			}
		},
		tags: {
			data: [
				{
					id: 1,
					attributes: {
						cover: { data: {} as Media },
						name: "Algorithmie",
						createdAt: "2024-09-11T08:17:24.849Z",
						updatedAt: "2024-09-27T10:18:29.586Z",
						locale: "fr",
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis id augue non feugiat. Quisque rhoncus diam ornare ex feugiat, ac commodo odio aliquam. Vestibulum condimentum auctor tortor, ut laoreet lorem finibus et. Maecenas vel pulvinar eros, in porttitor metus. Donec tempor quis diam vitae interdum. Quisque mollis finibus purus, ac malesuada lectus auctor ut. In nisi tellus, ultricies non aliquam nec, sodales id turpis."
					}
				},
				{
					id: 3,
					attributes: {
						cover: { data: {} as Media },
						name: "Javascript",
						createdAt: "2024-09-19T13:58:51.645Z",
						updatedAt: "2024-09-27T10:18:36.955Z",
						locale: "fr",
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis id augue non feugiat. Quisque rhoncus diam ornare ex feugiat, ac commodo odio aliquam. Vestibulum condimentum auctor tortor, ut laoreet lorem finibus et. Maecenas vel pulvinar eros, in porttitor metus. Donec tempor quis diam vitae interdum. Quisque mollis finibus purus, ac malesuada lectus auctor ut. In nisi tellus, ultricies non aliquam nec, sodales id turpis."
					}
				},
				{
					id: 4,
					attributes: {
						cover: { data: {} as Media },
						name: "React",
						createdAt: "2024-09-20T10:30:18.922Z",
						updatedAt: "2024-09-27T10:18:40.751Z",
						locale: "fr",
						description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis id augue non feugiat. Quisque rhoncus diam ornare ex feugiat, ac commodo odio aliquam. Vestibulum condimentum auctor tortor, ut laoreet lorem finibus et. Maecenas vel pulvinar eros, in porttitor metus. Donec tempor quis diam vitae interdum. Quisque mollis finibus purus, ac malesuada lectus auctor ut. In nisi tellus, ultricies non aliquam nec, sodales id turpis."
					}
				}
			]
		},
	
	}}