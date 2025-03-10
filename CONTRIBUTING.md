# How to contribute

We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features

## Report a bug with detail, background and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be very specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- What you have tried so far to fix it but didn't work
- Notes (possibly including why you think this might be happening)
- You get extra kudos if you attach a failing test demonstrating that bug

## Submitting improvements

### Commit messages

We use github to host code, to track issues and feature requests, as well as accept pull requests.
We Use [lerna](https://github.com/lerna/lerna) with
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to automate our release process.
Versioning, changelogs and publication is all covered by this automation.
Please see some [commit message examples](https://github.com/semantic-release/semantic-release#commit-message-format)

Commit messages are really important in this process, and your PR will fail if your commit messages don't adhere to this convention.

### Submitting a fix

- Branch off of `master`
- Wherever possible, commit at least one test to demonstrate the bug
- Commit your code to fix that bug. Here's an example commit message for that fix:
  >     fix: Add null checks on DID Document result
  >
  >     Closes #17
- Create a PR for it
  - Mention the issue you're fixing in the PR (Example: **Closes #17**)

### Submitting a proposal

We prefer to discuss proposals before accepting them into the codebase.
Open an issue with as much detail and background as possible to make your case.
Small proposals can come in directly as PRs, but it's generally better to discuss before starting work.

Any contributions you make will be under the GNU General Public License v3.0

### Posting PRs

- Describe your changes in the PR description.
- Mention issues that are being fixed by the PR.
- Make sure any new code has tests associated!
- Make sure the documentation is still valid if your changes get included.

Thank you for your contribution!

### Publishing Packages

All packages for this project are published under the official UNCEFACT NPM organization: [uncefact](https://www.npmjs.com/org/uncefact).

To ensure the integrity and consistency of our releases, publishing rights have been limited to a small group of trusted advisers.

Currently, only [kshychko](https://github.com/kshychko) and [ashleythedeveloper](https://github.com/ashleythedeveloper) are authorized to publish new versions of packages.

If you encounter any issues or have questions regarding the publishing process, please open a ticket in this repository.

### Attribution

This contributing guide is based on the contributing guide for [Veramo](https://github.com/uport-project/veramo), one of vc-kit's core components.
