<script lang="ts">
  export let content: {
    title: string;
    text: string;
    alt: string;
    points: { title: string; text: string }[];
  };

  // In the order of content.points: two beside the phone on the left, two on the right.
  const ICONS = ['label', 'place', 'photo_library', 'cloud_upload'];

  $: left = content.points.slice(0, 2);
  $: right = content.points.slice(2, 4);
</script>

<section class="timeline-band" aria-labelledby="timeline-title">
  <div class="container">
    <header class="band-header">
      <h2 id="timeline-title">{content.title}</h2>
      <p>{content.text}</p>
    </header>

    <div class="stage">
      <ul class="points left">
        {#each left as point, i}
          <li>
            <span class="chip" aria-hidden="true"><span class="material-icons">{ICONS[i]}</span></span>
            <h3>{point.title}</h3>
            <p>{point.text}</p>
          </li>
        {/each}
      </ul>

      <!-- The app's timeline in a phone that rises out of the bottom of the band -->
      <div class="phone">
        <div class="screen">
          <img src="/images/app-gallery.png" alt={content.alt} width="456" height="1024" loading="lazy" />
          <!-- Soften the pixelated thumbnail rows into a blur, so it reads like a real screen -->
          <span class="soften" style="top: 18.8%"></span>
          <span class="soften" style="top: 36.8%"></span>
          <span class="soften" style="top: 54.8%"></span>
          <span class="soften" style="top: 72.8%"></span>
        </div>
      </div>

      <ul class="points right">
        {#each right as point, i}
          <li>
            <span class="chip" aria-hidden="true"><span class="material-icons">{ICONS[i + 2]}</span></span>
            <h3>{point.title}</h3>
            <p>{point.text}</p>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<style>
  .timeline-band {
    overflow: hidden;
    padding-top: 80px;
    /* A lighter glow behind the phone gives the flat mint some depth */
    background:
      radial-gradient(ellipse 50% 60% at 50% 100%, rgba(255, 255, 255, 0.35), transparent 70%),
      linear-gradient(#5ee08f, #56d685);
    color: #0e1310;
  }

  .band-header {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
  }

  h2 {
    margin: 0;
    font-size: clamp(2.4rem, 6.4vw, 5.25rem);
    line-height: 1.02;
    letter-spacing: -0.035em;
    color: #0e1310;
    text-wrap: balance;
  }

  .band-header p {
    max-width: 30em;
    margin: 20px auto 0;
    font-size: 1.15rem;
    line-height: 1.55;
    color: rgba(14, 19, 16, 0.75);
  }

  .stage {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px 20px;
    margin-top: 48px;
  }

  .points {
    display: contents;
  }

  .points li {
    margin: 0;
  }

  .chip {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    margin-bottom: 14px;
    border-radius: 12px;
    background: #0e1310;
    color: #5ee08f;
  }

  .chip .material-icons {
    font-size: 22px;
  }

  .points h3 {
    margin: 0 0 6px;
    font-size: 1.15rem;
    line-height: 1.25;
    color: #0e1310;
  }

  .points p {
    margin: 0;
    font-size: 0.9875rem;
    line-height: 1.5;
    color: rgba(14, 19, 16, 0.75);
  }

  .phone {
    grid-column: 1 / -1;
    grid-row: 3;
    justify-self: center;
    width: 260px;
    height: 360px;
    margin-top: 16px;
    overflow: hidden;
    border: 9px solid #0e1310;
    border-bottom: none;
    border-radius: 40px 40px 0 0;
    background: #0e1310;
    box-shadow: 0 -24px 60px -24px rgba(14, 19, 16, 0.45);
  }

  .screen {
    position: relative;
  }

  .screen img {
    display: block;
    width: 100%;
    height: auto;
  }

  .soften {
    position: absolute;
    left: 2.6%;
    width: 94.8%;
    height: 12%;
    border-radius: 4px;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }

  @media (min-width: 900px) {
    .timeline-band {
      padding-top: 112px;
    }

    .stage {
      grid-template-columns: minmax(0, 1fr) 340px minmax(0, 1fr);
      align-items: center;
      gap: 56px;
      margin-top: 72px;
    }

    .points {
      display: flex;
      flex-direction: column;
      gap: 48px;
      margin: 0;
      padding: 0 0 80px;
      list-style: none;
    }

    .points.left {
      align-items: flex-end;
      text-align: right;
    }

    .points.left .chip {
      margin-left: auto;
    }

    .points li {
      max-width: 17em;
    }

    .phone {
      grid-column: 2;
      grid-row: 1;
      width: 340px;
      height: 500px;
      margin-top: 0;
      align-self: end;
    }
  }
</style>
