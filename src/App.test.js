import { render } from "@testing-library/react"
import ListNotes from "./components/ListNotes"

describe('Testing components', () => {
  test('if the list renders correctly', () => {
    const r = render(<ListNotes />);
    expect(r).toBeDefined();
  })
})
