export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLinks: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

const siteConfig: SiteConfig = {
  siteName: "Example",
  description:
    "A minimal and lovely travel blog which shares experiences and cities around the world.",
  currentlyAt: "Budapest",
  socialLinks: {
    twitter: "https://twitter.com/iamardaalk",
    github: "https://github.com/ardaalkan",
    linkedin: "https://www.linkedin.com/in/arda-alkan-b72454167/"
  },
};

export default siteConfig;
