<script lang="ts">
  import type {ResponsiveImage, YouTubeVideo} from "@/lib/datocms/types.ts";
  import {NakedImage} from '@datocms/svelte';
  import {type ResponsiveImageType} from '@datocms/svelte';

  interface Props {
    title: string;
    picture: {
      responsiveImage: ResponsiveImageType;
    }
    videoYoutube: YouTubeVideo
  }

  let {title, picture, videoYoutube}: Props = $props();
</script>

<article class="hero">
  {#if title}
    <h1>{title}</h1>
  {/if}

  {#if picture}
    <NakedImage pictureClass="hero-picture"
                data={picture.responsiveImage}
    />
  {/if}

  {#if videoYoutube}
    <iframe width="100%" height="100%"
            src={`https://www.youtube.com/embed/${videoYoutube.providerUid}`}
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  {/if}
</article>

<style lang="scss">
  .hero {
    position: relative;
    width: 100%;
    height: 80vh;
    height: 80dvh;
    padding: 1rem;
    text-align: center;

    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 90%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 6vw;
      line-height: 1.2;
      font-weight: var(--font-weight-bold);
      --heading-font-weight: var(--font-weight-bold);
      text-wrap: balance;
    }
  }

  .hero-picture {
    display: flex;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
</style>

