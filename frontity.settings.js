const settings = {
  name: "new-frontity-attempt",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "my-first-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://test.frontity.org",
          // CUSTOM POST TYPES SUPPORT
          "postTypes": [
            {
              // the CPT (Custom Post Type) name defined by the WP function
              // register_post_type()
              type: "destinations",
              // usually the same at 'type' unless the args array passed to 
              // register_post_type() is different  
              endpoint: "destinations",
              // this is needed if you want to list all the posts of that post type, 
              // note that the args array passed to register_post_type() must include 
              // 'has_archive' => true for this to work
              archive: "/destinations"
            }
          ]
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
