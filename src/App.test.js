import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import App from "./App";
import config from "./config";
import { store } from "./store";

test("renders the redesigned portfolio homepage", async () => {
  render(
    <Provider store={store}>
      <HashRouter basename={config.basename}>
        <App />
      </HashRouter>
    </Provider>
  );

  expect(
    await screen.findByRole("heading", {
      name: /Peerawat Rojratchadakorn/i,
    })
  ).toBeInTheDocument();
  expect(screen.getAllByText(/Senior AI Engineer/i)[0]).toBeInTheDocument();
  expect(screen.getByText(/Selected highlights/i)).toBeInTheDocument();
  expect(
    screen.getByText(/AI systems, product awards, and national AI recognition/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/AI coaching and market conduct systems/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/Incubation 2024 winner/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Gold Medal recipient/i).length).toBeGreaterThan(0);
  expect(
    screen.getByText(/AI systems from prototype to production deployment/i)
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", {
      name: /AI coaching and market conduct systems/i,
    })
  ).toHaveAttribute("href", "#/experience#experience-scbx-highlight");
  expect(
    screen.getByRole("link", { name: /Incubation 2024 winner/i })
  ).toHaveAttribute("href", "#/projects#project-line-shopping-highlight");
  expect(
    screen.getByRole("link", { name: /Gold Medal recipient/i })
  ).toHaveAttribute("href", "#/projects#project-superai-highlight");
  expect(screen.getByText(/Featured projects/i)).toBeInTheDocument();
  expect(screen.getByText(/Awards and practical AI work/i)).toBeInTheDocument();
  expect(screen.getByText(/LINE SHOPPING Incubation 2024/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Super AI Engineer Season 2 Gold Medal/i)
  ).toBeInTheDocument();
  expect(screen.queryByText(/SCBX Thai-native AI patent work/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/OpenThaiGPT Training Volunteer/i)).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: /GitHub/i })).toHaveAttribute(
    "href",
    "https://github.com/boat1603"
  );
});
