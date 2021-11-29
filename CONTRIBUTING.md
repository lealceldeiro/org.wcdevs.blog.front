# Contributing to wcDevs.org

First off, thanks for taking the time to contribute! :+1:

The following is a set of guidelines for contributing to this project. These are mostly guidelines,
not rules. Use your common sense and best judgment, and feel free to propose changes to this
document in a pull request.

## Table Of Contents

[Code of Conduct](#code-of-conduct)
  
[How Can I Contribute?](#how-can-i-contribute)

* [Reporting Bugs](#reporting-bugs)
* [Suggesting Enhancements](#suggesting-enhancements)
* [Pull Requests](#pull-requests)
* [Git flow](#git-flow)

## Code of Conduct

This project and everyone who participates in it is governed by the
[Code of Conduct](CODE_OF_CONDUCT.md). By participating in it, you are expected to keep this code.
Please report any unacceptable behavior to [lealceldeiro@gmail.com](mailto:lealceldeiro@gmail.com).

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might
find out that you don't need to create one. When you are creating a bug report, please
[include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out
[the required template](https://github.com/lealceldeiro/org.wcdevs.blog.front/issues/new?assignees=lealceldeiro&labels=bug&template=bug_report.yml&title=%5BBug%5D+),
the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're
> experiencing, open a new issue and include a link to the original issue in the body of your new
> one.

#### Before Submitting A Bug Report

* **Perform a [search](https://github.com/lealceldeiro/org.wcdevs.blog.front/labels/bug)** to see if
the problem has already been reported. If it has **and the issue is still open**, add a comment to
the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue by
providing the following information by filling in
[the template](https://github.com/lealceldeiro/org.wcdevs.blog.front/issues/new?assignees=lealceldeiro&labels=bug&template=bug_report.yml&title=%5BBug%5D+).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects,
or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the
issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the
problem with that behavior.
* **Explain which behavior you expected to see instead and why.**

### Suggesting Enhancements

Before creating enhancement suggestions, please check
[this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need
to create one. When you are creating an enhancement suggestion, please
[include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in
[the template](https://github.com/lealceldeiro/org.wcdevs.blog.front/issues/new?assignees=YuryDG&labels=feature&template=feature_request.yml&title=%5BFeature+Request%5D+),
including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* **Perform a [search](https://github.com/lealceldeiro/org.wcdevs.blog.front/issues?q=is%3Aopen+label%3Aenhancement%2Cfeature)**
to see if the enhancement has already been suggested. If it has, add a comment to the existing issue
instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/).
[Create an issue](https://github.com/lealceldeiro/org.wcdevs.blog.front/issues/new?assignees=YuryDG&labels=feature&template=feature_request.yml&title=%5BFeature+Request%5D+)
and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as
possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you
use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and
why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of the project
which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS
and Windows, and [this tool](https://github.com/colinkeenan/silentcast) on Linux.
* **Explain why this enhancement would be useful**.
* **Specify the name and version of the OS/browser you are using to visit our site

### Pull Requests

The process described here aims to:

* Maintain the project code quality.
* Fix problems that are important to users.

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](https://github.com/lealceldeiro/org.wcdevs.blog.front/blob/main/.github/pull_request_template.md).
2. After you submit your pull request, verify that all
[status checks](https://help.github.com/articles/about-status-checks/) are passing.
<details><summary>What if the
status checks are failing?</summary>If a status check is failing, and you believe that the failure
is not related to your change, please leave a comment on the pull request explaining why you believe
the failure is unrelated.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the
reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull
request can be ultimately accepted.

### Git flow

#### Branch names

Branch names should start with one of the following, depending on what the intention is:

- `fix` for but fixes
- `feature` for a new feature implementation
- `enhancement` for an enhancement implementation

After one of the previous prefix add a slash (`/`) and the issue number which causes the changes to
be implemented. Lastly, add a short description of the intended change. Examples:

- `fix/104-check-for-token-validity-in-security-config`
- `feature/284-implement-user-details-endpoint`
- `enahancement/734-improve-custom-claims-retrieval-from-auth-token`

#### Commit messages convention

To have a consistent git history the commit messages should follow the following pattern:
```text
<type>(<ITEM ID>?): <subject>
```
##### `<type>` should be one of:

- `build`: Changes that affect the build system or external dependencies (example scopes: yarn)
- `ci`: Changes to our CI configuration files and scripts (example scopes: GitHub actions)
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation
- `docs`: Documentation only changes
- `feat`: A new feature
- `fix`: A bug fix
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `revert`: A commit that reverts a previous one
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- `test`: Adding missing tests or correcting existing tests

#### `<ITEM ID>` -- The related issue, user story or defect

- For user stories, you should use `US-` as prefix. i.e.: `feat(US-237): User subscription`
- For non-related issues or defects you should leave it blank. i.e:
`refactor: Improve code style in SecurityConfig class`

#### `<subject>`

The subject contains a succinct description of the change.

#### Helping to ensure these practices
To help you ensure these practices there are some (shell scripts) git hooks in
[`scrips/git/hooks`](./scripts/git/hooks) that you can copy to your local copy of the project inside
the appropriate directory (`<root_dir>/.git/hooks`), so they're executed by git in each phase
([see docs for more info](https://git-scm.com/docs/githooks)).

These hooks will override any custom hook you'd had defined already with the same name, so, you can
check first the names of the files before copying them. So, to do so (in a unix environment),
execute

```shell
cp -r scripts/git/hooks .git
chmod +x -R .git/hooks
```

For more info about these commands check [cp-invocation](http://www.gnu.org/software/coreutils/cp)
and [chmod-invocation](http://www.gnu.org/software/coreutils/chmod).

These are not hard rules, but rather best practices, so, if you enable these git hooks in your local
copy of the project, and later you need to bypass any of them, you can use the `--no-verify` option
(although it's highly discouraged to do so) -- example: `git push --no-verify`.
