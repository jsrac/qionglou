<img alt="logo" src="https://user-images.githubusercontent.com/57232813/235366685-49e62e7d-bbfa-4aff-85f7-48945e8ec8f4.png" width="200">

# Contribution Guidelines

[简体中文](https://github.com/Jiangxue-team/qionglou/wiki/%E8%B4%A1%E7%8C%AE%E6%8C%87%E5%8D%97) -
[English](https://github.com/Jiangxue-team/qionglou/wiki/Contribution-Guidelines)

---

First and foremost, we extend our heartfelt appreciation for your support towards QiongLou. The component library is currently in rapid development, and we wholeheartedly welcome contributions in any form.

If you come across any areas in the documentation that you feel could be improved, we warmly invite you to submit an issue or pull request.

If you're interested in contributing code to QiongLou, we encourage you to follow the steps below:

**1.Fork this repository.**

**2.Clone the repository to your local machine.**

**3.Install dependencies:**

```ssh
pnpm i
```

This command will assist you in installing all the necessary dependencies. In case you don't have pnpm installed, you can do so by executing the following command:

```ssh
npm i -g pnpm
```

**4.Launch the documentation preview:**

```ssh
pnpm run start:docs
```

This command will help you initiate the documentation preview, allowing you to explore all the available components.

**5.Begin development on your local machine:**

```ssh
pnpm run start
```

This command will set up the local development environment. You can add your components to the `packages/qionglou` directory and export them in `packages/qionglou/index.ts`. To test and preview your developed components, import them in `start/App.vue`.

## Project Structure

Within each directory, you'll find a `README.md` file that contains helpful information related to that specific directory:

- `packages/qionglou`: Component source code.
- `packages/themes`: Component styles.
- `docs`: Documentation source code.
- `start`: Documentation preview source code.

## Commit Guidelines

| Type     | Description                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------- |
| feat     | Introduce a new feature                                                                             |
| fix      | Rectify a bug                                                                                       |
| docs     | Update documentation                                                                                |
| style    | Code formatting (e.g., spacing, semicolons)                                                         |
| refactor | Restructure code without impacting functionality                                                    |
| perf     | Enhance performance                                                                                 |
| test     | Add or update tests                                                                                 |
| build    | Modify project build or external dependencies (e.g., scopes: webpack, gulp, npm)                    |
| ci       | Adjust continuous integration configuration files or package scripts (e.g., scopes: Travis, Circle) |
| chore    | Alter build process or auxiliary tools                                                              |
| revert   | Revert previous code changes                                                                        |

### Code Submission

Before submitting your code, we kindly request that you carefully review it to ensure its accuracy. Additionally, we encourage you to utilize the project's built-in `vitest` to thoroughly test your components.

Once you've completed the development process, please submit your code to your forked repository and create a pull request to this repository. We will promptly review your submission.

We kindly ask you to ensure that your forked repository is up to date before submitting your code.

## Final Thoughts

We firmly believe in fostering an environment that promotes independent thinking and development rather than replication of existing component library source code.

We genuinely appreciate the opportunity for personal growth that comes with self-initiated solutions. If you encounter any challenges or require assistance, please do not hesitate to reach out to the project manager, who will be more than willing to provide support.

At the same time, we encourage ideas to be action-oriented. You can read our [Community Code of Conduct](https://github.com/Jiangxue-team/qionglou/blob/main/CODE_OF_CONDUCT.md) to view our policies and principles.

Special thanks to the authors of the following open-source projects. We extend our gratitude for your contributions.

<a href="https://github.com/Jiangxue-team/qionglou/graphs/contributors">
  <img alt="contributor" src="https://contrib.rocks/image?repo=Jiangxue-team/qionglou" />
</a>
