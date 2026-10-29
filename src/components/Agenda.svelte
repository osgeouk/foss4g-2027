<script lang="ts">
  import Button from './Button.svelte';
  import Link from './Link.svelte';

  interface AgendaItem {
    days: string;
    time: string;
    heading: string;
    description: string;
    link?: string;
  }

  const agendaItems: AgendaItem[] = [
    {
      days: 'Mon 23, Tue 24 Aug',
      time: '09:00 - 17:00',
      heading: 'Workshops',
      description:
        'Workshops will be held at UoB Humanities.'
    },
    {
      days: 'Wed 25 to Fri 27 Aug',
      time: '09:00 - 17:00',
      heading: 'Conference',
      description:
        'Conference sessions will be held at UoB Wills Memorial Building and the Chemistry Building.'
    },
    {
      days: 'Mon 23 Aug',
      time: '19:00',
      heading: 'Informal Social',
      description: 'White Lion Pub, Clifton.'
    },
    {
      days: 'Tue 24 Aug',
      time: '16:00 - 18:00',
      heading: 'B2B Event',
      description: 'Main conference venue.'
    },
    {
      days: 'Tue 24 Aug',
      time: '19:00 - late',
      heading: 'GeoChicas Take Bristol',
      description: 'Venue to be confirmed.'
    },
    {
      days: 'Wed 25 Aug',
      time: '19:00 - late',
      heading: 'Ice Breaker Social',
      description: 'Zero Degrees Micro Brewery.'
    },
    {
      days: 'Thu 26 Aug',
      time: '19:00 - 01:00',
      heading: 'Gala Dinner',
      description: 'Ashton Gate Stadium.',
      link: '/program/gala-dinner'
    },
    // {
    //   days: 'Sat 22, Sun 23 Nov',
    //   time: '09:00 - 17:00',
    //   heading: 'Community Events',
    //   description:
    //     'Registration at the conference is not a prerequisite for participation in the Community Day (including Code Sprints). Participation in the Community Day is free of charge and we welcome all folks interested.'
    // }
  ];
</script>

{#snippet agendaItemGrid(item: AgendaItem)}
  <div class="grid py-4 pr-0 pl-2 sm:grid-cols-12 sm:py-8 sm:pr-8 sm:pl-8">
    <div class="flex justify-between sm:col-span-5 sm:flex-col sm:justify-start sm:text-2xl">
      <div>{item.days}</div>
      <div class="text-secondary">{item.time}</div>
    </div>
    <div class="sm:col-span-7">
      <div class="mb-4 text-2xl">
        {#if item.link}
          <Link href={item.link} class="underline hover:no-underline">{item.heading}</Link>
        {:else}
          {item.heading}
        {/if}
      </div>
      <p class="pr-0 text-sm">
        {item.description}
      </p>
    </div>
  </div>
{/snippet}

<div class="bg-primary/5 grid rounded-4xl p-4 sm:px-8 sm:py-12">
  {#each agendaItems as agendaItem}
    {@render agendaItemGrid(agendaItem)}
  {/each}
  
  <!-- <div class="flex justify-end pt-4 sm:pt-8 pr-0">
    <Button href="/program/outline" class="w-[240px]">View Detailed Program</Button>
  </div> -->
</div>
