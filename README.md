# Instagram Videos Downloader

Simple Website/API for downloading instagram videos made with Next.js that actually works with no problem.

> [!NOTE]  
> The website preview has been shut down due to exceeding the free usage limit on Vercel with more than **2,000,000** visits for the past week. Since I don't make any money from this website, I had to close it.

![image](https://github.com/user-attachments/assets/c06458d7-ceb9-4793-8952-2a68027b8601)


## Description

A website that lets you download Instagram videos easily and quickly. You can paste the URL of any public Instagram post and get the video file in MP4 format. there is also an API that you can use to integrate this functionality into your own applications. The API is simple, and it returns JSON responses with the video URL and other metadata.

_Note: Instagram stories aren't supported._

You can preview and try the website live in Vercel here : [instagram-videos.vercel.app](https://instagram-videos.vercel.app)

## Website Preview

Easy and User friendly UI (Interactions feedback and error messages).

![Desktop preview](https://github.com/riad-azz/readme-storage/blob/main/instagram-videos-downloader/desktop-preview.gif?raw=true)

Responsive on mobile and small devices.

![Mobile preview](https://github.com/riad-azz/readme-storage/blob/main/instagram-videos-downloader/mobile-preview.gif?raw=true)

## Getting Started

**1.** Cloning the repository:

```bash
git clone https://github.com/riad-azz/instagram-video-downloader.git
```

**2.** Installing dependencies:

```bash
cd instagram-video-downloader
```

```bash
npm install
```

**3.** Starting the server:

```bash
# Development
npm run dev

# Build
npm run build

# Start
npm run start
```

### Endpoint: /api/video?postUrl={POST_URL}

Parameters :

- `postUrl` : Instagram Post or Reel link **(required)**.

#### GET Request example

```bash
curl -i "http://localhost:3000/api/video?postUrl=https://www.instagram.com/p/CGh4a0iASGS"
```

#### API Response

```json
{
  "status":"success",
  "data":
    {
      "filename":"ig-downloader-1712666263.mp4",
      "width":"640",
      "height":"640",
      "videoUrl":"https://scontent.cdninstagram.com/o1/v/t16/f1/m84/E84E5DFC48EA8...etc"
    }
}
```

## Rate Limiter - Upstash

In order to reduce the load on the API and ensure optimal performance, I have implemented rate limiting using Upstash. This integration allows me to restrict the number of requests made to the API within a specified time frame, preventing excessive traffic and potential service disruptions.

To enable this feature follow these steps:

1. Create an account on [upstash.com](https://upstash.com/).
2. Create a new Redis database.
3. Click on the newly created database.
4. Scroll down to REST API, click on `.env` and copy the two variables provided.
5. Create a new `.env.local` file in the root directory.
6. Paste what you copied inside and add `USE_UPSTASH` and set it to `true`.

Here is what your `.env.local` should look like:

```env
# ...other variables
USE_UPSTASH="true"
UPSTASH_REDIS_REST_URL="YOUR-UPSTASH-URL"
UPSTASH_REDIS_REST_TOKEN="YOUR-UPSTASH-TOKEN"
```

All ratelimit configs can be found in `src/features/ratelimit/constants.ts`.

If you would like to change the identifier (default is IP) you can change it in `src/middleware.ts`.

## License

This project is licensed under the [MIT] License - see the LICENSE.md file for details
