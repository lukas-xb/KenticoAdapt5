define({
  // usePreviewEndpoint: true,
  // Course name as specified in Kentico Cloud project
  // ===== Courses for developers =====
  // courseId: 'dev04-12', // MVC Developer - Builders
  // courseId: 'dev05-12', // MVC Developer - Identity

  // ===== Courses for business users =====
  // courseId: "dev-12-mvc-essentials", // MVC Developer - Essentials
  // courseId: 'business01-12', // Content management
  // courseId: 'business02-12', // Online marketing
  courseId: "business03-12", // Personalization
  // TODO: NEW CM
  // language: 'default', // Language of course
  //TODO: Old CM
  language: "en", // Language of course

  serverUrl: "https://kentico-adapt-live.azurewebsites.net",
  // serverUrl: 'https://richardsadaptmvc.azurewebsites.net',
  // serverUrl: "http://localhost:51355",
  coursesPath: "courses",

  files: {
    articles: "articles.json",
    blocks: "blocks.json",
    components: "components.json",
    contentObjects: "contentObjects.json",
    course: "course.json",
  },
});
