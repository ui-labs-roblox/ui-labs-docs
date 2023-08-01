---
sidebar_position: 1
---

# Configuring Controls

In order to add controls to your story, you must use [UI-Labs stories](../Stories/uilabs) format, and your `story` can only be a function that returns a Roact element.

You should add your controls in the `controls` key of your returned story table. We'll learn how to use our controls later, first let's see how we can create them

## Controls Format

Controls are a Dictionary of `Control Objects` where the key is the name of the control and the value is the **Control** itself