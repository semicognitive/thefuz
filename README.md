# thefuz

Using GPT-3 as a back-end, but with Svelte.

Made from [this template](https://github.com/semicognitive/es-package/generate)

## Usage
Try in the [Svelte Repl](https://svelte.dev/repl/ba9befe7c7854b5a8b98e00a1bcbfd53?version=3.55.1)

```svelte
<script>
	import { fuzzyapi } from "https://esm.sh/thefuz";

	//TODO: Fill in your OPENAI API KEY
	const OPENAI_KEY = "";
</script>

<div use:fuzzyapi={[OPENAI_KEY, "Resaurants in Seattle"]}>
	<h4><span data-fuz="name"/></h4>
 	<span data-fuz="address"/><br/>
	<span data-fuz="cuisine"/>
  
	<h4><span data-fuz="name"/></h4>
  	<span data-fuz="address"/><br/>
	<span data-fuz="cuisine"/>
</div>
```

Example

<img width="800" alt="Svelte Repl Screenshot" src="https://user-images.githubusercontent.com/20548516/215312997-17effcc3-08c8-4827-b2a2-259d54c30680.png">
