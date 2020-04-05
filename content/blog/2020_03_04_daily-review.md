--- 
title: "Daily Review - 3/4/20" 
date: "2020-03-04" 
---

## 03/04/20

I learned that when defining Ecto schemas, you don't specify the field name if
you're linking that column to another table. It will take on the field property
of the column in the table it's linking to.

For example...

```elixir
  schema "inbox_user_groups" do
    field :inbox_id, :integer
    field :uid, Ecto.UUID, read_after_writes: true
    field :user_group_uid, Ecto.UUID

    timestamps()

    belongs_to :inbox, Inbox
  end
```

The above does not work because it's trying to set the `inbox_id` on the
`belongs_to :inbox, Inbox` line, but it's already set as a field first.

For this to work I had to remove the following line.

```elixir
  field :inbox_id, :integer
```

## 03/11/20

I learned that running `docker stats` in **Platform** will show what container is using most
of the **CPU** and **memory**

## 04/05/20

I downloaded the [Dark Reader](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh?hl=en-US) 
app from Chrome and it is sweet!
