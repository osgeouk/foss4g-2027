<script lang="ts">
  import Link from '$components/Link.svelte';

  let { data } = $props();

  let frame: HTMLIFrameElement | undefined = $state();

  // Mail view shows the email header and footer, which are hidden on the website by default.
  let mailView = $state(false);

  // Apply the view and size the iframe to its content so the page scrolls as one document.
  function update() {
    const doc = frame?.contentDocument;
    if (!frame || !doc) return;
    doc.documentElement.classList.toggle('mail-view', mailView);
    frame.style.height = '0px';
    frame.style.height = `${doc.documentElement.scrollHeight}px`;
  }

  $effect(() => {
    void mailView;
    update();
  });
</script>

<svelte:head>
  <title>{data.edition.title}</title>
  <meta name="description" content={data.edition.summary} />
</svelte:head>

<svelte:window onresize={update} />

<main class="px-2 py-2 sm:py-4">
  <div class="mb-6 flex flex-wrap items-center justify-end gap-4 text-sm">
    <label class="flex cursor-pointer items-center gap-2">
      <input type="checkbox" class="toggle toggle-sm" bind:checked={mailView} />
      Mail view
    </label>
    <Link href="/newsletter">All editions</Link>
    <a href="https://mailchi.mp/foss4g/mailing-list" target="_blank">Join our Mailing List</a>
  </div>

  <iframe
    bind:this={frame}
    title={data.edition.title}
    srcdoc={data.html}
    onload={update}
    class="block h-[2400px] w-full border-0"
  ></iframe>
</main>
