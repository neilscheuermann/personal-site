--- 
title: "Daily Review - 2/26/20" 
date: "2020-02-26" 
---

## 2/26/20

### [**with**](https://hexdocs.pm/elixir/Kernel.SpecialForms.html#with/1) ([Kernel.SpecialForms](https://hexdocs.pm/elixir/Kernel.SpecialForms.html#content))

I learned a lot about using the `with()` kernel in Elixir when working on a mix
task at work.

It essentially only executes the block of code if the conditionals are truthy.
But they execute in order, preserving variables that are created to be used by
the following conditions. They only exist in the conditional scope though.

```elixir
defp changeset_valid?(changeset) do
    if changeset.valid? do
        :ok
    else
        :invalid_changeset
    end
end

defp do_something() do
    organization_uid = get_field(changeset, :organization_uid)
    uid = get_field(changeset, :uid)

    with :ok <- changeset_valid?(changeset),
         inbox <- Inboxes.get_by(%{uid: uid}),
         false <- inbox.is_default_inbox do
        changeset
    else
      :invalid_changeset ->
        changeset

      _ ->
        Logger.error(
          "Cannot delete inbox #{uid} because it is the default inbox. (Org_uid: #{
            organization_uid
          }.)"
        )

        add_error(changeset, :uid, "- Cannot delete the default inbox")
    end
end
```

Here are some examples.
