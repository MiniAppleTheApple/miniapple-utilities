import type { Component } from "solid-js"
import { createSignal, For } from "solid-js"

function randomInt(min: number, max: number): number {
  return Math.floor((max - min + 1) * Math.random()) + min
}

const RandomNumber: Component = () => {
  const [min, setMin] = createSignal(0)
  const [max, setMax] = createSignal(1)
  const [results, setResults] = createSignal<number[]>([])
  
  const showResult = () => {
    setResults([...results(), randomInt(min(), max())])
  }

  return (
    <section>
      <h1>Random Number</h1>
      <input type="text" value={min()} onInput={x => setMin(parseInt(x.currentTarget.value))} />
      <input type="text" value={max()} onInput={x => setMax(parseInt(x.currentTarget.value))} />
      <button onClick={showResult}>Generate</button>
      <ul>
        <For each={results()} fallback={<div>No Result</div>}>
          {(item) => <li>{item}</li>}
        </For>
      </ul>
    </section>
  )
}

export default RandomNumber
