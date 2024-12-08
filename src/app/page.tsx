import Head from "next/head";
import { InstagramVideoForm } from "@/components/features/instagram/components/form";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Instagram Video Downloader - Easily Download Instagram Reels</title>
        <meta
          name="description"
          content="Use our Instagram video downloader tool to quickly and easily download Instagram reels. Save your favorite content directly to your device."
        />
        <meta
          name="keywords"
          content="Instagram reel download, Instagram video downloader, Instagram reel saver, download Instagram reels, Instagram video saving"
        />
        <meta
          property="og:title"
          content="Instagram Video Downloader - Easily Download Instagram Reels"
        />
        <meta
          property="og:description"
          content="Quickly and easily download Instagram reels and videos with our tool."
        />
        <meta
          property="og:image"
          content="/path/to/your/preview-image.jpg"
        />
        <meta
          property="og:url"
          content="https://snapsave.tech"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Head>
      <div className="flex flex-col py-8">
        <h1 className="text-balance mb-8 text-center text-4xl font-extrabold">
          Instagram Video Downloader
        </h1>
        <section className="flex flex-col items-center justify-center gap-4">
          <InstagramVideoForm />
        </section>
      </div>
    </>
  );
}
