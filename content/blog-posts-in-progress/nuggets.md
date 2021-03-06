# Coding or Workflow Nuggets

## Elixir

### Recommendation to use if/else over case and width, if possible
From [gitlab review conversation](https://gitlab.podium.com/engineering/messenger/black_mamba/-/merge_requests/3407/diffs)

Under the hood both `if/else` and `with` translate to `case` clauses. There is no 
difference between then from the perspective of the language. The real difference is "readability".

Usually, we prefer `if/else` over `case/with` whenever possible because it's easier to read.

In this case I would go with something like this:

```elixir
org_string = Keyword.get(parsed, :organization_uids)

if org_string != nil do
  # ...
else
  # ...
end
```

`with` clauses are way more powerful but are also a little harder to read/reason. 
They can often hide some subtle issues to so I'd use them only when an `if` or `case` 
ends up too complicated/verbose/weird.

### Use `Enum.empty?(list)` instead of `length(list) == 0` or `length(list) != 0`

General comment: `length` required the traversal of the whole list. Since you just want to check 
whether the list is empty or not, this is not really required. `Enum.empty?/1` is the recommended 
solution in this case and it also avoids traversing the whole list.

ref: https://github.com/rrrene/credo-proposals/issues/44

### When to use bangs (&&, ||, !) or boolean operators (and, or, not)

As a rule of thumb, use and, or and not when you are expecting booleans. If any of the arguments are non-boolean, use &&, || and !.

ref: https://elixir-lang.org/getting-started/basic-operators.html



### Function clauses much equate to `true`
Function clauses will only run if guard evaluates to `true` not just 
a truthy value. This does not work...

```elixir
def not_nil_head?([head | _]) when head, do: true
def not_nil_head?(_), do: false

not_nil_head?(["some_value", "another_value"])
#=> false
```

but this does...

```elixir
def not_nil_head?([head | _]) when head != nil, do: true
def not_nil_head?(_), do: false

not_nil_head?(["some_value", "another_value"])
#=> true
```

See the docs for more information regarding [ Failing Guards ](https://hexdocs.pm/elixir/master/patterns-and-guards.html#failing-guards)

### Using a `for` expression when facing a match-based filter

Example using a match-based filter

```elixir
org_uids_with_inboxes_already_enabled =
  ["messenger_inbox_enabled"]
  |> halberd_client_authorized().organization_flags(org_uids)
  |> Enum.filter(&match?({_org_uid, %{"messenger_inbox_enabled" => true}}, &1))
  |> Enum.map(fn {org_uid, _} -> org_uid end)
```

How to utilize the `for` expression

```elixir
flag = "messenger_inbox_enabled"
organization_flags = halberd_client_authorized().organization_flags([flag], org_uids)

org_uids_with_inboxes_already_enabled =
  for {org_uid, %{^flag => true}} <- organization_flags, do: org_uid
```

## Gatsby

### Gatsby fluid images take the size of their container
 
When using flexbox with fluid images, the flex item takes on the width of it's
element, which in this case is the `fluid` that has no width.

See this stack overflow response for more details. (https://stackoverflow.com/questions/56928410/image-disappears-when-container-becomes-flex-container-gatsby)

### Can pass an aspectRatio to a Gatsby image with the `sizes` attribute

Ex: `<Img sizes={{...data.banner.childImageSharp.fluid, aspectRatio: 21/9}}/>`

