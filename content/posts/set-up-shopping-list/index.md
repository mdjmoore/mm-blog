---
title: Set Up Shopping List
template: post
slug: set-up-shopping-list
draft: false
featured: false
date: "2018-01-21T15:00:00.000Z"
description: >-
  Everything I need to set up my machine on day one
cover: ""
category: Test
tags:
  - setup, tech
---

Setting up a new work environment has always been a pain for me. My editor is perfectly tuned to my needs, my terminal is customized to be functional and beautiful, every extension, plugin and app I could need is installed and running smoothly. Then there's a hardware update (or a job update) and it's all gone as your laptop is returned to IT. Your new set up is okay, it's functional, but it's not as _precise_ as you're used to. 

This list is not just for anyone interested in what I consider to be necessary for day to day work, but also for me in case I need to reinstall VSCode and can't remember which themes I love.

## Editor

1. (VS Code):[https://code.visualstudio.com/]
  My favourite editor for ECMA script languages (JavaScript, node.js, TypeScript). 

  - (Daybreak Theme):[https://daybreaktheme.com/]
  The most beautiful, muted dark theme for VS Code. I'm always partial to dark themes with heavy use of blues and oranges and soft blacks. I find the syntax highlighting pleasing, though I stay away from the italic variant.

  - (Bracket Pair Colorizer 2):[https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2]
  A fun extension for colouring brackets. I find it useful to easy see where bracket wrap and nest. Within the settings json, I also enable the following:
      ```JSON
      bracket-pair-colorizer-2.forceUniqueOpeningColor: true,
      bracket-pair-colorizer-2.colorMode: Consecutive,
      bracket-pair-colorizer-2.highlightActiveScope: true,
      bracket-pair-colorizer-2.showBracketsInGutter: true
      ```
  I use named css colours for this extension, though it's very easy to use hex or rgba values.
      ```JSON
    "bracket-pair-colorizer-2.colors": [
    "Cyan",
    "Darkorange",
    "Teal",
    "Springgreen",
    "Aqua",
    "Coral",
    "Aquamarine",
    "Mediumvioletred"
    ],
      ```
  - (JetBrains Mono Font):[https://www.jetbrains.com/lp/mono/]
  The most readable, useful and modern typeface I have ever used. It was designed for use in an IDE and it shows. JetBrains Mono is the only font whose ligatures I actually like. And it's free to download! I recommend setting the font size to 13px and the line hight to 16 for legibility. 

2. (PHPStorm):[https://www.jetbrains.com/phpstorm/]
  My alternate editor for working in PHP and SQL. It's less sleek than VS Code but is a heavy hitter with functionality. PHPStorm has a robust git integration, strong debugging capabilities and stellar tooltips and quick-links for things like refactoring functions or renaming variables across a repo. It doesn't have the same extensive list of available plugins and is less flashy than VS Code on that front. If ECMA script languages integrated better with it, PHPStorm would be my ride or die editor.

  I have PHPStorm set up with the same JetBrains Mono font, Symfony theme (ported in from VS Code) and the Atom Icon Set.

## Terminal

1. (iTerm 2):[https://iterm2.com/]
  I know, I know. **Both** VS Code and PHPStorm have integrated terminals. But having an external terminal fulfills my hacker dreams and also means that PHPStorm doesn't use up 300% of my laptop's resources while running. Plus, I can make my terminal fullscreen whenever a technician comes to fix the internet and they know that I mean business. 

  - (gr):[https://github.com/mixu/gr]
  The best tool for keeping repos up to date. This was a lifesaver when I was a software developer and our local dev environment required no less than 30 repos to be completely functional. gr let's you tag directories and then run commands in all tagged directories. Superb for rebasing and running various `make` commands.

  - (zsh):[https://ohmyz.sh/]
  Comes default with the newest MacOS and it's grown on me. I agree with the website: it does feel nice. Occasionally I find that the sheer volume of shortcuts and aliases already built into zsh means I have to unalias something to get a personal alias to work, gr being a prime example of that. Thankfully, zsh is beyond easy to customize.

  - (Alien Theme):[https://github.com/eendroroy/alien]
  The readme for this repo does a fantastic job of explaining all the technical reasons it's a great theme. I like it because it's pretty. To install it, I cloned the repo into `~/.oh-my-zsh/custom/themes/`. I personally use the soft colour scheme and have the following sections enabled:

  ```bash
  export ALIEN_SECTIONS_LEFT=(
  time
  battery
  user
  path
  vcs_branch:async
  vcs_status:async
  vcs_dirty:async
  newline
  ssh
  venv
  prompt
  )
  ```
  - Aliases
  These I accrue overtime, either finding fun ones online or through trying to automate / speed up daily tasks. Obviously there will be ones I cannot post here (like tokens, logins or other credentials), but there are the ones I find the most useful:

  ```bash
  # unalias the zsh default for gr so the external gr tool can function
  unalias gr

  # uncommit local changes
  alias uncommit="git reset --soft HEAD^ && git reset HEAD ."

  # remove local changes
  alias gitclean="git clean -f -x -d"

  # navigate to the notes folder and open in vs code - useful when I was taking meeting notes in markdown
  alias notes="cd ~/Desktop/meeting-notes && code ."

  # this was specific to one position I held, but it's good to alias long or unwieldy commands
  alias devlocal="~/workspace/devlocal/build_devlocal.sh"

  # put gr to good use
  alias rebaseall="gr git checkout master && gr git fetch --all && gr git rebase origin/master && gr status"

  # half automate daily tasks
  alias morning="rebaseall && devlocal vms start && etc etc"
  ```
  I don't currently have it installed, but bonus points to (thefuck)[https://github.com/nvbn/thefuck] for being the best app for when you can't stop typing `gut checckout`.

## Apps

4. (Hoppscotch formerly Postwoman):[https://hoppscotch.io/] 
  Building APIs means testing them. A lot. And I find the Hoppscotch does exactly what I need it to do and does it efficiently. I find Postman can often slog down my already hard-working machine. I find Hoppscotch to be lean, lightweight and great at what I need it to do. Bonus points for being open source and built byt he ultra talented Liyas Thomas.

5. (Notion):[https://www.notion.so/]
  Some of the best advice ever given to me (and advice I always pass on to others) was to document everything. Write down every thought, every conversation, log your work. Often this advice comes from a place of self-preservation -- if I have receipts, I can't get pinned for this; if I show my work, they'll know I followed spec -- but it is great advice beyond that. Having a consistent work log is great to have as a refresher before going into your weekly 1:1s (you are having 1:1s, right?). Something might have happened on Monday that you want to address, but it's Thursday already and whatever it was has been replaced in your brain by QA notes. A work log lets you put all that information down on paper (pixels) so it's ready when you want to come back to it. A work log is also fantastic for tracking growth since it can be so easy to forget all the steps you've taken to get where you are. I find a work log helps with consistent debugging. 

  Notion is also home to my cheatsheets! I keep every command, shortcut or trick that's been shown to me in notion so it's easy to find and then share with others. I keep my notes for my classes in notion. One workplace has a cli tool for code reviews and each developer has a code associated to them. I have a table in notion outlining who has which code and what parts of the product they're experts in. 


6. Browsers: (Chrome)[https://www.google.com/intl/en_ca/chrome/] and (Firefox)[https://www.mozilla.org/en-CA/firefox/]
  I like having two browsers so I can easily keep my work and personal profiles separate. It's also very helpful for cross-testing solutions. I personally keep Firefox for my personal work and Chrome for my professional stuff since currently my work email is set up through G Suite. 

  ### Extensions
    - (30 Seconds of Knowledge):[https://30secondsofknowledge.com/]
    I'm personally not a fan of extensions that generate a new motivational message and hero image every time you open a new tab. I'm lucky in that I have plenty of words of power and affirmations that I can get from people in my life instead of from an array stored in a firebase db somewhere. So I prefer something that is either cute or functional. And 30 Seconds of Knowledge is incredibly functional. On every new tab, it showcases a snippet of code in a programming language of your choice (from a list of 9). All their snippets are digestible in -- you guessed it -- 30 seconds and have external links at the bottom of the page for further reading. I find it super helpful for brushing up on languages I'm not using often or ones I'm currently learning. 

    - (Marinara):[https://chrome.google.com/webstore/detail/marinara-pomodoro%C2%AE-assist/lojgmehidjdhhbmpjfamhpkpodfcodef]
    As someone who rabbit holes easily when faced with a problem, time management is of the utmost importance to me. I find the pomodoro technique incredibly useful for breaking up my work into more manageable chunks and not losing hours to a single problem. For every 25 minutes of work, you get a 5 minute break and once you've completed 4 rounds of 30 minutes you get a longer 15 minute break. On days when I don't have meetings to break up the day, this technique saves me from being completely stationary for 8 hours. 

    - (Noisli):[https://www.noisli.com]
    A lifesaver in a loud office! I like to listen to music when working, but sometimes ambient noise from an open concept office still creeps through. I like noisli for not only the variety of sounds, but the ability to layer and tweak their volumes and save favourites. My most often used sound is a blend of white, pink and brown noise layered under soft wind and rain. I find the combo of white, pink and brown static best masks other voices in an office. 

  ### Bookmarks
    - (Wizard Zines):[https://wizardzines.com/comics/]
    Quick comics outlining some high level concepts in programming. They span everything from HTML to SQL to CLI tricks to how to really utilize having a manager. I love Julia's approach to breaking down complex concepts into a few panel long comics and using human language to explain the principles within. She's still producing them and there's a backlog of over sixty to get caught up on.

    - (Flight Rules for Git):[https://github.com/k88hudson/git-flight-rules]
    Inspired by Chris Hadfield and NASA, Kate Hudson (a fellow Torontonian), wrote this comprehensive guide for what to do in any git situation. It is beautifully organized and has more than once helped me out of a tricky spot. I always have this in my bookmarks.

    - (Oh $\#\!T, Git!?!):[https://ohshitgit.com/]
    This site is very much my speed and exactly what I need when the ~git~ shit hits the fan. It doesn't cover as many situations as the Flight Rules do, but it does handle the most common oopsies. 

    - (LingoJam):[https://lingojam.com/]
    Not every bookmark has to be serious! I like LingoJam for 2 specific translators: (Twitter Fonts)[https://lingojam.com/TwitterFonts] and (Small Text Generator)[https://lingojam.com/SmallTextGenerator]. The first is fun for formatting slack messages (I am always partial to the gothic font ☠️) and the latter is great to expressing minute rage or whispers. I personally love messaging someone ʰᵉˡᵖ during a particularly rough meeting. 


  

  - bookmarklet to add fun formatting to MRs on github
  - https://maggieappleton.com/garden
  