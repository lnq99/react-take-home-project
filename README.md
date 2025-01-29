# React + TypeScript + Vite

## Example

`sidebar.conf.json`

```json
{
  "user": {
    "name": "User",
    "email": "user@example.com",
    "avatar": "react.svg"
  },
  "teams": [
    { "name": "Example Inc", "plan": "Enterprise" },
    { "name": "Example Corp.", "plan": "Startup" }
  ],
  "navMain": [
    {
      "title": "Applications",
      "url": "#",
      "isActive": true,
      "items": [
        { "title": "Login", "url": "login" },
        { "title": "Workflow", "url": "workflow" },
        { "title": "Chart (WIP)", "url": "chart" },
        { "title": "Table (WIP)", "url": "table" }
      ]
    },
    {
      "title": "Models (placeholder)",
      "url": "#",
      "items": [
        { "title": "Genesis", "url": "#" },
        { "title": "Explorer", "url": "#" }
      ]
    },
    {
      "title": "Settings (placeholder)",
      "url": "#",
      "items": [
        { "title": "General", "url": "#" },
        { "title": "Limits", "url": "#" }
      ]
    }
  ],
  "projects": [
    { "name": "Design Engineering", "url": "#", "icon": {} },
    { "name": "Sales & Marketing", "url": "#", "icon": {} }
  ]
}
```

`app.conf.json`

```json
{
  "login": {
    "title": "Login",
    "versions": {
      "v1": "login/v1",
      "v2": "login/v2"
    },
    "defaultVersion": "v2",
    "menuItems": ["version-switcher", "add-box", "search-form"]
  },
  "workflow": {
    "title": "Workflow",
    "versions": {
      "v1": "workflow/v1"
    },
    "defaultVersion": "v1",
    "menuItems": ["version-switcher", "add-node"]
  }
}
```

![login v1](./examples/example1.png 'Login V1')
![login v2](./examples/example2.png 'Login V2')
![workflow v1](./examples/example3.png 'Workflow V2')
