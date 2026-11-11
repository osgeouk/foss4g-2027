<script>
  import { page } from '$app/stores';

  // Add any paths where the button should not be showns
  const ingnoredPaths = ['/map'];

  let show = true;
  $: show = !ingnoredPaths.some((path) => $page.url.pathname.startsWith(path));

  function scrollToTop() {
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<button
  id="scroll-to-top"
  class="scroll-to-top bg-success text-primary {show ? '' : 'hidden'}"
  on:click={scrollToTop}
  aria-label="Scroll to top"
>
  <span class="icon-[lucide--arrow-up]"></span>
</button>

<style>
  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    border: none;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    font-size: 1.5rem;
    z-index: 5;
    opacity: 0.8;
    transition: opacity 0.2s;
  }
  .scroll-to-top:hover {
    opacity: 1;
  }
  .hidden {
    display: none;
  }
</style>
