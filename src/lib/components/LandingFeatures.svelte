<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
</svelte:head>

<script>
  const features = [
    {
      key: 'takePicture',
      title: 'Take pictures',
      description: null,
      label: 'FREE',
      icon: 'photo_camera'
    },
    {
      key: 'location',
      title: 'Obtain location',
      description: null,
      label: 'FREE',
      icon: 'location_on'
    },
    {
      key: 'email',
      title: 'Receive email alerts',
      description: null,
      label: 'FREE',
      icon: 'email'
    },
    {
      key: 'video',
      title: 'Video capture',
      description: 'Build stronger evidence with video—capture the thief\'s voice and movements.',
      label: null,
      icon: 'videocam'
    },
    {
      key: 'drive',
      title: 'Google Drive upload',
      description: 'Access your evidence from anywhere—photos and videos saved automatically.',
      label: null,
      icon: 'cloud_upload'
    },
    {
      key: 'backCamera',
      title: 'Back facing camera',
      description: 'See where thieves are hiding—capture their surroundings.',
      label: null,
      icon: 'camera_alt'
    },
    {
      key: 'alertMessage',
      title: 'Alert Message',
      description: 'Scare thieves into returning your phone with a threatening message.',
      label: null,
      icon: 'message'
    },
    {
      key: 'soundAlarm',
      title: 'Alarm sound',
      description: 'Startle thieves and alert people nearby with a loud alarm.',
      label: null,
      icon: 'notifications_active'
    },
    {
      key: 'fakeHomeScreen',
      title: 'Fake home screen',
      description: 'Trick thieves into thinking they unlocked your phone—capture more evidence.',
      label: null,
      icon: 'apps'
    },
    {
      key: 'appLock',
      title: 'App lock',
      description: 'Lock CrookCatcher with a pattern so thieves can\'t disable it.',
      label: null,
      icon: 'lock'
    },
    {
      key: 'disguiseApp',
      title: 'Disguise app',
      description: 'Make CrookCatcher look like a file explorer so thieves won\'t find it.',
      label: null,
      icon: 'visibility_off'
    },
    {
      key: 'breakIn',
      title: 'Break in detection',
      description: 'Catch smart thieves—even if they guess your password, you\'ll still get alerts.',
      label: null,
      icon: 'security'
    },
    {
      key: 'emailSubject',
      title: 'Custom email subject',
      description: 'Keep alerts hidden—customize email subjects so notifications stay secret.',
      label: null,
      icon: 'subject'
    },
    {
      key: 'hideNotifications',
      title: 'Hide notifications',
      description: 'Stay invisible—notifications only appear after you unlock your phone.',
      label: null,
      icon: 'notifications_off'
    },
    {
      key: 'blockPowerMenu',
      title: 'Block Power off and Airplane mode',
      description: 'Prevent thieves from disabling your phone. <a href="https://www.crookcatcher.app/blog/block-power-menu">Learn more</a>',
      label: 'EXPERIMENTAL',
      icon: 'power_off'
    },
  ];
</script>

<div class="features-cards">
  {#each features as feature}
    <div class="feature-card glass-card">
      {#if feature.label}
        <div class="feature-badge" class:free-badge={feature.label === 'FREE'}>
          {feature.label}
        </div>
      {/if}
      <div class="feature-icon">
        <span class="material-icons">{feature.icon}</span>
      </div>
      <h3 class="feature-title">{feature.title}</h3>
      {#if feature.description}
        <p class="feature-description">{@html feature.description}</p>
      {/if}
    </div>
  {/each}
</div>

<style>
  .features-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 28px;
    margin-top: 48px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 16px;
  }

  .feature-card {
    position: relative;
    padding: 32px 28px;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-align: center;
  }

  .feature-badge {
    position: absolute;
    top: 0;
    right: 0;
    padding: 7px 16px;
    border-radius: 0 4px 0 14px;
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 1;
    line-height: 1;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-top: none;
    border-right: none;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  .free-badge {
    background: var(--color-primary);
    color: var(--color-on-primary);
    box-shadow: 0 3px 12px rgba(76, 175, 80, 0.4), 
                0 1px 3px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  .feature-icon {
    margin-bottom: 20px;
    color: #fff;
    opacity: 0.95;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .feature-icon .material-icons {
    font-size: 56px;
    font-weight: 400;
    line-height: 1;
  }

  .feature-title {
    font-size: 1.15rem;
    font-weight: 600;
    color: #fff;
    margin: 0 0 10px;
    line-height: 1.4;
    letter-spacing: -0.01em;
  }

  .feature-description {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.65;
    margin: 0;
    flex-grow: 1;
  }

  .feature-description a {
    color: var(--color-primary);
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .feature-description a:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  @media (max-width: 840px) {
    .features-cards {
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 20px;
      margin-top: 32px;
      padding: 0 8px;
    }

    .feature-card {
      padding: 24px 20px;
      min-height: auto;
      border-radius: 14px;
    }

    .feature-badge {
      top: 0;
      right: 0;
      padding: 6px 14px;
      font-size: 0.7rem;
      border-radius: 0 5px 0 14px;
      border-top: none;
      border-right: none;
    }

    .feature-icon {
      margin-bottom: 16px;
    }

    .feature-icon .material-icons {
      font-size: 48px;
    }

    .feature-title {
      font-size: 1.05rem;
      margin-bottom: 8px;
    }

    .feature-description {
      font-size: 0.875rem;
      line-height: 1.6;
    }
  }

  @media (max-width: 640px) {
    .features-cards {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 0;
    }

    .feature-card {
      padding: 24px;
    }
  }
</style>

