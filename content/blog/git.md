---
path: git
date: 2020-03-31
title: Go on... Git!
description: >-
  Learn some basics.
---

### Git commit messages
Make a write-up about my key takeaways.

(https://dev.to/ruanbrandao/how-to-make-good-git-commits-256k)

Commits should be written in an **imperative** style to help complete a sentence
like this, **"If applied, this commit will..."**.

```
623509 Style login page buttons
f12144 Fix duplicate email delivery bug
23c30c Refactor UserAccount module
```


## Git logs
### Aliases
[oh-my-zsh git cheatsheet](https://github.com/ohmyzsh/ohmyzsh/wiki/Cheatsheet)

Show previous (2) commits
- `glg` : `git log -p -2`

Show names of files changed in each commit *(Slightly more detailed than `git log`)*
- `glg` : `git log --stat`

Show list of commit ids and message
- `glo` : `git log --oneline --decorate`

Show list of commits with ids, message, dates, and author
- `glol` : `git log --graph --pretty=\'%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset\'`

