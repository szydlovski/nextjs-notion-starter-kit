import { siteConfig } from "./lib/site-config";

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: "1d12e4bcda438098a23dd127552cc56b",

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "Dominika Adamowicz - Creative Portfolio",
  domain: "domada.online",
  author: "Dominika Adamowicz",

  // open graph metadata (optional)
  description:
    "Lodz Film School and Wajda School graduate in screenwriting with experience as Marketing and Event Creative/Copywriter as well as Screenwriter for film and TV.",

  // social usernames (optional)
  // twitter: "",
  // github: "",
  // linkedin: "",
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    "/portfolio": "1d12e4bcda43811a8037f2c12c38ecba",
    "/contact": "1d12e4bcda43802db30de2e4c6745a54",
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: "default",
  navigationStyle: "custom",
  navigationLinks: [
    {
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ],
});
