<script>
  import FeatureItem from './FeatureItem.svelte';
  

  const features = [
    {
      key: 'takePicture',
      title: 'Take pictures',
      description: 'Take a picture when a wrong password, pin or pattern is entered.',
      inFree: true,
      inPro: true,
      isFirst: true
    },
    {
      key: 'location',
      title: 'Obtain location',
      description: 'Locate phone with GPS when picture is taken.',
      inFree: true,
      inPro: true
    },
    {
      key: 'email',
      title: 'Send alert email',
      description: 'Receive pictures and location by email.',
      inFree: true,
      inPro: true
    },
    {
      key: 'video',
      title: 'Video capture',
      description: 'With video capture you are more likely to get a good view of the intruder and possibly identify their voice and surroundings.',
      inFree: false,
      inPro: true,
    },
    {
      key: 'drive',
      title: 'Google Drive upload',
      description: 'Upload pictures and videos directly to your Google Drive to allow easy access to files on any device.',
      inFree: false,
      inPro: true,
    },
    {
      key: 'backCamera',
      title: 'Back facing camera',
      description: 'Identify the surroundings of the intruder with pictures from the back facing camera.',
      inFree: false,
      inPro: true
    },
    {
      key: 'alertMessage',
      title: 'Alert Message',
      description: 'Show a custom message on the lock screen, when a picture is taken. You could tell the crook to return your phone, or you\'ll show their picture to the police.',
      inFree: false,
      inPro: true
    },
    {
      key: 'soundAlarm',
      title: 'Alarm sound',
      description: 'Play a custom alarm sound at full volume when a wrong password is entered.',
      inFree: false,
      inPro: true
    },
    {
      key: 'fakeHomeScreen',
      title: 'Fake home screen',
      description: 'Show a fake home screen when a wrong password is entered. Thieves will think they unlocked your phone. When they start tapping on the screen, more pictures will be taken.',
      inFree: false,
      inPro: true
    },
    {
      key: 'appLock',
      title: 'App lock',
      description: 'Lock access to CrookCatcher with a pattern code.',
      inFree: false,
      inPro: true
    },
    {
      key: 'disguiseApp',
      title: 'Disguise app',
      description: 'Change the app icon and name to mmake it look like a file explorer app, so intruders won\'t find out you have CrookCatcher installed.',
      inFree: false,
      inPro: true
    },
    {
      key: 'breakIn',
      title: 'Break in detection',
      description: 'Take a picture and send alert email if the crook guesses the right password after having failed.',
      inFree: false,
      inPro: true
    },
    {
      key: 'emailSubject',
      title: 'Custom email subject',
      description: 'Change alert email subject text, to avoid crooks seeing revealing notifications.',
      inFree: false,
      inPro: true
    },
    {
      key: 'hideNotifications',
      title: 'Hide notifications',
      description: 'Only show alert notifications on device after successful unlock. This way crooks won\'t know they got caught.',
      inFree: false,
      inPro: true
    },
    {
      key: 'noAds',
      title: 'No ads',
      description: 'Enjoy an ad-free app and support the development of CrookCatcher.',
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
      <p>Free</p>
    </div>
    <div class="feature-col pro-col">
      <div class="pro-indicator"></div>
      <p>PRO</p>
    </div>
  </div>
  {#each features as feature, i}
    <FeatureItem 
      title={feature.title || feature.key}
      description={feature.description || 'Feature description'}
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
