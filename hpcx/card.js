// Actions
const cardList = document.querySelectorAll('.card:not(.card-front)');
function cardName (card) {
  return card.getAttribute('data-name')
}
function cardIndex (card) {
  return Array.from(cardList).indexOf(card)
}
let baseImportUrl = 'https://icloud.com/'
const scActionType = {
  setStatus: function (data, card) {
    if (data.description) card.querySelector('.card-desc').innerText = data.description
    card.querySelector('.progress-ring.pie circle').style.setProperty('--percent', data.percent)
  },
  toggleTitle: function (data, card) {
    const titleElm = card.querySelector('.card-title')
    titleElm.innerText = titleElm.innerText === data.texts[0] ? data.texts[1] : data.texts[0]
    setTimeout(() => fireEvent(card), 100)
  },
  toggleBaseUrl: function (data, card) {
    baseImportUrl = baseImportUrl === 'https://icloud.com/' ? 'shortcuts://': 'https://icloud.com/'
    if (card) setTimeout(() => fireEvent(card), 250)
  },
  finish: function (data, card) {
    const activeIndicator = card.querySelector('.card-ind-active')
    setTimeout(() => {
      activeIndicator.classList.remove('si-stop-circle')
      activeIndicator.classList.add('si-check-circle')
    }, 200)
    setTimeout(() => card.querySelector('.card-ind-idle').style.opacity = '1', 1500)
    setTimeout(() => card.querySelector('.card-ind-active').style.opacity = '0', 1550)
    setTimeout(() => {
      card.querySelector('.progress-ring.pie circle').style.setProperty('--percent', 0)
      activeIndicator.classList.remove('si-check-circle')
      activeIndicator.classList.add('si-stop-circle')
      currentEvent[cardIndex(card)] = 0
    }, 1750)
  },
  openShortcut: function (data, card) {
    setTimeout(() => location.href = baseImportUrl + data.path, 400 + (275 * baseImportUrl === 'https://icloud.com/'))
    fireEvent(card)
  },
  alert: function (data, card) {
    setTimeout(() => {
      const activeIndicator = card.querySelector('.card-ind-active')
      const idleIndicator = card.querySelector('.card-ind-idle')
      idleIndicator.classList.remove('si-ellipsis-circle')
      idleIndicator.classList.add('si-text-bubble-circle')
      // idleIndicator.style.transition = '0';
      idleIndicator.style.opacity = '1';
      activeIndicator.style.opacity = '0';
      const alertPopup = document.querySelector('.alert-popup')
      function proceed () {
        alertPopup.style.opacity = '0'
        setTimeout(() => {
          alertPopup.style.display = 'none'
          idleIndicator.style.opacity = '0'
          activeIndicator.style.opacity = '1'
          document.body.style.overflow = ''
          document.body.removeEventListener('touchmove', scrollLock)
          fireEvent(card)
        }, 250)
        setTimeout(() => {
          idleIndicator.classList.remove('si-text-bubble-circle')
          idleIndicator.classList.add('si-ellipsis-circle')
        }, 750)
      }
      setTimeout(() => {
        const alertText = typeof data.text === 'function' ? data.text(data, card) : data.text
        // alert(alertText)
        alertPopup.style.display = 'block'
        alertPopup.style.opacity = '0'
        alertPopup.querySelector('p').innerHTML = alertText
        setTimeout(() => {
          alertPopup.style.opacity = '1'
        }, 10)
        document.body.style.overflow = 'hidden'
        document.body.addEventListener('touchmove', scrollLock)
        alertPopup.querySelector('button').onclick = proceed
      }, 500)
    }, 500)
  },
  toggleTheme: function (data, card) {
    if (!document.documentElement.classList.contains('dark-mode')) {
      document.documentElement.style.setProperty('--col-bg-main', 'black');
      document.documentElement.style.setProperty('--col-text', '#ddd');
      document.documentElement.classList.add('dark-mode');
      setPref('dark_mode', true)
    } else {
      document.documentElement.style.setProperty('--col-bg-main', '#fafafa');
      document.documentElement.style.setProperty('--col-text', 'black');
      document.documentElement.classList.remove('dark-mode');
      setPref('dark_mode', false)
    }
    if (card) setTimeout(() => fireEvent(card), 250)
  }
}
const scActionList = {
  site_info: [
    // HPCX Info
    { action: scActionType.alert, data: {
      text: 'Welcome to the Project Composer! This shortcut is the peak of Hopscotch modding in Shortcuts. Although it is still relatively early in development, the Hospcotch Project Composer provides a package manager-like setup in Shortcuts.\n\nWhat this means is that you choose what you want the Project Composer to do, and that is what it does for you. To learn more about the different pieces of this puzzle, tap the <i class="si si-ellipsis-circle"></i> button on the top right of any shortcut tile.'
    }, status: { percent: 20, description: 'Showing info...' } },
    { action: scActionType.alert, data: {
      text: 'Getting Started (1/3)\n\nThere are only a few things that you should set up before modding a project with this shortcut. First, have the Shortcuts app and Hopscotch installed. In Shortcuts, I recommend creating a folder called &ldquo;Hopscotch&rdquo; to contain your shortcuts.\n\n(Press OK to continue)'
    }, status: { percent: 40, description: 'Showing info...' } },
    { action: scActionType.alert, data: {
      text: 'Getting Started (2/3)\n\nNext, go to the Settings App > Shortcuts > Allow Untrusted Shortcuts, and make sure it is enabled. If you cannot enable it, create an empty shortcut and add a &ldquo;text&rdquo; action to it. Then, exit the shortcut (and delete it if you want to) and locate the setting again.\n\n(Press OK to continue)'
    }, status: { percent: 60, description: 'Showing info...' } },
    { action: scActionType.alert, data: {
      text: 'Getting Started (3/3)\n\nNow that you have everything ready, let&rsquo;s begin by installing the setup shortcut, the main shortcut, and the module updater shortcut.\n\nTo do this, tap the following tiles (and import their respective shortcuts) in this order:\n- Dependency Installer\n- Get the Main Shortcut (HPCX)\n- HPCX Updater Shortcut'
    }, status: { percent: 80, description: 'Showing info...' } }
  ],
  main_installer: [
    // Dependency Installer
    { action: scActionType.openShortcut, data: { path: '' }, status: { percent: 80, description: 'Downloading...' } },
  ],
  main_hpcx: [
    // Main Shortcut
    { action: scActionType.alert, data: { text: 'It is a good idea to have a shortcuts folder for HPCX before importing this shortcut. This folder will contain all HPCX modules, but is NOT limited to just that, meaning that you can also have other non-HPCX shortcuts in this folder.\n\nRecommended folder name: Hopscotch' }, status: { percent: 35, description: 'Showing Setup Info...' } },
    { action: scActionType.openShortcut, data: { path: '' }, status: { percent: 80, description: 'Downloading...' } },
  ],
  main_updater: [
    // Updater Shortcut
    { action: scActionType.openShortcut, data: { path: '' }, status: { percent: 80, description: 'Downloading...' } },
  ],
  ft_topLvlTraits: [
    // Global Traits Shortcut
    { action: scActionType.openShortcut, data: { path: '' }, status: { percent: 80, description: 'Downloading...' } },
  ],
  ft_secretBlocks: [
    // Secret Blocks Shortcut
    { action: scActionType.openShortcut, data: { path: '' }, status: { percent: 80, description: 'Downloading...' } },
  ],
  ft_imageBlocks: [
    // Set Image Blocks Shortcut
    { action: scActionType.openShortcut, data: { path: '' }, status: { percent: 80, description: 'Downloading...' } },
  ],
  ft_optColors: [
    // Optimize Color Fields Shortcut
    { action: scActionType.openShortcut, data: { path: '' }, status: { percent: 80, description: 'Downloading...' } },
  ],
  ft_optMath: [
    // Evaluate Math Shortcut
    { action: scActionType.openShortcut, data: { path: '' }, status: { percent: 80, description: 'Downloading...' } },
  ],
  ft_copyLink: [
    // Copy Project Links Shortcut
    { action: scActionType.openShortcut, data: { path: '' }, status: { percent: 80, description: 'Downloading...' } },
  ],
  ft_dictionaryAbility: [
    // Add Dictionary Ability Shortcut
    { action: scActionType.openShortcut, data: { path: '' }, status: { percent: 80, description: 'Downloading...' } },
  ],
  ft_checkFilter: [
    // Check Filter Shortcut
    { action: scActionType.openShortcut, data: { path: '' }, status: { percent: 80, description: 'Downloading...' } },
  ],
  main_template: [
    // HPCX Module Template Shortcut
    { action: scActionType.openShortcut, data: { path: '' }, status: { percent: 80, description: 'Downloading...' } },
  ],
  site_darkMode: [
    // Dark Mode
    { action: scActionType.toggleTheme, data: {}, status: { percent: 60, description: 'Changing theme...' } }
  ],
  site_importSetting: [
    // Toggle URL Scheme
    { action: scActionType.toggleBaseUrl, data: {}, status: { percent: 35, description: 'Changing base URL...' } },
    { action: scActionType.alert, data: { text: () => {
      return baseImportUrl === 'https://icloud.com/'
      ? 'Your shortcut imports will now direct you to iCloud shortcut links.\n\nIf you have Shortcuts installed, a user confirmation is required to open the app. Once allowed, the link will redirect you to the Shortcuts app to confirm the import again.\n\nIf you do not have Shortcuts installed, it will show the shortcut preview on icloud.com.'
      : 'Your shortcut imports will now take you directly to the shortcuts app.\n\nThese links open the Shortcuts app without a user confirmation. In the app, you will still be asked confirm the shortcut import.\n\nIf the shortcuts app is not installed, however, it will not be able to show you a preview of the shortcut.'
    } }, status: { percent: 65, description: 'Showing info...' } },
    { action: scActionType.toggleTitle, data: { texts: ['Use shortcuts:// links for imports', 'Use icloud.com links for imports'] }, status: { percent: 90 } }
  ]
}
const scDescriptions = {
  site_info: '<p>Congratulations! You successfully found the &ldquo;more information&rdquo; button! This popup menu will display more information about the shortcut that you click on, which may include (but is not limited to) the following:</p><ul><li>The shortcut&rsquo;s functionality</li><li>Certain use cases for the shortcut</li><li>Tidbits of what goes behind the creation of each shortcut</li></ul><p>You can use this information panel to read more about a shortcut before downloading it by simply tapping the <i class="si si-ellipsis-circle"></i> button on any shortcut card.</p>',
  main_installer: '<p>This is the dependency install shortcut. It allows you to install all of the necessary dependencies in one run. All you have to do is install this shortcut and run it. The dependency installer will intiate a shortcut import, and once it detects that you&rsquo;ve installed it, it will advance onto the next shortcut. This process is repeated until all dependencies are installed.</p><p>I did not extend this functionality to the different modules of HPCX because while it would be convenient, it would also quickly become outdated. There is also no way to properly detect if a module shortcut (i.e. add secret blocks) has been updated. This shortcut was meant to be quick and easy part of intitial setup and wasn&rsquo;t meant to handle custom shortcut configurations.</p><p>The fastest way to install several modules at once is to open shortcuts in split view, and tap each module you want to install. This makes it easy to choose modules and import them without needing to switch apps.</p>',
  main_hpcx: '<p>This is the main shortcut for the Hopscotch Project Composer, which is also known as HPCX. It does not do anything on its own, but instead it has the ability to open a project from a link or file, then run and validate the output of any other &ldquo;module&rdquo; shortcut, which can be fully customized.</p><p>The open-ended nature of this shortcut is what makes it so powerful. Only need secret blocks to be added to your project? There&rsquo;s a module for that! Need to edit the top-level traits of a project? No problem! Whenever you need more functionality, you can just import or code a module that suits your needs. Select community-made shortcuts may also be added to this page in the future, depending on the functionality they provide!</p><p>Because the &ldquo;package&rdquo; system is so efficient, you don&rsquo;t even <i>need</i> the main shortcut &ndash; it is possible to make modifications individually using just the module shortcuts, but having the main shortcut allows you to run multiple modules at once on a project whilst also validating the output of each one.</p>',
  main_updater: '<p>This is a shortcut that will check for updates on all shortcuts in your &ldquo;Hopscotch&rdquo; folder in Shortcuts. To check for updates, you can either run this shortcut alone, or you can run it from the Project Composer itself.</p><p>Unfortunately, I cannot detect when a shortcut has been updated, so you have to press the volume buttons to indicate that you have updated the shortcut. Before updating any shortcuts, however, you will be prompted to choose which shortcuts you want to update.</p>',
  ft_topLvlTraits: '<p>This module allows you to edit the Global Project Traits of a Hopscotch project. These traits are found at the <i>root</i> level of the JSON, meaning it is inside the first set of curly braces, and it includes properties such as editor version, player version, and edited date.</p><p>This covers most of the functionality found in the legacy &ldquo;Hopscotch JSON&rdquo; shortcut, though it doesn&rsquo;t support custom JSON editing, since is being saved for a different module that you can install. Also, this is the only official module that cannot be run on its own due to specific actions that are used within the main HPCX shortcut.</p>',
  ft_secretBlocks: '<p>Secret Blocks are nothing new. In fact, they were discovered by Petrichor and Creations of a Noob before I began work on HS Tools and the legacy &ldquo;Hopscotch JSON&rdquo; siri shortcut. While secret blocks aren&rsquo;t new, they have not been not easy to access until I had bundled them as built-in functionality with the legacy shortcut.</p><p>Since most people who have used my shortcut (and many who have never used it) know about Secret Blocks, this new shortcut would not be complete without it. So, with this module, you can add secret blocks to any project with just one tap!</p>',
  ft_imageBlocks: '<p>Set image blocks can be useful in many projects, especially themed projects that are not made when special characters appear in the object menu. This ability contains set image blocks for all Hopscotch object types, including old (non fullsize) shapes, Halloween characters, and winter characters.</p><p>From the &ldquo;all-seeing object viewer&rdquo;, you can copy data from a set image block into a character bubble as well, meaning that you can add stage objects of hidden characters and shapes using these set image blocks. Just like Secret Blocks, these can be added to your project in just one click.</p>',
  ft_optColors: '<p>Color fields in Hopscotch have a limited color selection, that is, unless you use the HSB and RGB blocks. But, using those takes up a little extra file space for every time you use one. Did you know that Hopscotch supports custom HSB values <i>in the color bubble</i>? This shortcut takes advantage of that mechanic and reduces those HSB and RGB blocks into single values that take up the same amount of file space as a pre-defined Hopscotch color.</p><p>This can be especially helpful for larger projects such as pixel arts, which tend to have a massive file size, with lots of it being color operators. Running this shortcut on such a project can save a lot of space, and best of all, Hopscotch still generates the correct color preview in the bubble.</p>',
  ft_optMath: '<p>This shortcut is similar to the color slot optimization module. This time, however, it is focused on math. Any math that does not include variables can often be reduced, so this shortcut will reduce all of the math in your project down to single-number values in place of the useless math operator. For example, &ldquo;Set Text to (5 + (5 &times; 2))&rdquo; will reduce to &ldquo;Set Text to 15&rdquo;</p><p>When running this shortcut, all math in your project will be reduced, without need of user confirmation. Just run this shortcut and open the project, or open the project from HPCX and choose to Evaluate Math operators, and all math operators will be simplified in one click.</p>',
  ft_copyLink: '<p>This shortcut should be pretty self-explanatory. It provides a quick way to copy various different links that can be used to access your project. Here are the types of URLs you can copy:</p><ul><li>Traditional project links (.../p/[id])</li><li>Project embed links (.../e/[id])</li><li>Links to my modded player, which can play drafts from the browser (.../hs-tools/play-project/[id])</li><li>The UUID itself ([id])</li></ul><p>All you need to do is run this shortcut independently or from the main HPCX shortcut.</p>',
  ft_dictionaryAbility: '<p>The idea of an ability dictionary has been around for some time, though it never really took off due to its limited usage in Hopscotch. What this shortcut does is essentially set an output variable to a certain value based on its input value. Just like a dictionary in other programming languages, if the input is "foo" and the dictionary is { "foo": "bar" }, the output is "bar", which is what the specified variable will be set to.</p><p>I know, the idea might still be confusing, but after using the interface, you can see how lots of time can be saved. For example, you can set the object&rsquo;s image to something based on the input, which is usually extremely tedious in Hopscotch. You can even run custom code for each value!</p>',
  ft_lockProject: '<p>The lock project shortcut is not available to download from the HPCX info page</p>',
  ft_checkFilter: '<p>This shortcut is an integration of my filter checker found on HS Tools. It will retrieve an expression that is used to check for embedded bad words as well as common trigger words in your project, then prompt you to remove them by replacing all matches with a different word.</p><p>The shortcut itself also has an offline expression, which may become outdated, but will still catch many common words that can cause your project to get stuck. Just run this shortcut alone or from HPCX to check any projects for filtered words &ndash; filter checking really can be <i>that</i> easy.</p>',
  main_template: '<p>Do you enjoy HPCX? Do you want to contribute to the project? Is there functionality you need that <i>just isn&rsquo;t</i> covered by any existing modules? Well, you&rsquo;re in luck! This template does all of the setup for you, and lets you code whatever you want into the project under the &ldquo;Hopscotch Project&rdquo; variable. Just follow the instructions in the second comment to create your own custom module.</p><p>You can use, reuse, duplicate, or do whatever else you want with this template! All you have to do is read from the &ldquo;Hopscotch Project&rdquo; variable, make changes, and save them to that same variable. All of the loading and saving is set up for you so you can focus on modding the project itself!</p><p>One more thing: you can specify your own shortcut identifier in the third action of this shortcut. Replace <b>USERNAME_<wbr>shortcutName</b> with your username and the name of the module you want. Then, feel free to share the link with the community, and if you ever decide to update it, let me know and I can update the project composer info to push an update to your module for anyone using it!</p>',
  site_darkMode: '<p>This &ldquo;shortcut&rdquo; tile does exactly what it says; it toggles dark mode for the site. In fact, toggling the dark mode on this site changes the same dark mode preference as any other dark mode toggle does on the entire HS Tools site because it is the same preference.</p><p>That means turning on dark mode here will also apply it to the web explorer, project builder, and any other tools on this site. It also means that turning it on elsewhere will make this page start in dark mode. This shortcut is basically just a glorified toggle button that acts the same as any other dark mode toggle on the HS Tools site.</p>',
  site_importSetting: '<p>This setting controls how you would like to import your shortcuts. Here are the two methods of redirecting you to each shortcut to download:</p><ol><li>The first method is using icloud.com links. If shortcuts is installed on your device, this import method will show a popup that asks you to confirm being taken to the shortcuts app. Once you enter the app, <i>you need to confirm the shortcut import again anyways</i>. When shortcuts is not installed though, redirects to these links <i>will</i> be able to show a preview of the shortcut &ndash; that is, the shortcut&rsquo;s name.</li><li>The second method is using the shortcuts:// URL scheme. If Shortcuts is installed, you will be redirected to the shortcuts app immediately with this method. If it is not installed though, there is no way to show a preview of the shortcut content.</li></ol><p>This setting defaults to using the shortcuts:// URL scheme links on iOS devices (immediate redirect) and icloud links for all other devices (shows preview if Shortcuts is not installed)</p>'
}
// Array of zeroes; same length as cardList
const currentEvent = '.'.repeat(cardList.length).split('').map(() => 0)
cardList.forEach((card, index) => {
  card.addEventListener('runaction', function (e) {
    const action = e.detail
    scActionType.setStatus(action.status, card)
    e.detail.action(action.data, card)
  })
  if (!scActionList[cardName(card)]) scActionList[cardName(card)] = []
})
Object.values(scActionList).forEach((shortcut, index) => {
  const card = cardList[index]
  if (!card) return
  const actionText = card.querySelector('.card-desc').innerText
  shortcut.push({ action: scActionType.finish, data: {}, status: { percent: 100, description: actionText } })
})
function fireEvent(card) {
  const eventIndex = currentEvent[cardIndex(card)]
  const action = scActionList[cardName(card)][eventIndex]
  const actionEvent = new CustomEvent('runaction', {detail: action})
  currentEvent[cardIndex(card)]++
  card.dispatchEvent(actionEvent)
}
function run2 (card, event) {
  if (currentEvent[cardIndex(card)] !== 0) return;
  if (event.target === card.querySelector('.card-ind-idle')) return open(card);
  // Show the progress ring
  card.querySelector('.card-ind-active').style.opacity = '1'
  card.querySelector('.card-ind-idle').style.opacity = '0'
  // Get the assigned actions
  fireEvent(card)
}

// Info Card
const infoCard = document.querySelector('.info-card')
let activeCard = null
function scrollLock (e) {
  if (infoCard.contains(e.target)) return
  e.preventDefault()
}
function open (card) {
  if (activeCard) return
  activeCard = card
  const rect = card.getBoundingClientRect()
  infoCard.querySelector('.text-container > div').innerHTML = scDescriptions[cardName(card)]
  infoCard.style.setProperty('--x', (rect.x + rect.width / 2) + 'px')
  infoCard.style.setProperty('--y', (rect.y + rect.height / 2) + 'px')
  infoCard.style.display = 'block'
  card.style.visibility = 'hidden'
  infoCard.style.setProperty('--card-color', card.style.getPropertyValue('--card-color'))
  infoCard.querySelector('.card').innerHTML = card.innerHTML
  setTimeout(() => {
    document.body.style.overflow = 'hidden'
    document.body.addEventListener('touchmove', scrollLock)
    infoCard.classList.add('open')
  }, 20)
}
document.body.addEventListener('click', function (e) {
  if (!infoCard.classList.contains('open') || !activeCard) return
  infoCard.classList.remove('open')
  const rect = activeCard.getBoundingClientRect()
  infoCard.style.setProperty('--x', (rect.x + rect.width / 2) + 'px')
  infoCard.style.setProperty('--y', (rect.y + rect.height / 2) + 'px')
  setTimeout(() => {
    infoCard.style.display = 'none'
    if (activeCard) activeCard.style.visibility = ''
    activeCard = null
    document.body.style.overflow = ''
    document.body.removeEventListener('touchmove', scrollLock)
  }, 1250)
})

// Retrieve Versions and URLs from project-composer-info
XHR.requestExt('GET', '/hs-tools/get/project-composer-info.json', function (r) {
  let response = {}
  try {
    response = JSON.parse(r)
  } catch (e) {
    console.error(new Error('Unable to retrieve data'))
  }
  Object.keys(response.dependencies).forEach(key => {
    const data = response.dependencies[key]
    const commands = scActionList[key]
    if (!commands) return
    commands.forEach(command => {
      if (command.action === scActionType.openShortcut) command.data.path = data.icloud_path
    })
  })
})


// Animations and Scroll Reset
cardList.forEach(card => {
  const delay = (cardIndex(card) * 0.1 + 1.25)
  card.style.animationDelay = delay + 's'
  // card.style.animationDelay = delay - 2 + 's'
})
document.addEventListener('scroll', e => {
  let timeDiff = Date.now() - performance.timing.domContentLoadedEventEnd
  if (timeDiff < 200) window.scrollTo(0, 0)
}, {passive: true})

// Dark Mode
if (getPref('dark_mode')) scActionType.toggleTheme()
setTimeout(() => document.documentElement.style.setProperty('--time-trans', '1s'), 50);

// On iOS automatically default to shortcuts:// imports
const onIos = (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)||(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))
if (onIos) {
  const iToggleCard = cardList[14]
  iToggleCard.querySelector('.card-title').innerText = 'Use icloud.com links for imports'
  scActionType.toggleBaseUrl()
}
