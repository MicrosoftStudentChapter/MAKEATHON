## Welcome Contributors

✨🎉Firstly thank you for taking out your precious time to contribute.
We here at MLSC welcome all the contributors.✨🎉

The following is a set of guidelines for contributing to Makeathon 3077 and its packages. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.🤝

## Table of Contents

1. [Dev Environment Details](#dev-environment-details)
2. [How to Submit Changes](#how-to-submit-changes)
3. [Style Guide](#style-guide)
4. [Where Can I Ask for Help?](#where-can-i-ask-for-help)

## Dev Environment Details

### Advice for new contributors

Start small. The PRs most likely to be merged are the ones that make small, easily reviewed changes with clear and specific intentions.

It's a good idea to gauge interest in your intended work by finding the current issue for it or creating a new one yourself. Once you've spent a little bit of time planning your solution, it's a good idea to go back to the issue and talk about your approach.

### Developer Setup

- Fork and clone the repository.
- Navigate into the directory and add upstream URL
- Install [Pipenv](https://pypi.org/project/pipenv/)
- Create a `.env` file in the root directory and paste the contents of `.env.example` with the necessary changes.
- Open a terminal window and run the following commands:

```
pipenv install
pre-commit install
```

- This will setup the project requirements. You can run the following commands and start the server

```
python manage.py runserver
```

- You can optionally migrate the database by using the following command:

```
python manage.py migrate
```

## How to Submit Changes

1. #### The First Step

- First things first, fork the MAKEATHON [repository](https://github.com/MicrosoftStudentChapter/MAKEATHON) into your own GitHub account, and create a local clone of it. This will be used to implement new features and fix bugs.
- Open this local repository on your personal computer and start implementing.
- UNDER ANY CIRCUMSTANCE DON'T WORK DIRECTLY ON THE MASTER BRANCH, but create a separate branch for each issue you are working on. That way you can easily switch between different work, and you can update each one for latest changes on upstream master individually

2. #### The Second Step

- Go to the original remote repository and checkout the [issues tab](https://github.com/MicrosoftStudentChapter/MAKEATHON/issues) and comment on the issue want to work on.
- The issues will be assigned on first request basis by a maintainer.

3. #### The Third Step

- Once all the changes have been made, generate a pull request(PR) and add at least one of the Maintainers as a Reviewer for the same.
- When the Reviewer fully accepts the features or the issue is fully resolved your branch will be merged with the master branch.

4. #### IMPORTANT GUIDLINES

- Prettier for HTML, CSS, JS files.
- Set Tab-width: 4
- Indent inner HTML code.
- Follow PEP guidelines.

5. #### Other Important Points

- Write meaning commit messages, briefly detailing whatever changes you have done or added.
- It is important that you link the concerned issue with the pull request (In the description of your PR write "This fixes #).

## Style Guide

Format JS, CSS, HTML files using [Prettier](https://prettier.io) before creating a pull request.

Documentation styleguide involves [Markdown](https://daringfireball.net/projects/markdown/).

Python is styled using [PEP8](https://www.python.org/dev/peps/pep-0008/).

## Where Can I Ask for Help?

We have a Discord Community where you can stay updated with our latest developments and active members willing to help you out if you have any questions.

- [MLSC Discord](https://discord.gg/CpAPtDC)
