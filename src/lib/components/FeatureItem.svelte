<script>
  import { _ } from 'svelte-i18n';
  export let title;
  export let description;
  export let inFree;
  export let inPro;
  export let isCommingSoon = false;
  export let isFirst = false;
  export let isLast = false;
</script>

<div class="feature-row" class:first={isFirst} class:last={isLast}>
  <div class="feature-info {isCommingSoon ? 'coming-soon' : ''}">
    <h3 data-coming-soon={$_('features.coming_soon')}>{title}</h3>
    <p>{description}</p>
  </div>
  <div class="feature-check free-check">
    {#if inFree}
      <div class="check-circle">
        <img src="/images/ic_check_green_24px.svg" alt="Included">
      </div>
    {:else}
      <div class="cross-circle">
        <img src="/images/ic_close_red_24px.svg" alt="Not included">
      </div>
    {/if}
  </div>
  <div class="feature-check pro-check">
    {#if inPro}
      <div class="check-circle">
        <img src="/images/ic_check_green_24px.svg" alt="Included">
      </div>
    {:else}
      <div class="cross-circle">
        <img src="/images/ic_close_red_24px.svg" alt="Not included">
      </div>
    {/if}
  </div>
</div>

<style>
  .feature-row {
    display: grid;
    grid-template-columns: 1fr 120px 140px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  .feature-row.first {
    border-radius: 12px 0 0 0;
  }

  .feature-row.last {
    border-radius: 0 0 12px 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 840px) {
    .feature-row {
      grid-template-columns: 1fr 70px 80px;
    }

    .check-circle img, .cross-circle img {
      width: 16px;
      height: 16px;
    }
  }

  .feature-info {
    text-align: left;
    padding: 16px 24px;
  }

  .feature-info h3 {
    font-size: 1.1rem;
    margin: 0 0 4px;
  }

  .feature-info p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .feature-check {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pro-check {
    background: var(--color-cc-dark-bg);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    height: 100%;
  }

  .feature-row.last .pro-check {
    border-radius: 0 0 12px 0;
  }

  .free-check {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  .check-circle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cross-circle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .check-circle img, .cross-circle img {
    width: 32px;
    height: 32px;
  }

  .coming-soon h3::after {
    content: attr(data-coming-soon);
    display: inline-block;
    background: var(--color-primary);
    color: var(--color-cc-dark-bg);
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 12px;
    margin-left: 8px;
    font-weight: 500;
    vertical-align: middle;
  }
</style>
