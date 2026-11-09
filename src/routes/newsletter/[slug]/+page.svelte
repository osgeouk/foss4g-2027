<script lang="ts">
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
  <div class="mb-6 flex flex-wrap justify-end gap-4 text-sm">
    <Link href="/newsletter">All editions</Link>
    <a href="https://mailchi.mp/foss4g/mailing-list" target="_blank">Join our Mailing List</a>
  </div>

  <iframe
    bind:this={frame}
    title={data.edition.title}
    srcdoc={data.html}
    onload={resize}
    class="block h-[2400px] w-full border-0"
  ></iframe>
</main>
