// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children, fileData }: QuartzComponentProps) => {
  /*const cssclasses = fileData.frontmatter?.cssclasses ?? [];
  const extraClasses = Array.isArray(cssclasses)
    ? cssclasses.join(" ")
    : cssclasses;*/
  return <div id="quartz-body" /*className={extraClasses}*/>{children}</div>
}

Body.afterDOMLoaded = clipboardScript
Body.css = clipboardStyle

export default (() => Body) satisfies QuartzComponentConstructor
