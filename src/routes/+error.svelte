<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<header class="app-header">
    <Header/>
</header>

<div class="error-container">
    <h1>404</h1>
    <p>Page not found</p>
    <a href="/">Go Home</a>
</div>

<Footer/>


<style>
    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    
    p {
        margin-bottom: 2rem;
    }
    
    a {
        color: var(--color-primary);
        text-decoration: none;
        padding: 0.5rem 1rem;
        border: 1px solid var(--color-primary);
        border-radius: 4px;
        transition: all 0.2s;
    }
    
    a:hover {
        background: var(--color-primary);
        color: var(--color-dark-bg);
    }
    
    :global(.error-container) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        min-height: 60vh;
    }
</style> 