<script>
	import { register, Hanko } from '@teamhanko/hanko-elements';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { env } from '$env/dynamic/public';

	const hankoApi = env.PUBLIC_HANKO_API_URL;
	const hanko = new Hanko(hankoApi);
	const redirectAfterLogin = () => {
		goto('/admin');
	};
	onMount(() => {
		hanko.onAuthFlowCompleted(() => {
            console.log('onAuthFlowCompleted');
			redirectAfterLogin();
		});
        console.log(hanko);
		register(hankoApi).catch((error) => {
			// handle error
		});
	});
	const logout = () => {
		hanko.user.logout().catch((error) => {
			// handle error
		});
		goto('/login');
	};
</script>

<hanko-profile />
<button on:click={logout}>Logout</button>
