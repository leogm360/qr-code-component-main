import { render, screen } from "@testing-library/react";

import LadingPage from "../../pages/LadingPage";

describe("Lading Page", () => {
  it("should render with one QR Code Card component.", () => {
    render(<LadingPage />);

    const qrCodeCard = screen.getByAltText("QR Code, scan it!");
    const qrCodeCardQty = screen.getAllByAltText("QR Code, scan it!").length;

    expect(qrCodeCard).toBeInTheDocument();
    expect(qrCodeCardQty).toBe(1);
  });
});
