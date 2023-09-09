import { render, fireEvent } from "@testing-library/react"
import ListNotes from "./components/ListNotes"
import App from "./App";
import InputNewNote from "./components/InputNewNote";

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

describe('Integration test', () => {
  test('if renders the app', () => {
    const r = render(<App />);
    expect(r).toBeDefined();
  })
  test('if renders the input', () => {
    const placeholdertext = "Please input a note";
    const r = render(<App />);
    const input = r.getByPlaceholderText(placeholdertext);
    expect(input).toBeDefined();
  })
  test('if when the add button is clicked the event is launched', () => {
    const functionMock = jest.fn();
    const r = render(<InputNewNote addNewNote={functionMock} />);
    const button = r.getByText("Add");
    fireEvent.click(button);
    expect(functionMock).toHaveBeenCalledTimes(1);
  })
})
