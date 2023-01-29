/**
 * Svelte action to fuz data from GPT-3
 */
export function fuzzyapi(parentnode, [OPENAPI_KEY, description]) {
  async function execute([OPENAPI_KEY, description]) {
    const fuznodes = [...parentnode.querySelectorAll("[data-fuz]")];
    const fuzattributes = [...(new Set(fuznodes.map((n) => n.dataset.fuz)))];

    const num_items =
      parentnode.querySelectorAll(`[data-fuz="${fuzattributes[0]}"]`).length;

    const prompt =
      "Provide a JSON array of real data based on the following description of the app, keys requested,and number of items requested. Provide the answer as clean JSON data. Format the values to match the fomatting described in the keys requested. Provide the answer as well formatted minified JSON.###DESCRIPTION:" +
      description + "###KEYS REQUESTED" + fuzattributes +
      "###NUMBER OF ITEMS REQUESTED:" + num_items + "###JSON DUMMY DATA:";

    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAPI_KEY}`,
      },
      body: JSON.stringify({
        "model": "text-davinci-002",
        "prompt": prompt,
        "max_tokens": 250,
        "temperature": 0.7,
      }),
    }).then((res) => res.json());

    if (response.error) throw response.error;

    const jsonArr = JSON.parse(response.choices[0].text);

    for (const attr of fuzattributes) {
      const fuzattrnodes = [
        ...parentnode.querySelectorAll(`[data-fuz="${attr}"]`),
      ];

      for (const [i_node, node] of fuzattrnodes.entries()) {
        node.innerText = jsonArr[i_node][attr];
      }
    }
  }

  execute([OPENAPI_KEY, description]);

  return {
    update([OPENAPI_KEY, description]) {
      execute([OPENAPI_KEY, description]);
    },
    destroy() {
    },
  };
}
