- --

<h1 style="text-align: center;"> Don't Keep</h1>

> A note taking app for people who take notes and never come back to them again.
###### Created with [React.js](https://reactjs.org/ "reactjs.org"), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/ "developer.mozilla.org"), [Material UI](https://mui.com/ "mui.com").


# Install dependencies
---

Install [Create React App](https://create-react-app.dev/ "create-react-app.dev")<br>
`npx create-react-app dont-keep`<br>
`cd dont-keep`

Install [React Router DOM](https://reactrouter.com/ "reactrouter.com")<br>
`npm install react-router-dom@6`

Install [Material UI component library](https://mui.com/ "mui.com")<br>
`npm install @mui/material @emotion/react @emotion/styled @mui/icons-material`

Install [UUID](https://www.npmjs.com/package/uuid/ "www.npmjs.com/package/uuid")<br>
`npm install uuid`

Install [UseAnimations](https://react.useanimations.com/ "react.useanimations.com")<br>
`npm install -S react-useanimations`


---
# Using the app
## Quick Overview
* Create new notes
* Notes get displayed in a responsive grid arrangement
* Rearrange notes with **drag and drop**
* **Hover** over saved note grid to show note-action buttons
* Actions buttons vary with location inside the app
* Click to expand note and edit note data
* All notes data is stored locally using *localStorage*, and is fetched automatically during next session.

## Note actions using buttons:
The following actions can be performed on each note:
* Pin note
* Unpin note
* Archive note
* Unarchive note
* Delete note
* Restore note
* Delete note forever

## Other note actions
* Open note
* Edit note
* Save changes
* Change note position inside grid


---
# The Interface

## The interface is divided into three areas:

  1. *Header Bar* - horizontal, always on top
  2. *Drawer* - vertical, on the left
  3. *Display Area* - adjacent to Drawer, on the right

## Header Bar
The Header Bar contains three components:
* *Menu Button* - to toggle Drawer
* *Heading* text - which updates with current location inside the app
* *Delete All* button - to delete all notes and reset app data.

## Drawer
Drawer contains the navigation menu with icons and names.

Drawer has two states:
* *Closed* - shows menu icons only
* *Open* - shows icons and names

The Drawer open state has it's own two states:
* *Permanently open* - toggled by the Menu Button in Header Bar.
* *Temporarily open* - toggled by moving mouse cursor over and away from Drawer.

## Display Area
* Display Area contains the notes data with respect to the current location selection in Drawer
* Notes are displayed in grid arrangement
* Each note shows action buttons on hover
* Action buttons vary with each location
* Notes are moved between different locations using actions buttons




---
# Component-Tree Structure + App features
 The following is the structure of the component tree between whom the notes data flows and is dsplayed in the *Display Area*:
* *Notes* (root)
  * *Create Note*
  * *Pinned Notes*
  * *Other Notes*
* *Archive*
* *Bin*

## Create and save a new note
* *Notes* is the root component.
* Click on the *CreateNote* component inside the *Notes* to expand and show note title field.
* Add text input to note title and note info fields.
* Save the note with a click anywhere outside the *CreateNote* component.
* New notes are saved and displayed inside the *Notes* component by default, added to the front of the grid.

## Inside Notes
*Notes* component may contain two note grids:
* One is for *Pinned Notes*.
* The other is for *Other Notes*.
>Each grid exists only when it contains atleast 1 note.

### Inside *Pinned Notes*:
Pinned Notes note actions available:
* Unpin note - moves note to *Other Notes* grid below.
* Archive note - moves note to *Archive*.
* Delete note - moves note to *Bin*.

### Inside *Other Notes*:
Other Notes note actions available:
* Pin note - moves note to the *Pinned Notes* grid on top.
* Archive note - moves note to *Archive*
* Delete note - moves note to *Bin*

Perform the following actions on any note inside *Notes*:
* Click note to open in modal.
* Edit note data within modal.
* Click Close button, click outside modal window area or use Escape key to close note modal window.
* Note data updates on close.

## Inside Archive:
*Archive* component contains a single note grid
* All notes are unpinned.


Archive note actions:
* *Pin note* - moves the note to the front of *Pinned Notes* grid inside *Notes*.
* *Unarchive note* - moves the note to front of *Other Notes* grid inside *Notes*.
* *Delete note* - moves the note to *Bin* 

## Inside Bin:
*Bin* component contains a single note grid:
* All notes are unpinned.

*Bin* note actions available:
* *Delete Forever* - Deletes the note permanently.
* *Restore note* - moves the note to front of *Other Notes* grid in *Notes*.

---
# Note-actions Distribution

| Note Action      | Pinned Notes | Other Notes | Archive | Bin |
| -                | -            | -           | -       | -   |
| Open note        | ✓           | ✓           | ✓      | ✓   |
| Edit note        | ✓           | ✓           | ✓      | ✗   |
| Rearrange notes  | ✗           | ✓           | ✗      | ✗   |
| Pin note         | ✓           | ✓           | ✓      | ✗   |
| Archive note     | ✓           | ✓           | ✗      | ✗   |
| Unrchive note    | ✗           | ✗           | ✓      | ✗   |
| Delete note      | ✓           | ✓           | ✓      | ✗   |
| Restore note     | ✗           | ✗           | ✗      | ✓   |
| Delete Forever   | ✗           | ✗           | ✗      | ✓   |

---
# Extra Info

> In this documentation, the words in *italics* correspond to the component and variable names used in the code. 