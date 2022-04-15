import { render, screen } from "@testing-library/react";

import QRCodeCard from "../../components/QRCodeCard";

describe("QR Code Card Component", () => {
  it("should render image, title and text.", () => {
    render(<QRCodeCard />);

    const image = screen.getByRole("img");
    const title = screen.getByRole("heading");
    const text = screen.getByText(
      "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
    );

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();

    expect(image).toHaveAttribute(
      "src",
      "/src/assets/images/image-qr-code.png"
    );
    expect(image).toHaveAttribute("alt", "QR Code, scan it!");
    expect(title).toHaveTextContent(
      "Improve your front-end skills by building projects"
    );
    expect(text).toHaveTextContent(
      "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
    );
  });
});
