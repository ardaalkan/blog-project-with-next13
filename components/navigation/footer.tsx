import React from "react";
import PaddingContainer from "../layout/padding-container";
import siteConfig from "@/config/site";
import Link from "next/link";
import SocialLink from "../elements/social-links";

const Footer = () => {
  return (
    <div className="py-8 border-t mt-10">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-neutral-700">
            {siteConfig.description}
          </p>
        </div>
        {/* Social Section */}
        <div className="flex justify-between mt-6 gap-4">
          <div>
            <div className="font-medium text-lg">#exploretheworld</div>
            <div className="flex items-center gap-4 text-neutral-400 mt-1">
              <SocialLink
                platform="twitter"
                link={siteConfig.socialLinks.twitter}
              ></SocialLink>
              <SocialLink
                platform="github"
                link={siteConfig.socialLinks.github}
              ></SocialLink>
              <SocialLink
                platform="linkedin"
                link={siteConfig.socialLinks.linkedin}
              ></SocialLink>
            </div>
          </div>
          <div>
            <div className="text-sm text-neutral-400">Currently At</div>
            <div className="bg-white shadow-md rounded-md py-2 px-3 flex items-center gap-2">
              <div className="bg-emerald-400 rounded-full w-2 h-1" />
              {siteConfig.currentlyAt}
            </div>
          </div>
        </div>
        <div className="border-t py-3 flex gap-4 justify-between mt-2">
          <div className="text-sm text-neutral-400">
            All rights are reversed | Copyright {new Date().getFullYear()}
          </div>
          <div className="text-sm">
            Made with love.
            <Link
              className="underline underline-offset-4"
              href="https://nextjs.org"
            ></Link>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
