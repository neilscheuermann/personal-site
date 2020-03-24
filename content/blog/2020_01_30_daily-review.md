--- 
title: "Daily Review - 1/30/20" 
date: "2020-01-30" 
---

## 1/30/20

- To format a file to wrap text
  - I can wrap text in Vim by visually selecting a section and typing `gq`. 
  - Added a shortcut in .vimrc to **visually select the whole file** with
  `<Leader>sa`.
- I found out that **graphql queries** are re-run if any of the props passed to
  mapProps change.
- I downloaded an application called [Vim Markdown
  Preview](https://github.com/JamshedVesuna/vim-markdown-preview) from github
and it allows me to live preview my markdown files as I'm typing.
  - Toggle live preview with F6, as set in my .vimrc
  - It's pretty sweet because it will also scroll in the web as I scroll in the
    markdown file!! 🤯
- I was having a hard time with the syntax highlighting in markdown files for
  *italics* and **bold**, where it hid the `*'s` while highlighting the italics,
and very slightly bolding the bold.
  - After searching for a while I found that adding `au FileType markdown setl
    conceallevel=0 ` to my .vimrc will now show the `*'s`.

## 1/31/20

- I learned the difference between relative and absolute numbers in vim. 
  - Relative: gives the lines below and above the current line a relative
    number. Can jump up and down a certain range with `5j` or `15k`, for
example.
  - Absolute: Default, sequential numbering.
  - To toggle relative/absolute numbers and show/hide numbers (found in .vimrc)
    - `<Leader>r`: toggles relative/absolute numbers
    - `<Leader>R`: toggles show/hide numbers
- I was reminded to break down my tasks into smaller pieces, and look for the
  happy faces (familiar aspects of task) such as what props are available to the
component or its parent.

## 2/1/2020

##### To show asterisks or underscores in markdown files
- `:set conceallevel` will tell me what **conceallevel** is currently set at.
- `:verbose set conceal level` tells me how and where it was set last.
  - The message looks likes this.
  - ![:verbose response](../../../images/blog/2020-02-01-verbose-set-conceallevel.png)
- `:set conceallevel=0` will show **asterisks** when I type in a markdown file.
- I created a vim mapping for `:set conceallevel=0` with `<Leader>sc`

## 2/3/2020

Deep nested object destructuring:
```javascript
const props = {
  conversation: {
    inboxUid: "000"
  }
}

const { conversation: { inboxUid } } = props

console.log(inboxUid) // "000"
```

---

I remembered the delete operator on the "Object" JS Object.
```javascript
delete myObj.key1 // Removes that property from the myObj object.
```

---

I learned that `git commit -v` (*which stands for verbose*) will **show the unified 
diff** between the HEAD commit and what would be committed at the bottom of the commit message.

---

##### One of my favorite vim tools... [**marks**](https://vim.fandom.com/wiki/Using_marks)🔥
- You can set **file specific** marks with a lower case letter, and **global marks**
  with an uppercase letter.
- You can set an absolute "mark" by typing `mJ` and then jump to that mark with
  `'J`. 
  - I frequently use this to jump to my `.vimrc` and `.zshrc` with `'V` and
    `'Z`.
  - I've also set this **Daily Review** as my destination for `'M`.

## 2/4/2020

Today I'm going to focus more on using [**marks**](https://vim.fandom.com/wiki/Using_marks) throughout my workflow, not just
to get to my `.vimrc` or `.zshrc`.
- I used `J`, `K`, and `L` marks for my daily workflow today. I just use `J`
  first, then `K` and `L`.

I'm also going to pick a new vim color theme using [vimcolor](https://vimcolors.com).
- I tried installing
  [nightfly](https://github.com/bluz71/vim-nightfly-guicolors), but it made the
column numbers and regular lines the same color which was weird, and NOT what
they showed in their [preview](https://vimcolors.com/1185/nightfly/dark)...


## 2/5/2020

I found out that in the React Native Debugger, I can toggle the **Redux dev
tools** with `<command> + <option> + j` and **React dev tools** with 
`<command> + <option> + k`. The cool thing is that it will save computing power
when they're turned off too.

Today I have just been ***super fucking*** frustrated as I've battled again to just
get my local environment ready to dev on. I couldn't figure out how to get it
running on my physical iPhone and be able to debug. It would only bundle and
show up if I walked over to the mobile team.


## 2/6/2020 

When trying to use `getByTestId()` from the [react testing library](https://testing-library.com/docs/dom-testing-library/api-queries#bytestid)
I was unable to query for the testID on a component that was doing some
different animations. I had to wrap it in a react native `View` component.

It ended up looking like this.

```JSX
<View testID='assigned-filter-banner'>
  <SelectedFilter
    assignedFilter={assignedFilter}
    currentUserId={currentUser.id}
    onClose={this.clearAssignedFilter}
  />
</View>
```

Found out I can add `JSX` after the `` ``` `` in the codeblock above to have it
syntax highlight like JSX.

I can add `` ` ``'s into a code line by surrounding the code with two
**backticks** on each side instead of one.

Just used this [stack overflow](https://stackoverflow.com/questions/1878974/redefine-tab-as-4-spaces)
to set my **tab width** to 2 spaces, as it was defaulting to 8 spaces in my
**./vimrc** and **markdown** files.


## 2/7/2020

I was reminded of the technique of taking a few **deep breath‘s** to re-center
myself and give my mind a little boost.

When I Google and learn about something at work, I’m **collecting** a lot of little
**data points** and eventually they all come together to show me the **big picture**.
I’m still making progress, even if it doesn’t feel like I am.

I feel way more successful when I **plan out my approach** to my daily/weekly task
and then **ask a teammate** what their thoughts are and how they would approach
it. It saves me time and teaches me their mindset and approach. 
