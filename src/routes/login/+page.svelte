<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { register, Hanko } from '@teamhanko/hanko-elements';
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
</script>

<hanko-auth on:onAuthFlowCompleted={redirectAfterLogin} />
