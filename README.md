# thefuz

Using GPT-3 as a back-end, but with Svelte.

Made from [this template](https://github.com/semicognitive/es-package/generate)

## Usage
Try in the [Svelte Repl](https://svelte.dev/repl/ba9befe7c7854b5a8b98e00a1bcbfd53?version=3.55.1)

```svelte
<script>
	import { fuzzyapi } from "https://esm.sh/thefuz";

	const OPENAPI_KEY = "";
</script>

<div use:fuzzyapi={[OPENAPI_KEY, "Resaurants in Seattle"]}>
	<h4><span data-fuz="name"/></h4>
  <span data-fuz="address"/><br/>
	<span data-fuz="cuisine"/>
  
	<h4><span data-fuz="name"/></h4>
  <span data-fuz="address"/><br/>
	<span data-fuz="cuisine"/>
</div>
```