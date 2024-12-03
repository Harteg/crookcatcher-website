<script>
  import FeatureItem from './FeatureItem.svelte';
  import { _ } from 'svelte-i18n';

  const features = [
    {
      key: 'takePicture',
      inFree: true,
      inPro: true,
      isFirst: true
    },
    {
      key: 'location',
      inFree: true,
      inPro: true
    },
    {
      key: 'email',
      inFree: true,
      inPro: true
    },
    {
      key: 'video',
      inFree: false,
      inPro: true,
      isCommingSoon: true
    },
    {
      key: 'drive',
      inFree: false,
      inPro: true,
      isCommingSoon: true
    },
    {
      key: 'backCamera',
      inFree: false,
      inPro: true
    },
    {
      key: 'alertMessage',
      inFree: false,
      inPro: true
    },
    {
      key: 'soundAlarm',
      inFree: false,
      inPro: true
    },
    {
      key: 'fakeHomeScreen',
      inFree: false,
      inPro: true
    },
    {
      key: 'appLock',
      inFree: false,
      inPro: true
    },
    {
      key: 'disguiseApp',
      inFree: false,
      inPro: true
    },
    {
      key: 'breakIn',
      inFree: false,
      inPro: true
    },
    {
      key: 'emailSubject',
      inFree: false,
      inPro: true
    },
    {
      key: 'hideNotifications',
      inFree: false,
      inPro: true
    },
    {
      key: 'noAds',
      inFree: false,
      inPro: true,
      isLast: true
    }
  ];
</script>

<div class="features-frame">
  <div class="feature-headers">
    <div class="feature-col"></div>
    <div class="feature-col free-col">
      <p>{$_('features.comparison.free')}</p>
    </div>
    <div class="feature-col pro-col">
      <div class="pro-indicator"></div>
      <p>{$_('features.comparison.pro')}</p>
    </div>
  </div>
  {#each features as feature, i}
    <FeatureItem 
      title={$_(`features.comparison.items.${feature.key}.title`)}
      description={$_(`features.comparison.items.${feature.key}.description`)}
      {...feature} 
      isLast={i === features.length - 1} 
    />
  {/each}
</div>

<style>
  .features-frame {
    max-width: 800px;
    margin: 48px auto 0;
    overflow: hidden;
  }

  .feature-headers {
    display: grid;
    grid-template-columns: 1fr 120px 140px;
    text-align: left;
    margin-bottom: 0;
  }

  .feature-col {
    position: relative;
    text-align: center; 
    font-family: "NexaBold";
  }

  .free-col {
    margin-top: 24px;
    padding: 16px 0;
    border-radius: 12px 0 0 0;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .pro-col {
    background: var(--color-cc-dark-bg);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px 12px 0 0;
    padding: 40px 0 0 0;
  }

  .pro-indicator {
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    height: 8px;
    border-radius: 100px;
    background: var(--color-primary);
  }

  .feature-col p {
    margin: 0;
    letter-spacing: 0.5px;
  }

  @media (max-width: 840px) {
    .feature-headers {
        grid-template-columns: 1fr 70px 80px;
    }
  }
</style>
