import { expect, test } from "@playwright/test";

const panel = "#station-panel";
const chatLink = '[data-station-link="chat"]';

test.describe("desktop map", () => {
  test("Tab to a station, Enter opens the panel and updates the hash", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(panel)).toBeHidden();

    // Tab sampai fokus jatuh di stasiun pertama peta
    for (let i = 0; i < 30; i++) {
      await page.keyboard.press("Tab");
      const focused = await page.evaluate(() =>
        document.activeElement?.getAttribute("data-station-link"),
      );
      if (focused === "chat") break;
    }
    await expect(page.locator(chatLink)).toBeFocused();

    await page.keyboard.press("Enter");
    await expect(page.locator(panel)).toBeVisible();
    await expect(page.locator(panel)).toContainText("About 200 REST endpoints");
    await expect(page).toHaveURL(/#station-chat$/);
    await expect(page.locator('[data-seg="chat"]')).toHaveAttribute("data-lit", "true");
  });

  test("Esc closes the panel, returns focus and clears the hash", async ({ page }) => {
    await page.goto("/");
    await page.locator(chatLink).focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(panel)).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(page.locator(panel)).toBeHidden();
    await expect(page.locator(chatLink)).toBeFocused();
    expect(new URL(page.url()).hash).toBe("");
  });

  test("Back restores the previous panel state", async ({ page }) => {
    await page.goto("/");
    await page.locator(chatLink).click();
    await expect(page.locator(panel)).toContainText("About 200 REST endpoints");
    await page.locator('[data-station-link="bds-loan"]').click();
    await expect(page.locator(panel)).toContainText("loan-transaction web app");
    await expect(page).toHaveURL(/#station-bds-loan$/);

    await page.goBack();
    await expect(page).toHaveURL(/#station-chat$/);
    await expect(page.locator(panel)).toContainText("About 200 REST endpoints");

    await page.goBack();
    await expect(page.locator(panel)).toBeHidden();

    await page.goForward();
    await expect(page.locator(panel)).toBeVisible();
  });

  test("deep link /#station-chat opens on load", async ({ page }) => {
    await page.goto("/#station-chat");
    await expect(page.locator(panel)).toBeVisible();
    await expect(page.locator(panel)).toContainText("Chat platform");
    await expect(page.locator(panel)).toBeInViewport();
  });

  test("unknown hash opens nothing", async ({ page }) => {
    await page.goto("/#station-nope");
    await page.waitForTimeout(300);
    await expect(page.locator(panel)).toBeHidden();
  });

  test("no duplicated station ids", async ({ page }) => {
    await page.goto("/#station-chat");
    await expect(page.locator(panel)).toBeVisible();
    expect(await page.locator("#station-chat").count()).toBe(1);
    expect(await page.locator(`${panel} [id]`).count()).toBe(0);
  });
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("/#station-chat shows the inline case study", async ({ page }) => {
    await page.goto("/#station-chat");
    const station = page.locator("#station-chat");
    await expect(station).toBeInViewport();
    await expect(station).toContainText("Designed and built the backend");
    await expect(station).toContainText("Outline only — employer system, no product details");
    await expect(page.locator("#stations")).toContainText("Career break (Nov 2025 – Dec 2025)");
  });
});

test.describe("mobile 390px", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("no panel, the list is visible", async ({ page }) => {
    await page.goto("/#station-chat");
    await expect(page.locator("#line")).toBeHidden();
    await expect(page.locator(panel)).toBeHidden();
    await expect(page.locator("#station-chat")).toBeInViewport();
    await expect(page.locator("#stations ol > li")).toHaveCount(10);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });
});
