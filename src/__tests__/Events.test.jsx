import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import Events from "../pages/Events"

describe("Events Page", () => {
  test("renders upcoming events heading", () => {
    render(
      <BrowserRouter>
        <Events />
      </BrowserRouter>
    )

    expect(
      screen.getByText(/upcoming events/i)
    ).toBeInTheDocument()
  })
})