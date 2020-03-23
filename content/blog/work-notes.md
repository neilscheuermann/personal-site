--- 
title: "Work Notes" 
date: "2020-02-05" 
---

## When pulling from master in Elixir repos

When pulling from master, if you see the mix.exs or mix.lock has changed you
likely need to run `mix deps.get`. If there are new /migrations/ files, you’ll
likely need to run `mix ecto.migrate`

---

## Spinning up Docker

Open platform, pull from master, then run - `bin/halberd/start && dcud stormcrow
rapidash arth0-web akron-hammer && dc stop schema-registry akron-hammer`

(**Updated to restart platform**) `bin/auth/restart && dcud rabbitmq akron-hammer
rapidash && dc stop schema-registry review-rocket-web && dc ps`

---

## To start web 🖥

**BlackMamba:**
- `mix phx.server`
- `mix worker.start`
- `mix twilio_status_worker.start`

**Kazaam:** 
- `yarn start`

**Magic:** 
- `mix phx.server`

**Stormcrow:** 
- `mix phx.server`

**Mithrandir:** 
- `yarn start`

**In the podium folder:** 
- `./ngrok http --subdomain neilsch 4000`

**To run Team Chat:**
**AkronHammer:** 
- `mix phx.server`

If I need to run **Rapidash**, and Rapidashk keeps trying to force connect to port 4000, run `PORT=4300 mix phoenix.server`

---

## To start mobile 📱

When *switching between branches that have different deps*, run `make reset-deps &&
make clean && make server` to clean out previous builds and get everything
running smoothly. Can take about **8-10 minutes**.

To reset server build, run `make reset-server`

For quick reset, `make quick-reset-server`

**Link:** 
- `mix phx.server` 

**Navi**: 
- `make deps` to install dependency updates.
- `make server`  
- iPhone: 
  - `make run-ios` 
- Android:
  - `make run-android` (must have Android Studio running and open virtual android device).  
- Can specify ios device with `react-native run-ios --simulator="iPhone 11"`

**Podium**: 
- `./ngrok http --subdomain neil_link 9001` (**IMPORTANT**:
Need to replace line 1 in Navi .env to be
`RN_API_HOST='http://neil_link.ngrok.io'` 

**Start dev-tools** 
- **~**: `open "rndebugger://set-debugger-loc?host=localhost&port=8081"` 
- “Cmd + D” -> “Debug JS Remotely” to see Chrome devtools in the computer
  browser.

---

## Mobile - deving on physical device📱

  Plug phone into computer, open x-code and select Navi-dev then click the play button. 
  - If I get an error like this, "**Can’t fing the ‘node’ binary to build the React Native bundle.**", do the following.
  - Got to `ios/Navi.xcodeproj/project.pbxproj`
  - Search for `NODE_BINARY` in the file
  - Run `which node` in any terminal window
  - Replace the value of `NODE_BINARY` with the value of `which node`
  - Mine in this case was `/Users/neilscheuermann/.asdf/shims/node`

  Can shake phone to open dev tools.

Remember to delete the app (dev version) and re-download regular app when I’m done deving.

---

## To be able to text back and forth locally

Can text back at **+1 254 374 2016** by doing the following:
- Go to “locations” in the ReviewRocket DB and replace “podium_number” with `+12543742016`

---

## To run tests

**Navi:**
- `make test`
- `make test-single filePath=<file path>` 

**BlackMamba, Magic, Link:**
- `mix test <relative_path_to_file>` [optional: :line_number_of_test]

**To reset snapshot:** 
- `npx jest -u`

---

## To test changes while mocked
Run this in the console of the webpage.
- `document.cookie="mockIdToken=<idToken>"`
- **Grab idToken from local host in cookies.**

---

## To flip the messenger_inbox_inabled feature flag
Go to **platform** and run `docker-compose exec halberd-web mix flags.flip --for org
--uids f4ac4bcb-e271-5a92-8e43-1d676a8821fa --slugs messenger_inbox_enabled`

---

## To enable or disable viewAllLocations
- Go to **organizations** inside **review rocket**, and add a date to `all_locations_mode_enabled`
- Might have to run this in **docker** if the changes aren’t being reflected.
  - `dc exec halberd-web mix cache.warm`

---

## Accidentally committed to master
1. Create a new branch from master containing the code you were trying to commit.
2. Checkout master again.
3. Run `git reset --hard origin/master` (it should hard reset it to the last spot before the commit.

---

## IEX scripts
- `iex`
- `iex -S mix phx server`

---

## To undo a change in git
`git checkout origin/master -- <relative_file_path>`

---

## How to see different diffs
https://stackoverflow.com/questions/35978550/how-to-show-uncommitted-changes-in-git-and-some-git-diff-in-detailed/35978722#35978722

---

## iTerm Shortcuts ⌨️
See **iTerm2 -> Preferences -> Keys**

---

## Find updated .env Vars
- Go to [vault](https://vault.podium-dev.com/ui/vault/secrets).
- Select **env_vars -> dev -> engineering**

---

## To run linter like Gitlab
`mix credo list --verbose --strict`

---

## To send attachments locally that aren’t pics/vids
Must be running **Barbados**.

---

## Numbers to use for dev
```
801 389 2710  - spam number that called me this morning.
303 289 6786 - another spam number
801 628 3842 - another spam number
801 721 7976 - another spam number
801 369 5708- another spam number
```

