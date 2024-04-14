---
sidebar_position: 7
---

# Enviroment Manipulation

UI Labs **Hot-Reloader** uses a combination of `loadstring` and `setfenv` to modify the current story enviroment, this is used to replace the `require` function, the `script` global, and the `_G` table.

This is needed to allow isolation and avoid module require caching, but addionally, UI Labs injects some functions that can be useful inside the enviroment

Because the whole story enviroment is virtually reloaded, those functions can be accessed from anywhere in your story using the `Enviroment` utilities inside the UI Labs package

---

### `Enviroment.IsStory(): boolean`

**Checks if the enviroment is a story**. Returns true if it's running inside of a Story enviroment.<br></br><br></br>
It's recommended to check this before using any Enviroment function, however most functions default to an empty function and are safe to be called in non-story enviroments

---

### `Enviroment.Unmount()`

**Unmounts the story**. This is useful in cases where a close button cant be used, or when the story should no longer keep running

> _Defaults to an empty function for non-story enviroments_

---

### `Enviroment.Reload()`

**Reloads the story Hot-Reloader**. This is useful if you wanna force a reload when something changed, or can be an alternative to `Enviroment.Unmount`

:::warning Warning
This has the potential to cause an infinite loop.
:::

> _Defaults to an empty function for non-story enviroments_

---

### `Enviroment.CreateSnapshot(name?: string)`

**Creates a Snapshot**. This does the same [Create Snapshot](../Plugin/utils.md#creating-snapshots) button does. Useful for cloning the UI state automatically.<br></br>
An optional `name` can be given for the created `ScreenGui` (defaults to the story name).

> _Defaults to an empty function for non-story enviroments_

---

### `Enviroment.GetJanitor(): Janitor`

**Gives you a story Janitor**. This gives you a janitor object that gets destroyed when the story is Unmounted/Reloaded.<br></br>
Useful for cleaning things up globally without necessarily having to access the cleanup functions

> _This function will return `nil` for non-story enviroments but it's typed as if it doesnt for convenience_

---

### `Enviroment.EnviromentUID` _string_

**Enviroment `GUID`**. This gives you a `HttpService` GUID for the enviroment, changing everytime the story gets reloaded

> _Defaults to an empty string for non-story enviroments_

---

### `Enviroment.PreviewUID` _string_

**Preview `GUID`**. This gives you a `HttpService` GUID for the story preview, changing everytime the story is mounted, but staying the same between reloads

> _Defaults to an empty string for non-story enviroments_

---

### `Enviroment.OriginalG` _table_

**Original `_G`**. Holds the original `_G` table. Can be used to leave the sandboxed enviroment

> _Defaults to the c \_G table for non-story enviroments_

---

### `Enviroment.PluginWidget` _DockWidgetPluginGui_

**Plugin Widget Window**. This is the widget where the plugin is mounted. `Sounds` will only be played in Edit Mode if they are parented on a widget gui, so this is useful in this case.<br></br><br></br>

:::info
It is safe to parent Instances inside the Widget. however you dont wanna touch the `App` frame
:::

> _Defaults to nil for non-story enviroments_
