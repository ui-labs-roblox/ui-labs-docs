---
sidebar_position: 5
---

# Extra Features

Addionally, let's view some other useful features/options that UI Labs has.

---

### View On Explorer

You can view the Instances tree of your story by pressing "View On Explorer".<br></br> _It's not recommended to change these instances_

![ViewOnExplorer](img/viewonexplorer.png) ![Explorer](img/explorer.png)

---

### Mounting in Widget

You can use a separated widget window for your stories. This enables fullscreen mode, distraction-free GUIs, plugin-like visualization, and multi-monitor setups. Right click your story and choose **Mount In Widget**

![WidgetMount](img/widgetmount.png)

You can switch between **Widget/Editor** mode by clicking your story preview and selecting **Mount In Editor/Mount In Widget**

![MountInEditor](img/mountineditor.png) ![MountInWidget](img/mountinwidget.png)

---

### Auto-Reloading

By default, UI Labs will detect any changes on the scripts you have required and automatically reload the story, however you can turn this off. <br></br>

This allows you to do things like comparing before/after by mounting the story twice and toggling Auto-Reloading off in one of them.<br></br>
For this, right click your story and toggle **Auto-Reload**

![MountInEditor](img/autoreload.png)

---

### Hiding Stories

You can hide stories when you have multiple of them mounted. This disables the `Visible` property.
For this you can right click your story and choose **Hide**. You can show it again by clicking **Un-Hide**

![Hide](img/hide.png) ![Unhide](img/unhide.png)

---

### Creating Snapshots

You can create a snapshot of the current state of your story. This clones all instances of your story and adds them in a separated `ScreenGui` inside `StarterGui`.<br></br>

Keep in mind that this only clones the instances, so no code will be running here

![CreateSnapshot](img/createsnapshot.png) ![Snapshot](img/snapshot.png)
