<script>
  import { onMount } from 'svelte';
  import { waitLocale } from 'svelte-i18n';
  import { browser } from '$app/environment';

  let ready = false;

  onMount(async () => {
    if (browser) {
      await waitLocale();
      ready = true;
    }
  });
</script>

{#if ready}
  <slot />
{/if} 