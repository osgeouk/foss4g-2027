<script lang="ts">
  import Heading from '$components/Heading.svelte';
  import Link from '$components/Link.svelte';

  let { data } = $props();

  let frame: HTMLIFrameElement | undefined = $state();

  // Size the iframe to its content so the page scrolls as one document.
  function resize() {
    const doc = frame?.contentDocument;
    if (frame && doc) frame.style.height = `${doc.documentElement.scrollHeight}px`;
  }
</script>

<svelte:head>
  <title>{data.edition.title}</title>
  <meta name="description" content={data.edition.summary} />
</svelte:head>

<svelte:window onresize={resize} />

<main class="px-2 py-2 sm:py-4">
  <Heading size="md">{data.edition.title}</Heading>

  <div class="mb-6 flex flex-wrap items-center justify-between gap-4 text-sm">
    <span>{data.edition.date}</span>
    <span class="flex gap-4">
      <Link href="/newsletter">All editions</Link>
      <a href="https://mailchi.mp/foss4g/mailing-list" target="_blank">Join our Mailing List</a>
    </span>
  </div>

  <iframe
    bind:this={frame}
    title={data.edition.title}
    srcdoc={data.html}
    onload={resize}
    class="block h-[2400px] w-full border-0"
  ></iframe>
</main>
