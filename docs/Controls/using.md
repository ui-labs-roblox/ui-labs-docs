---
sidebar_position: 4
---

# Using Controls

When your story is mounter, UI-Labs creates the controls and calls the story function again to update your interface. Your controls are passed as the props in the story function where you can access them and use them to modify your UI.

Let's use our controls in a story


## Using Luau

In Luau, you can access the `controls` key directly inside your props table


```lua
--HelloText.story.lua
local Roact = require(ReplicatedStorage.Roact)

local controls = {
   Text = "Hello UI-LABS!",
   Background = RGBA(Color3.new(1, 1, 1), 0),
   ["Text Color"] = Color3.new(0, 0, 0),
   ["Text Size"] = Number(20, NumberRange.new(5, 100), 1, true),
}

return {
   summary = "This is a test story with <b>Rich text</b>.",
   roact = Roact,
   controls = controls,
   story = function(props)
      return Roact.createElement("TextLabel", {
         Text = props.controls.Text,
         TextColor3 = props.controls["Text Color"],
         BackgroundColor3 = props.controls.Background.Color,
         BackgroundTransparency = props.controls.Background.Transparency,
         TextSize = props.controls["Text Size"],
         Size = UDim2.fromOffset(300, 50),
      })
   end,
}
```

## Using Typescript

In Typescript, you also can access the `controls` key inside your props table, but we have a problem, you need to type it first.

UI-Labs provides the ```WithControls<C>``` type that you can use to type your story table, this type takes your controls type as a generic parameter, and it will type the props for you.

You can also use `InferProps<C>` instead of you only want to type the props table, and `InferControls<C>` if you only want to type the controls key.


```ts
//HelloText.story.ts
import Roact from "@rbxts/roact";
import { WithControls } from "@rbxts/ui-labs";
import { RGBA, Number } from "@rbxts/ui-labs/out/ControlsUtil";

const controls = {
   Text: "Hello UI-LABS!",
   Background: RGBA(new Color3(1, 1, 1), 0),
   ["Text Color"]: new Color3(0, 0, 0),
   ["Text Size"]: Number(20, new NumberRange(5, 100), 1, true),
};

const Story: WithControls<typeof controls> = {
   summary: "This is a test story with <b>Rich text</b>.",
   roact: Roact,
   controls,
   story: (props) => {
      // all controls are typed, no errors!
      return (
         Roact.createElement("TextLabel", {
            Text: props.controls.Text,
            TextColor3: props.controls["Text Color"],
            BackgroundColor3: props.controls.Background.Color,
            BackgroundTransparency: props.controls.Background.Transparency,
            TextSize: props.controls["Text Size"],
            Size: new UDim2(0, 300, 0, 50),
         })
      );
   },
};

export = Story;
```

