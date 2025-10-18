# Visual Testing Setup

This project includes Playwright-based visual testing to capture screenshots of the hero section with the map.

## Setup

1. **Install dependencies** (already done):

   ```bash
   npm install
   npx playwright install --with-deps
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

## Running Tests

### Capture baseline snapshots:

```bash
npm run test:e2e:update
```

### Run visual tests:

```bash
npm run test:e2e
```

### View test reports:

```bash
npx playwright show-report
```

## What the Test Does

The `hero.spec.ts` test:

- Serves the built application on `127.0.0.1:4173`
- Navigates to the homepage
- Freezes all animations and vehicle movements for deterministic screenshots
- Waits for fonts and images to load
- Captures a screenshot of the `section.hero` element
- Compares it against the baseline snapshot

## File Structure

```
tests/e2e/
├── hero.spec.ts                    # Test file
└── hero.spec.ts-snapshots/        # Baseline snapshots
    └── hero-map-chromium-darwin.png
```

## Customizing the Test

- **Change viewport**: Modify `viewport` in `playwright.config.ts`
- **Change screenshot area**: Update the locator in `hero.spec.ts`
- **Add more tests**: Create additional `.spec.ts` files
- **Change browser**: Update `projects` in `playwright.config.ts`

## Troubleshooting

- **Port conflicts**: The test uses `127.0.0.1:4173`. Change in `playwright.config.ts` if needed.
- **Snapshot differences**: Use `npm run test:e2e:update` to update baselines after intentional changes.
- **Permission issues**: Ensure proper file permissions for the cache directories.
