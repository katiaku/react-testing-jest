import { render } from "@testing-library/react"
import ListNotes from "./components/ListNotes"

describe('Testing components', () => {
  test('if the list renders correctly', () => {
    const r = render(<ListNotes />);
    expect(r).toBeDefined();
  })
  test('if the list renders only the notes defined', () => {
    const notes = ["throw the garbage", "buy eggs"];
    const r = render(<ListNotes notes={notes} />);
    const div = r.getByLabelText('list-notes');
    expect(div.childElementCount).toBe(2);
  })
})
