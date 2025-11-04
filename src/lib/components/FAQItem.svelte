<script lang="ts">
  export let question: string;
  export let answer: string;
  
  let isOpen = false;
  
  function toggle() {
    isOpen = !isOpen;
  }
</script>

<div class="faq-item">
  <button class="faq-question" on:click={toggle} aria-expanded={isOpen}>
    <span class="faq-question-text">{question}</span>
    <span class="faq-icon" class:open={isOpen}>+</span>
  </button>
  {#if isOpen}
    <div class="faq-answer">
      <p>{answer}</p>
    </div>
  {/if}
</div>

<style>
  .faq-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .faq-question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    color: inherit;
  }

  .faq-question:hover {
    opacity: 0.8;
  }

  .faq-question-text {
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    flex: 1;
    margin-right: 16px;
  }

  .faq-icon {
    font-size: 1.5rem;
    font-weight: 300;
    color: white;
    line-height: 1;
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }

  .faq-icon.open {
    transform: rotate(45deg);
  }

  .faq-answer {
    padding: 0 0 20px 0;
    animation: fadeIn 0.2s ease;
  }

  .faq-answer p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin: 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 840px) {
    .faq-question {
      padding: 16px 0;
    }

    .faq-question-text {
      font-size: 1rem;
    }

    .faq-icon {
      font-size: 1.3rem;
    }

    .faq-answer {
      padding: 0 0 16px 0;
    }
  }
</style>

