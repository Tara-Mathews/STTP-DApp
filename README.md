# STPP DApp

**STPP (Secure Token Presale Protocol)** is a permissionless, decentralized presale platform built on Ethereum that solves critical problems in token launch mechanisms.

## What is STPP?

STPP combines three complementary mechanisms to create a secure and fair token launch framework:

1. **Commit-Reveal Dutch Auction** — Fair price discovery through cryptographic commitments and time-locked reveals
2. **Liquidity Bootstrapping Pool (LBP)** — Post-auction price formation with gradual weight adjustments and oracle-driven adaptive fees
3. **Token Vesting System** — Controlled distribution with configurable unlocking schedules

## Problems Solved

Traditional presale models suffer from several critical issues that STPP addresses:

- **Unfair Allocation** — Bots and well-connected participants often get preferential treatment
- **Price Manipulation** — Front-running and MEV (Maximal Extractable Value) exploitation distort prices
- **Immediate Dumping** — Token price crashes due to coordinated sell-offs after launch

## How STPP Works

### Security Mechanisms

- **Commit-Reveal Scheme** — Prevents front-running by hiding bid details until reveal phase
- **Merkle Tree Whitelisting** — Efficient access control for early participants
- **Early Participant Bonuses** — Rewards genuine early supporters
- **Oracle-Driven Adaptive Fees** — Automatically adjusts fees and pauses trading during volatility
- **Gradual Vesting** — Prevents coordinated sell-offs through time-locked distributions

### Running the tests
```
npm install 
npm run dev
