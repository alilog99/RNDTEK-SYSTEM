# RNDTEK Monorepo

This is a monorepo containing multiple projects for RNDTEK development.

## Project Structure

```
RNDTEK/
├── RNDTEK-WEBSITE/     # Main React website application
├── ALI-LINKDEDIN/      # LinkedIn-related project (to be developed)
├── ALI-PORTFOLIO/      # Portfolio project (to be developed)
└── RNDTEK-LINKEDIN/    # RNDTEK LinkedIn project (to be developed)
```

## Getting Started

### Prerequisites
- Node.js >= 16.0.0
- Yarn >= 1.22.0

### Installation

1. **Install all dependencies:**
   ```bash
   yarn install
   ```

2. **Start development server:**
   ```bash
   yarn dev
   ```

3. **Build for production:**
   ```bash
   yarn build
   ```

## Available Scripts

- `yarn dev` - Start the RNDTEK-WEBSITE development server
- `yarn build` - Build the RNDTEK-WEBSITE for production
- `yarn test` - Run tests for RNDTEK-WEBSITE
- `yarn install:all` - Install dependencies for all workspaces
- `yarn clean` - Clean all workspaces (if clean script exists)
- `yarn lint` - Lint all workspaces (if lint script exists)

## Workspace Commands

To run commands in specific workspaces:

```bash
# Run a command in a specific workspace
yarn workspace RNDTEK-WEBSITE start
yarn workspace RNDTEK-WEBSITE build

# Run a command in all workspaces
yarn workspaces run test
```

## Adding New Projects

1. Create a new directory in the root
2. Add it to the `workspaces` array in `package.json`
3. Initialize the project with its own `package.json`
4. Run `yarn install` to link the workspace

## Technology Stack

- **Package Manager:** Yarn Workspaces
- **RNDTEK-WEBSITE:** React 16.6.3, Material-UI, Bootstrap
- **Build Tool:** React Scripts
- **Styling:** CSS, Styled Components, Bootstrap
