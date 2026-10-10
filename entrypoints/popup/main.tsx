import { render } from "preact"

import "./style.css"
import Logo from "@/assets/rulicon.svg"

function App() {
  return (
    <div className="flex-ver">
      <a href="https://github.com/craftingmod/rulicon" target="_blank">
        <img src={Logo} class="logo project" alt="Project logo" />
      </a>
      <h1>Rulicon</h1>
      <p class="read-the-docs">Ruliweb icon extension</p>
      <p>Version: v0.1.0</p>
    </div>
  )
}

render(<App />, document.querySelector<HTMLDivElement>("#app")!)
