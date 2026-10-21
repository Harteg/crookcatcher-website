<script>
  import { page } from '$app/stores';
  import { localizePath } from '$lib/i18n';

  const currentYear = new Date().getFullYear();

  $: t = $page.data.ui.footer;
  $: locale = $page.data.locale;
</script>

<footer>
  <div class="footer-content">
    <div class="footer-left">
      <span class="cc-font" style="font-size: 20px;">CrookCatcher</span>
    </div>
    <div class="footer-right">
      <ul class="footer-links">
        <li>
          <a 
            href={localizePath('/help', locale)}
            title={t.help}
            class:active={$page.url.pathname === localizePath('/help', locale)}
          >
            {t.help}
          </a>
        </li>
        <li>
          <a 
            href={localizePath('/terms', locale)}
            title={t.terms}
            class:active={$page.url.pathname === localizePath('/terms', locale)}
          >
            {t.terms}
          </a>
        </li>
        <li>
          <a 
            href={localizePath('/privacy', locale)}
            title={t.privacy}
            class:active={$page.url.pathname === localizePath('/privacy', locale)}
          >
            {t.privacy}
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="copyright">
    Copyright © {currentYear} Jakob Harteg
  </div>
</footer>

<style>
  footer {
    display: block;
    padding: 0 24px 24px;
  }

  .footer-content {
    max-width: var(--content-width);
    width: 100%;
    margin: 0 auto;
    padding: 28px 32px;
    border-radius: var(--border-radius);
    color: #fff;
    background: var(--color-card);
    border: 1px solid var(--color-card-border);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copyright{
    text-align: center;
    width: 100%;
    padding: 16px 0;
    opacity: 0.5;
    color: #fff;
    font-size: 0.7rem;
  }

  .footer-links {
    display: flex;
    gap: 16px;
    font-size: 0.8rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: #fff;
  }

  a.active {
    color: #fff;
    font-weight: 500;
  }

  @media (max-width: 768px) {

    footer {
      background: var(--color-cc-dark-bg);
      padding: 0;
    }

    .footer-content {
      border-radius: 0;
      border-bottom: var(--border);
      flex-direction: column;
      gap: 16px;
      text-align: start;
      align-items: start;
    }

    .footer-links {
      flex-direction: column;
      gap: 8px;
    }
  }
</style>