<script>
// @ts-nocheck

    import { register, Hanko } from '@teamhanko/hanko-elements';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { env } from '$env/dynamic/public';

    const hankoApi = env.PUBLIC_HANKO_API_URL;
    const hanko = new Hanko(hankoApi);

    const redirectAfterLogin = () => goto('/admin');

    const handleAuthFlowCompleted = () => {
        console.log('onAuthFlowCompleted');
        redirectAfterLogin();
    };

    const handleError = (error) => {
        // handle error
        console.error(error);
    };

    onMount(() => {
        hanko.onAuthFlowCompleted(handleAuthFlowCompleted);
        console.log(hanko);
        register(hankoApi).catch(handleError);
    });

    const logout = () => {
        hanko.user.logout().catch(handleError);
        goto('/login');
    };
</script>

<hanko-profile />
<button on:click={logout}>Logout</button>
