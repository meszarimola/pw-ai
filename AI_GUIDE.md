# AI Guide for E2E (Playwright)

## Coding style
- Language: TypeScript; file names: snake_case for tests, PascalCase for classes.
- Use ESLint + Prettier defaults; no any; strict true.

## Selectors
- Prefer `getByRole`, `getByLabel`, `getByTestId` over text/css/xpath.
- Add `data-testid` when needed; never rely on dynamic text.

## Flake control
- No `waitForTimeout`. Use `toBeVisible`, `toHaveURL`, `toHaveAttribute`.
- Network: wait for relevant responses.

## Config
- Base URL from env `BASE_URL`; screenshots/videos on failure.
- Retries = 1 in CI, 0 locally; reporter: html + list.
