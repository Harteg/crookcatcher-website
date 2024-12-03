<script>
  import { _, locale } from 'svelte-i18n';
  export let utmSource = 'website'; // default value if not provided
</script>

<a href={`https://play.google.com/store/apps/details?id=com.harteg.crookcatcher&referrer=utm_source=${utmSource}&utm_medium=button`}
   class="play-store-link"
   target="_blank"
   rel="noopener noreferrer">
  <img alt={$_('playstore.imgAlt')}
       src={`https://play.google.com/intl/${$locale}/badges/images/generic/${$locale}_badge_web_generic.png`}
       class="play-badge" />
</a>

<style>
  .play-store-link {
    display: inline-block;
    transition: transform 0.3s ease;
    margin-top: 32px;
  }

  .play-store-link:hover {
    transform: translateY(-4px);
  }

  .play-badge {
    width: auto;
    height: 80px;
    transition: transform 0.3s ease;
  }

  .play-badge:hover {
    transform: scale(1.08);
  }

  @media (max-width: 840px) {
    .play-badge {
      height: 80px;
      position: relative;
    }
  }
</style> 