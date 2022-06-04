import { render } from "@testing-library/react-native";
import Balloon from "./Balloon";

describe("should render Balloon components", () => {
  it("should render a match snapshot", () => {
    const { container } = render(<Balloon text="Hello" />);
    expect(container).toMatchSnapshot();
  });
  it("should render Balloon component", () => {
    const { getByTestId } = render(<Balloon text="Hello" />);
    expect(getByTestId("balloon")).toBeTruthy();
  });
  it("should render match text", () => {
    const { getByText } = render(<Balloon text="Hello" />);
    expect(getByText("Hello")).toBeTruthy();
  });
});
