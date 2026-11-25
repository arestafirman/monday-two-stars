# Two Stars: Badge, Lift, and a 2019 Sandwich

[![Monday, Reviewed in One Line](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1.svg)](https://make.fun/c/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![Rank](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/arestafirman/monday-two-stars/rank.svg)](https://make.fun/c/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![Reward](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/arestafirman/monday-two-stars/reward.svg)](https://make.fun/c/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)

A one-line, two-star review of a Monday, written in the format of a product review: a star rating followed by three measured details.

> Two stars: the lift dropped me at the wrong floor three times, my badge opened every door except mine, and lunch was a vending-machine sandwich from 2019.

## Why this angle

The field is crowded with the same "one star" complaint: a count of unread emails, a standup that ran long, a meeting about a meeting. This entry deliberately avoids all of that. It gives the Monday two stars instead of one, and its three details are all physical and countable: the lift stopping at the wrong floor three times, a badge that opened every door except the reviewer's own, and lunch as a vending-machine sandwich dated 2019. The sandwich is the punchline — a literal artefact with a year on it — and it lands in the final clause, before the reader gives up on the line.

## How it works

`main.ts` is a dependency-free Node/TypeScript program. It holds the entry text as a constant, checks that it is between 1 and 200 characters (the competition gate), and writes it — plus a trailing newline — to `/output/entry.txt` (or to `$OUTPUT_DIR/entry.txt` when that variable is set). No network, no randomness, no input is read.
