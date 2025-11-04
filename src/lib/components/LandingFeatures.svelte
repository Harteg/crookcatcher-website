<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
</svelte:head>

<script>
  const features = [
    {
      key: 'takePicture',
      title: 'Take pictures',
      description: 'Get their photo instantly when someone tries to break into your phone—catch them in the act.',
      inFree: true,
      icon: 'photo_camera'
    },
    {
      key: 'location',
      title: 'Obtain location',
      description: 'Track your phone\'s exact location to recover it quickly and catch the thief.',
      inFree: true,
      icon: 'location_on'
    },
    {
      key: 'email',
      title: 'Send alert email',
      description: 'Get instant alerts in your email—receive photos and location automatically so you never miss a break-in attempt.',
      inFree: true,
      icon: 'email'
    },
    {
      key: 'video',
      title: 'Video capture',
      description: 'Identify intruders faster with video footage—capture their voice, movements, and surroundings for stronger evidence.',
      inFree: false,
      icon: 'videocam'
    },
    {
      key: 'drive',
      title: 'Google Drive upload',
      description: 'Access your evidence from anywhere—all photos and videos automatically saved to your Google Drive for easy retrieval.',
      inFree: false,
      icon: 'cloud_upload'
    },
    {
      key: 'backCamera',
      title: 'Back facing camera',
      description: 'See where the thief is—capture their surroundings to identify the location and help recover your phone.',
      inFree: false,
      icon: 'camera_alt'
    },
    {
      key: 'alertMessage',
      title: 'Alert Message',
      description: 'Scare thieves into returning your phone—display a custom message on the lock screen threatening to report them to police.',
      inFree: false,
      icon: 'message'
    },
    {
      key: 'soundAlarm',
      title: 'Alarm sound',
      description: 'Startle intruders and alert people nearby—play a loud alarm when someone enters the wrong password.',
      inFree: false,
      icon: 'notifications_active'
    },
    {
      key: 'fakeHomeScreen',
      title: 'Fake home screen',
      description: 'Trick thieves into thinking they unlocked your phone—show a fake home screen and capture more evidence while they tap around.',
      inFree: false,
      icon: 'apps'
    },
    {
      key: 'appLock',
      title: 'App lock',
      description: 'Keep your security app safe—protect CrookCatcher with a pattern code so thieves can\'t disable it.',
      inFree: false,
      icon: 'lock'
    },
    {
      key: 'disguiseApp',
      title: 'Disguise app',
      description: 'Stay hidden from thieves—make CrookCatcher look like a file explorer so they won\'t find and disable your protection.',
      inFree: false,
      icon: 'visibility_off'
    },
    {
      key: 'breakIn',
      title: 'Break in detection',
      description: 'Catch smart thieves too—even if they guess your password, you\'ll still get photos and alerts to recover your phone.',
      inFree: false,
      icon: 'security'
    },
    {
      key: 'emailSubject',
      title: 'Custom email subject',
      description: 'Keep alerts hidden from thieves—customize email subjects so notifications don\'t reveal your security system.',
      inFree: false,
      icon: 'subject'
    },
    {
      key: 'hideNotifications',
      title: 'Hide notifications',
      description: 'Stay completely invisible—notifications only appear after you unlock your phone, so thieves never know they\'re being watched.',
      inFree: false,
      icon: 'notifications_off'
    },
    {
      key: 'noAds',
      title: 'No ads',
      description: 'Focus on protection without distractions—enjoy an ad-free experience and support ongoing development.',
      inFree: false,
      icon: 'block'
    }
  ];
</script>

<div class="features-cards">
  {#each features as feature}
    <div class="feature-card glass-card" class:pro-only={!feature.inFree}>
      {#if feature.inFree}
        <div class="feature-badge free-badge">FREE</div>
      {/if}
      <div class="feature-icon">
        <span class="material-icons">{feature.icon}</span>
      </div>
      <h3 class="feature-title">{feature.title}</h3>
      <p class="feature-description">{feature.description}</p>
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
  }

  .free-badge {
    background: linear-gradient(135deg, #66bb6a 0%, #4caf50 50%, #43a047 100%);
    color: #fff;
    box-shadow: 0 3px 12px rgba(76, 175, 80, 0.4), 
                0 1px 3px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
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

