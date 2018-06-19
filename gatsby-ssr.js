/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

 // You can delete this file if you're not using it
 import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

import React from 'react'
import { renderToString } from 'react-dom/server'

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents
}) => {
  const sheet = new ServerStyleSheet()

  replaceBodyHTMLString(
    renderToString(
        <StyleSheetManager sheet={sheet.instance}>
          {bodyComponent}
        </StyleSheetManager>
    )
  )

  setHeadComponents([sheet.getStyleElement()])
}