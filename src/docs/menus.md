## Menus
Operator Framework provides a minimalist DSL that makes it easy to create
cross platform native system and context menus.

Menus are created at run time. They can be created from either the Main or
Render process. The can be recreated instantly by calling the `setMenu` method.

### System Menus

![menus](images/screenshots/menus.png)

#### Example
The method takes a string. Here's an example of a menu. The semi colon is
significant indicates the end of the menu. Use an underscore when there is no
accelerator key. Modifiers are optional. For the edit menu, `op` will figure
out which accelerators to use for you.

```js
system.setMenu(`
  App:
    Foo: f;

  Edit:
    Cut: x
    Copy: c
    Paste: v
    Delete: _
    Select All: a;

  Other:
    Apple: _
    Another Test: T
    Some Thing: S + Meta
    ---
    Bazz: s + Meta, Control, Alt;
`)

```

#### Separators

To create a separator, use three dashes `---`.

#### Accelerator Modifiers

Accelerator modifiers are used as visual indicators but don't have a
material impact as the actual key binding is done in the event listener.

A capital letter implies that the accelerator is modified by the `Shift` key.

Additional accelerators are `Meta`, `Control`, `Option`, each separated
by commas. If one is not applicable for a platform, it will just be ignored.

On MacOS `Meta` is the same as `Command`.

#### Submenus

We feel like nested menus are an anti-pattern. We don't use them. If you have a
strong argument for them and a very simple pull request that makes them work we
may consider them.

#### Event Handling

When a menu item is activated, it raises the `menuItemSelected` event in
the front end code, you can then communicate with your backend code if you
want from there.

For example, if the `Apple` item is selected from the `Other` menu...

```js
window.addEventListener('menuItemSelected', event => {
  assert(event.detail.parent === 'Other')
  assert(event.detail.title === 'Apple')
})
```

### Context Menus

Dynamically build a context menu and await the user's selection.

```js
const value = await window.contextMenu({
  Download: 'D',
  Wizard: 'W',
  Share: 'S'
})
```

If the user presses `w` or clicks the `Wizard` menu item, the following
statement will evalute true.

```js
assert(value === { title: 'Wizard', parent: 'contextMenu', state: 0 })
```
