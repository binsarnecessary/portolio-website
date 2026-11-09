import { expect, test, type Page } from "@playwright/test";
import { careerBreak, stations } from "../app/data/profile";

const sections = ["experience", "projects", "education", "contact"] as const;

async function overflowX(page: Page) {
  return page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
}

test("every station anchor exists exactly once", async ({ page }) => {
  await page.goto("/");
  for (const station of stations) {
    await expect(page.locator(`#station-${station.id}`)).toHaveCount(1);
  }
});

test("deep link /#station-apis scrolls the item into view below the header", async ({ page }) => {
  await page.goto("/#station-apis");
  const item = page.locator("#station-apis");
  await expect(item).toBeInViewport();
  await expect(item).toContainText("Internal APIs");

  // header sticky tidak boleh menutupi judul item
  const header = await page.locator("header").boundingBox();
  const title = await item.locator("h4").boundingBox();
  expect(header && title).toBeTruthy();
  expect(title!.y).toBeGreaterThanOrEqual(header!.y + header!.height);
});

test("nav anchors reach their sections", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Sections" });
  for (const id of sections) {
    await nav.locator(`a[href="#${id}"]`).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(page.locator(`#${id}-h`)).toBeInViewport();
  }
});

test("every Download CV link points at the PDF", async ({ page }) => {
  await page.goto("/");
  const links = page.getByRole("link", { name: "Download CV" });
  expect(await links.count()).toBeGreaterThanOrEqual(2);
  for (const link of await links.all()) {
    await expect(link).toHaveAttribute("href", "/CV-Binsar-Damanik.pdf");
    await expect(link).toHaveAttribute("download", "");
  }
});

test("hero CTAs are above the fold at 1440×900", async ({ page }) => {
  await page.goto("/");
  const hero = page.locator("#top");
  await expect(hero.getByRole("link", { name: "Download CV" })).toBeInViewport({ ratio: 1 });
  await expect(hero.getByRole("link", { name: "Email" })).toBeInViewport({ ratio: 1 });
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("all claims, notes and the career break are rendered", async ({ page }) => {
    await page.goto("/");
    const experience = page.locator("#experience");
    for (const station of stations) {
      const item = page.locator(`#station-${station.id}`);
      await expect(item).toBeVisible();
      for (const claim of station.claims) {
        await expect(item).toContainText(claim.text);
      }
    }
    await expect(experience).toContainText(careerBreak.text);
    await expect(experience).toContainText("Outline only — employer system, no product details");
  });

  test("/#station-apis lands on the item", async ({ page }) => {
    await page.goto("/#station-apis");
    await expect(page.locator("#station-apis")).toBeInViewport();
  });
});

test.describe("mobile 390px", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("no horizontal overflow and hero CTAs above the fold", async ({ page }) => {
    await page.goto("/");
    expect(await overflowX(page)).toBeLessThanOrEqual(0);
    const hero = page.locator("#top");
    await expect(hero.getByRole("link", { name: "Download CV" })).toBeInViewport({ ratio: 1 });
    await expect(hero.getByRole("link", { name: "Email" })).toBeInViewport({ ratio: 1 });
  });

  test("nav anchors reach their sections", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Sections" });
    for (const id of sections) {
      await nav.locator(`a[href="#${id}"]`).click();
      await expect(page.locator(`#${id}-h`)).toBeInViewport();
    }
  });
});
