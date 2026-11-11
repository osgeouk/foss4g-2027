<script lang="ts">
  import Foss4g2027Logo from '$images/svg/foss4g-2027-bw-map.svg?raw';
  import Foss4g2026Logo from '$images/foss4g-2026.png?enhanced';
  import foss4g27closing from '$images/foss4g27-closing.jpg?enhanced';
  import TicketOptions from '$components/TicketOptions.svelte';
  import Countdown from '$components/Countdown.svelte';
  import Keynotes from '$components/Keynotes.svelte';
  import Rangitoto from '$images/svg/rangitoto.svg';
  import Heading from '$components/Heading.svelte';
  import Agenda from '$components/Agenda.svelte';
  import Link from '$components/Link.svelte';
  import Sponsors, { LEVELS as SPONSOR_LEVELS } from '$lib/sponsors';
  import Team from '$lib/organisers';
  import Button from '$components/Button.svelte';
  import Card from '$components/Card.svelte';
  import Video from '$components/Video.svelte';
  import Editions from '$lib/newsletter';
  import Header from '$components/Header.svelte';
</script>

<svelte:head>
  <title>FOSS4G 2027</title>
</svelte:head>

{#if Editions.length > 0}
  <div class="bg-primary/90 mb-6 flex items-center gap-4 rounded-xl px-4 py-3 text-white">
    <span class="hidden whitespace-nowrap sm:inline">{Editions[0].date}</span>
    <span class="hidden whitespace-nowrap sm:inline">|</span>
    <Link
      href="/newsletter/{Editions[0].slug}"
      class="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
    >
      {Editions[0].tagline}
    </Link>
  </div>
{/if}

<!-- Hero -->
<main class="m:space-y-12 mmb-8 space-y-12 sm:space-y-16">
  <div class="hero flex">
    <div
      class="hero-content bg-secondary relative w-full flex-col rounded-4xl px-6 py-8 sm:min-h-[500px] sm:px-10 sm:py-12"
    >
      <div
        style="opacity:0.6; bottom: 1em;"
        class="[&_path]:!fill-primary absolute right-0 -z-10 h-72 w-72 sm:h-96 sm:w-96 sm:pr-8 sm:pb-8 [&_svg]:max-h-72 [&_svg]:max-w-72 [&_svg]:sm:max-h-96 [&_svg]:sm:max-w-96"
      >
        {@html Foss4g2027Logo}
      </div>
      <div
        class="flex w-full flex-shrink flex-col justify-between font-serif text-sm sm:flex-row sm:space-y-4"
      >
        <div class="uppercase">August 23-29, 2027</div>
        <div>Bristol, United Kingdom</div>
      </div>
      <div class="w-full flex-grow space-y-4">
        <div class="font-serif text-4xl leading-tight text-white sm:text-7xl">
          FOSS4G<br />Bristol 2027
        </div>
        <div class="text-md font-serif text-white sm:w-[85%]">
          FOSS4G stands for Free and Open Source Software for Geospatial, a conference series hosted
          in partnership with OSGeo. FOSS4G brings open source geospatial users, software
          developers, decision makers and researchers together from around the world.
        </div>
        <!-- <div class="flex flex-col gap-4 pt-4 sm:w-[240px] sm:flex-row">
          <Button href="/program/schedule">View schedule</Button>
          <Button href="/attend/app">Conference App</Button>
        </div> -->
      </div>
    </div>
  </div>

  <!-- Sponsor Grid -->
  <!-- <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
    {#each Object.values(Sponsors)
      .filter((sponsor) => sponsor.level < 5)
      .sort((a, b) => a.level - b.level) as sponsor}
      {#await sponsor.logo() then module}
        <div class="flex w-1/3 items-center justify-center px-4 sm:w-1/5 sm:px-8">
          <div class="max-w-full">
            <a href={sponsor.link} aria-label="sponsor link" target="_blank">
              <enhanced:img
                src={module.default}
                alt={sponsor.name}
                class="max-h-16 w-auto sm:max-h-20"
              />
            </a>
          </div>
        </div>
      {/await}
    {/each}
  </div> -->

  <!-- Cards -->

  <div class="grid grid-cols-1 space-y-4 pb-4 sm:grid-cols-2 sm:space-y-0 sm:space-x-4">
    <!--
    <div class="card bg-secondary rounded-4xl">
      <div class="card-body space-y-2 p-8">
        <div class="text-3xl">Speakers</div>
        <div class="flex space-x-2">
          <div class="items-center justify-center">
            <div class="btn btn-circle m-2">
              <span class="icon-[lucide--arrow-up-right] block h-5 w-5"></span>
            </div>
          </div>
          <div>
            Hear from geospatial leaders, researchers, and developers who are defining the future of
            open source geospatial.
          </div>
        </div>
        <div class="flex flex-grow flex-row flex-wrap items-end justify-between">
          <div class="avatar-group -space-x-5">
            {#each Object.values(Team).slice(0, 4) as person}
              {#await person.photo() then module}
                <div class="avatar border-0">
                  <div class="aspect-square w-12 rounded-full">
                    <enhanced:img src={module.default} alt={person.name} />
                  </div>
                </div>
              {/await}
            {/each}
            <div class="avatar avatar-placeholder border-0">
              <div class="bg-neutral text-neutral-content w-12">
                <span>+99</span>
              </div>
            </div>
          </div>
          <div>
            <Link href="/speakers" class="btn bg-secondary border-primary rounded-full"
              >and more <span class="icon-[lucide--arrow-up-right] block"></span></Link
            >
          </div>
        </div>
      </div>
    </div>
-->

    <!-- <Card
      title="Workshops are now on Sale"
      color="secondary"
      button={{ href: 'https://ti.to/osgeo-oceania/foss4g-2025', text: 'Register for Workshops' }}
    >
      <div>
        <p>
          At $50 NZD per workshop this is the most cost effective and valuable training you will ever
          undertake!
        </p>

        <br />
        <p>Register for up to 4 from a selection of 44 workshops...</p>

        <br />
        <ul class="list-disc pl-4">
          <li>Monday Morning: choose 1 from 11 available.</li>
          <li>Monday Afternoon: choose 1 from 11 available.</li>
          <li>Tuesday Morning: choose 1 from 11 available.</li>
          <li>Tuesday Afternoon: choose 1 from 11 available.</li>
        </ul>
      </div>
    </Card> -->

    <Card title="Thank you Hiroshima!" color="secondary">
      <div>
        <p>
          FOSS4G 2026 in Hiroshima has concluded. We want to thank all of the sponsors, speakers, volunteers, delegates, and the amazing local organising committee for making this event a success.
        </p>

        <br />
        <ul class="list-disc pl-4">
          <li><strong>828</strong> people attended from <strong>65</strong> countries.</li>
          <li><strong>28</strong> Travel Grant recipients from <strong>16</strong> countries.</li>
          <li><strong>53</strong> Workshops.</li>
          <li><strong>348</strong> Presentations.</li>
        </ul>
      </div>
    </Card>

    <div class="flex flex-col-reverse sm:flex-col sm:gap-y-4">
      <Card
        title="Visit Bristol"
        color="primary"
        button={{ href: '/about/visit-bristol', text: 'Discover Bristol' }}
      >
        <div>
          If ever there was a city with a story to tell, it’s Bristol.
Enveloped in the hills of South West England, Bristol has developed an inimitable identity and fiercely independent spirit, crafted by its passionate locals.
        </div>
        <!-- <div class="flex flex-col gap-x-4 sm:w-[180px] sm:flex-row">
          <Button href="/map">Map</Button>
          <Button href="/attend/nz-adventures">City Guide</Button>
        </div> -->
      </Card>
      <Card title="Our Conference Venue" color="secondary">
        <div>
          FOSS4G 2027 will be hosted by the University of Bristol.
        </div>
        <div class="flex flex-col gap-4 sm:w-[180px] sm:flex-row">
          <Button href="https://www.google.com/maps/dir/?api=1&destination=51.4561909%2C-2.6071939" target="_blank"
            >Get directions</Button
          >
          <Button
            href="https://use.mazemap.com/#v=1&config=uobexternalmap&campusid=843&zlevel=1&center=-2.603076,51.457665&zoom=15.9" target="_blank"
            >Campus map</Button
          >
        </div>
      </Card>
    </div>
  </div>

  <div>
    <enhanced:img
      src={foss4g27closing}
      alt="FOSS4G 2026 Closing Group Photo"
      class="mb-8 w-full rounded-4xl"
    />
  </div>

  <!-- <Heading>Keynote Speakers</Heading>

  <Keynotes /> -->

  <Heading>Agenda</Heading>

  <Agenda />
  <!-- 
  <div class="max-w-full py-8 sm:py-12">
    <img src={Rangitoto} alt="Rangitoto" />
  </div> -->

  <!-- <Countdown label="Conference starts in:" time="2025-11-17T09:00:00+12:00" /> -->

  <!-- <Heading class="mt-16 sm:mt-28">Register Now</Heading>

  <Heading size="sm" class="mt-8 sm:mt-14">Ticket Options</Heading>

  <TicketOptions /> -->

  {#snippet sponsorLevel(
    title: string,
    level: (typeof SPONSOR_LEVELS)[keyof typeof SPONSOR_LEVELS]
  )}
    {@const sponsorsAtLevel = Object.values(Sponsors).filter((sponsor) => sponsor.level == level)}

    {#if sponsorsAtLevel.length > 0}
      <div class="flex flex-col gap-2 sm:gap-6">
        <h3 class="text-center !font-serif !text-lg uppercase">
          {title.charAt(0).toUpperCase()}{title.replace(/_/g, ' ').slice(1).toLowerCase()} Sponsors
        </h3>

        <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {#each sponsorsAtLevel as sponsorAtLevel}
            {#await sponsorAtLevel.logo() then module}
              <div class="flex items-center justify-center px-6 sm:max-w-60 sm:px-10">
                <a href={sponsorAtLevel.link} aria-label="sponsor link" target="_blank">
                  <enhanced:img
                    src={module.default}
                    alt={sponsorAtLevel.name}
                    class="max-h-16 w-auto max-w-40 sm:max-h-20 sm:max-w-60"
                  /></a
                >
              </div>
            {/await}
          {/each}
        </div>
      </div>
    {/if}
  {/snippet}

  <div class="flex flex-col gap-8 sm:gap-16">
    {#each Object.entries(SPONSOR_LEVELS) as [title, level]}
      {@render sponsorLevel(title, level)}
    {/each}
  </div>

  <div class="mb-12">
    <Video src="https://www.youtube-nocookie.com/embed/khM7tjui86Q" />
  </div>
</main>

<style>
  .harmonized-logo {
    filter: grayscale(100%) sepia(100%) hue-rotate(180deg);
  }
  @media (max-width: 640px) {
    .reverse-grid {
      direction: rtl;
    }
    .reverse-grid > * {
      direction: ltr;
    }
  }
  @media (min-width: 641px) {
    .sm\:reverse-grid {
      direction: rtl;
    }
    .sm\:reverse-grid > * {
      direction: ltr;
    }
  }
</style>
