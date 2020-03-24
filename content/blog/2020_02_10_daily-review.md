--- 
title: "Daily Review - 2/10/20" 
date: "2020-02-10" 
---

## 2/10/20

### Keyboard Setup

I can flash my keyboard by typing `make <keyboard_name>:<my_layout>:avrdude`,
and then I don't have to use the QMK Toolbox app. In my case it's going to be
`make crkbd:neilscheuermann:avrdude`

I have to plug into the left Corne keyboard or it will swap my keys.

I should also **NEVER** unplug the TRRS cable connecting the two or it could fry the
keyboard processor.

I'm having a hard time with `c`, `x`, and `z` on the left, and `,`, `.`, and `/`
on the right because I keep hitting them too close to the trailing keypress. It
then combines the two and does alt, shift, or command with the key. I can change
the time by adding `#define TAPPING_TERM 150` to the **config.h**


## 2/12/20

Today I learned that I can do a **for loop** type thing in **elixir** with the
following syntax... and that it returns a new list, kind of like Javascript's
Array.map() method.                                   

    for item <- [1, 2, 3] do
      IO.inspect(item)
      item
    end

In comparison, `Enum.each` only returns an `:ok` tuple.

    Enum.each([1, 2, 3], fn item ->
      IO.inspect(item)
      item
    end)


## 2/12/20

I can switch panes with nav layer i and o, and tabs with shift nav layer i and
o.


## 2/12/20

I'm getting faster at typing on my keyboard and am quite enjoying it. I found
the next keyboard I want to make! It's a low profile corne and looks soooo dope!

![low profile corn keyboard](https://pbs.twimg.com/media/D1oWA7WWkAU8Raw.jpg)


## 2/14/20

I can add ASCII images and words into my code by adding an alias like this to my
.zshrc file.

```markdown
alias asciipull="
    echo '*****************************************************************************************************************************' &&
    echo '__________      .__  .__  .__                 ___________                          _____                   __' &&
    echo '\______   \__ __|  | |  | |__| ____    ____   \_   _____/______  ____   _____     /     \ _____    _______/  |_  ___________' &&
    echo ' |     ___/  |  \  | |  | |  |/    \  / ___\   |    __) \_  __ \/  _ \ /     \   /  \ /  \\__  \  /  ___/\   __\/ __ \_  __ \' &&
    echo ' |    |   |  |  /  |_|  |_|  |   |  \/ /_/  >  |     \   |  | \(  <_> )  Y Y  \ /    Y    \/ __ \_\___ \  |  | \  ___/|  | \/' &&
    echo ' |____|   |____/|____/____/__|___|  /\___  /   \___  /   |__|   \____/|__|_|  / \____|__  (____  /____  > |__|  \___  >__|' &&
    echo '                                  \//_____/        \/                       \/          \/     \/     \/            \/' &&
    echo '*****************************************************************************************************************************' &&
"
```


## 2/14/20

I learned that each step or plug in an Ecto changeset needs to return the
changeset or else the whole thing will fail.

Using `add_error` in the changeset will add an error that gets returned to the
user via the graphql response, but using `Logger.error` will put output in the
logs for developers purposes. Can add things like **uids** to the `Logger`
output to help with debugging.

I also learned that `Repo.Transaction` will make sure that the multiple ecto
queries or mutations return the expected results without errors or it will
rolback any changes it already made.

If I mock something in my code, it will return a default mock, unless I want to
respond with a non-typical response, such as an error.

For example

    defp graphql, do: mockable(ReviewRocket.GraphQL, by: ReviewRocket.GraphQL.Mocks)

The default mocks would be found in `ReviewRocket.GraphQL.Mocks`


## 2/14/20

I learned to use Elixir's `with` syntax ([official docs](https://hexdocs.pm/elixir/Kernel.SpecialForms.html#with/1)) 
to ensure that some variable exists and is not **nil**. I can add **guard clauses** 
to my **with** statement for further filtering.

