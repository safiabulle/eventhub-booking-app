import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import Login from "../pages/Login"

describe("Login Page", () => {
  test("renders login heading", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )

    expect(
      screen.getByText(/welcome back/i)
    ).toBeInTheDocument()
  })
})