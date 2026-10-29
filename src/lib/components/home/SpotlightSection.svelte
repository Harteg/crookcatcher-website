<script lang="ts">
  export let content: {
    title: string;
    subtitle: string;
    log: { heading: string; meta: string };
    events: { time: string; label: string; detail: string }[];
    pro: string;
  };

  // In the order of content.events: what happens, second by second, after a wrong PIN.
  const EVENTS = ['pin', 'photo', 'video', 'location', 'email'] as const;
</script>

<section class="spotlight" aria-labelledby="spotlight-title">
  <div class="container grid">
    <header class="copy">
      <h2 id="spotlight-title">{content.title}</h2>
      <p>{content.subtitle}</p>
    </header>

    <!-- An incident log of one unlock attempt -->
    <div class="log">
      <div class="log-head">
        <span class="live" aria-hidden="true"></span>
        <strong>{content.log.heading}</strong>
        <span class="log-meta">{content.log.meta}</span>
      </div>

      <ol class="events">
        {#each content.events as event, i}
          {@const kind = EVENTS[i]}
          <li class="event {kind}">
            <time class="time">{event.time}</time>
            <span class="dot" aria-hidden="true"></span>
            <div class="body">
              <p class="label">
                {event.label}
                {#if kind === 'video'}<span class="pro-tag">{content.pro}</span>{/if}
              </p>
              <p class="detail">{event.detail}</p>
            </div>
            <span class="visual" aria-hidden="true">
              {#if kind === 'pin'}
                <span class="pin-dots"><i></i><i></i><i></i><i></i></span>
              {:else if kind === 'photo'}
                <span class="thumb face"></span>
              {:else if kind === 'video'}
                <span class="thumb face wide"><span class="material-icons">play_arrow</span></span>
              {:else if kind === 'location'}
                <span class="thumb map"></span>
              {:else}
                <span class="thumb mail"><span class="material-icons">mark_email_read</span></span>
              {/if}
            </span>
          </li>
        {/each}
      </ol>
    </div>
  </div>
</section>

<style>
  .spotlight {
    padding: 96px 0;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    align-items: center;
  }

  h2 {
    margin: 0;
    font-size: clamp(2.4rem, 4.6vw, 3.75rem);
    line-height: 1.02;
    letter-spacing: -0.035em;
    color: var(--color-primary);
    text-wrap: balance;
  }

  .copy p {
    max-width: 24em;
    margin: 20px 0 0;
    font-size: 1.15rem;
    line-height: 1.55;
    color: var(--color-secondary);
  }

  .log {
    padding: 8px 0 12px;
    border: 1px solid var(--color-card-border);
    border-radius: 24px;
    background: #fff;
    box-shadow: 0 40px 80px -40px rgba(16, 32, 24, 0.35);
  }

  .log-head {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 24px 16px;
    border-bottom: 1px solid var(--color-card-border);
    font-size: 0.9375rem;
  }

  .log-head strong {
    font-family: inherit;
    color: var(--color-body);
  }

  .log-meta {
    margin-left: auto;
    color: var(--color-secondary);
  }

  .live {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #e5534b;
    box-shadow: 0 0 0 4px rgba(229, 83, 75, 0.15);
  }

  .events {
    margin: 0;
    padding: 8px 0 0;
    list-style: none;
  }

  /* time | dot on a vertical line | text | small picture */
  .event {
    position: relative;
    display: grid;
    grid-template-columns: 64px 14px minmax(0, 1fr) auto;
    align-items: center;
    gap: 14px;
    margin: 0;
    padding: 12px 24px;
  }

  .event:not(:last-child)::after {
    content: '';
    position: absolute;
    left: calc(24px + 64px + 14px + 6px);
    top: 50%;
    height: 100%;
    width: 2px;
    background: var(--color-card-border);
  }

  .time {
    font-family: ui-monospace, 'SF Mono', Menlo, monospace;
    font-size: 0.8125rem;
    color: var(--color-secondary);
  }

  .dot {
    position: relative;
    z-index: 1;
    width: 14px;
    height: 14px;
    border: 3px solid #fff;
    border-radius: 50%;
    background: #13804a;
    box-shadow: 0 0 0 1px var(--color-card-border);
  }

  .pin .dot {
    background: #e5534b;
  }

  .label {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;
    color: var(--color-body);
  }

  .detail {
    margin: 2px 0 0;
    font-size: 0.875rem;
    line-height: 1.35;
    color: var(--color-secondary);
  }

  .pro-tag {
    padding: 1px 7px;
    border-radius: 6px;
    background: #0e1310;
    color: #5ee08f;
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.03em;
  }

  .visual {
    display: flex;
    justify-content: flex-end;
  }

  .pin-dots {
    display: flex;
    gap: 6px;
    padding: 12px;
    border-radius: 12px;
    background: #141b18;
  }

  .pin-dots i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ff8a80;
  }

  .thumb {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    overflow: hidden;
    border-radius: 12px;
  }

  .thumb .material-icons {
    position: relative;
    font-size: 24px;
  }

  /* Crops of the intruder photo from the alert image, softly blurred (no real faces). */
  .face::before {
    content: '';
    position: absolute;
    inset: -6px;
    background-image: url('/images/hero-alert-480.webp');
    background-size: 140px auto;
    background-position: -2px -6px;
    filter: blur(3px);
  }

  .face.wide::before {
    background-position: -70px -10px;
  }

  .face .material-icons {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #5ee08f;
    color: #0e1310;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
  }

  /* Map crop from the bottom of the alert image, centred on its location pin */
  .map {
    background: #1b1f1d url('/images/hero-alert-480.webp') no-repeat;
    background-size: 220px auto;
    background-position: -82px -164px;
  }

  .mail {
    background: #dff7e8;
    color: #13804a;
  }

  @media (max-width: 480px) {
    .event {
      grid-template-columns: 56px 14px minmax(0, 1fr) auto;
      gap: 10px;
      padding: 12px 16px;
    }

    .event:not(:last-child)::after {
      left: calc(16px + 56px + 10px + 6px);
    }

    .log-head {
      padding: 14px 16px 16px;
    }

    .thumb {
      width: 44px;
      height: 44px;
    }

    .pin-dots {
      padding: 10px 8px;
      gap: 4px;
    }
  }

  @media (min-width: 900px) {
    .spotlight {
      padding: 144px 0;
    }

    .grid {
      grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
      gap: 80px;
    }
  }
</style>
