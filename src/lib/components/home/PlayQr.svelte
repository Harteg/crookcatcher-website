<script lang="ts">
  /** Play Store QR code (inline SVG, built at prerender in +page.server.ts). */
  export let svg: string;
  export let label: string;
</script>

<!-- QR codes only make sense on a computer; phones use the Play badge next to it. -->
<div class="play-qr">
  <span class="qr-code" aria-hidden="true">{@html svg}</span>
  <p class="qr-label">{label}</p>
</div>

<style>
  .play-qr {
    display: none;
    align-items: center;
    gap: 14px;
    padding-left: 28px;
    border-left: 1px solid var(--color-card-border);
    text-align: left;
  }

  .qr-code {
    display: block;
    flex-shrink: 0;
    /* The Play URL with its referrer is a 45×45 code; keep each module at least 2px. */
    width: 108px;
    height: 108px;
    padding: 6px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 0 0 1px var(--color-card-border);
  }

  .qr-code :global(svg) {
    display: block;
    width: 100%;
    height: 100%;
  }

  .qr-label {
    margin: 0;
    max-width: 11em;
    font-size: 0.875rem;
    line-height: 1.45;
    color: var(--color-secondary);
  }

  @media (min-width: 900px) {
    .play-qr {
      display: flex;
    }
  }
</style>
