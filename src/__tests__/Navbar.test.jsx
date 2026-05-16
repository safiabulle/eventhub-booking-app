import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import Navbar from "../components/Navbar"

describe("Navbar", () => {
  test("renders EventHub logo", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    expect(
      screen.getByText(/eventhub/i)
    ).toBeInTheDocument()
  })
})