---
sidebar_position: 4
---

# Using Controls

UI Labs passes the current control values in the `story` function when it mounts, and everytime those controls change the story function is called again with the new controls.

Let's use our controls in a story

## Using Luau

In Luau, you can access the `controls` key directly inside your props argument

```lua {15-22}
local Roact = require(ReplicatedStorage.Roact)

local controls = {
   Text = "Hello UI LABS!",
   Background = RGBA(Color3.new(1, 1, 1), 0),
   ["Text Color"] = Color3.new(0, 0, 0),
   ["Text Size"] = Number(20, NumberRange.new(5, 100), 1, true),
}

local story = {
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

return story
```

---

## Using Typescript

In Typescript, you can access the `controls` key, but we have a problem, we need to type it first.

We can use the utility function `CreateRoactStory`/`CreateReactStory`, this enables type inference, so your controls are automatically infered.
Your `story` function key needs to be passed separatedly in the second `render` argument.

This also typechecks your `Roact/React` library and what the `story` function returns.

This function is only for typing, it's returning the same story table under the hood so it's not neccessary, but the recommended way of doing it.

```tsx
import { CreateRoactStory, Number, RGBA } from "@rbxts/ui-labs";

const controls = {
   Text: "Hello UI LABS!",
   Background: RGBA(new Color3(1, 1, 1), 0),
   ["Text Color"]: new Color3(0, 0, 0),
   ["Text Size"]: Number(20, 5, 100, 1, true),
};

const story = CreateRoactStory(
   {
      summary: "This is a test story with <b>Rich text</b>.",
      roact: Roact,
      controls: controls,
   },
   (props) => {
      <textlabel
         Text={props.controls.Text}
         TextColor3={props.controls["Text Color"]}
         BackgroundColor3={props.controls.Background.Color}
         BackgroundTransparency={props.controls.Background.Transparency}
         TextSize={props.controls["Text Size"]}
         Size={UDim2.fromOffset(300, 50)}
      />;
   }
);

export = story;
```

However, if you dont want to use the function you have more options:

We can use `InferProps<T>` to type your controls key and any extra keys included inside `props`

```ts {2,15}
import Roact from "@rbxts/roact";
import { RGBA, Number, InferProps } from "@rbxts/ui-labs";

const controls = {
   Text: "Hello UI LABS!",
   Background: RGBA(new Color3(1, 1, 1), 0),
   ["Text Color"]: new Color3(0, 0, 0),
   ["Text Size"]: Number(20, 5, 100, 1, true),
};

const story = {
   summary: "This is a test story with <b>Rich text</b>.",
   roact: Roact,
   controls: controls,
   story: (props: InferProps<typeof controls>) => {},
};

export = story;
```

We can also use `InferControls<T>`, this only types the controls key

```ts {2,15}
import Roact from "@rbxts/roact";
import { RGBA, Number, InferControls } from "@rbxts/ui-labs";

const controls = {
   Text: "Hello UI LABS!",
   Background: RGBA(new Color3(1, 1, 1), 0),
   ["Text Color"]: new Color3(0, 0, 0),
   ["Text Size"]: Number(20, new NumberRange(5, 100), 1, true),
};

const story = {
   summary: "This is a test story with <b>Rich text</b>.",
   roact: Roact,
   controls: controls,
   story: (props: { controls: InferControls<typeof controls> }) => {},
};

export = story;
```
