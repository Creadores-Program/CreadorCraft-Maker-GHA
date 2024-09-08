# CreadorCraft-Maker-GHA

Github Action to package your CreatorCraft game!

You can now package your CreatorCraft game on Github!

If you want to know how to create a game in CreadorCraft I recommend you check out the [CreadorCraft Maker wiki](https://creadorcraft-maker.blogspot.com/p/documentacionwiki.html) you can also run many programming languages for your game!

## Example Work
```yml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    if: ${{ !contains(github.event.head_commit.message, '[ci skip]') }}
    steps:
      - uses: actions/checkout@v4
      - name: CreadorCraft-Maker
        uses: Trollhunters501/CreadorCraft-Maker-GHA@1.0.0
        with:
          path: "./src"
      - name: Upload Artifact
        uses: actions/upload-artifact@v4
        with:
          name: My Game Example
          path: gameBuildCCM/TestName 1.0.0.creadorcraftgame.zip
```

### Structure Repo:
myName/RepoGameName/src

   - manifest.json:
   ```json
   {
    "name": "TestName",
    "description": "Test game",
    "mainHtml": "index.html",//dir main html file
    "mainCSS": "index.css",
    "mainJS": "index.js"
   }
   ```
   - index.html
   - index.css
   - index.js

more info in Wiki!