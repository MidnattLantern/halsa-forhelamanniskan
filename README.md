# Hälsa För Hela Människan
[halsa-forhelamanniskan.se](http://halsa-forhelamanniskan.se/)

## Table of contents
- [About](#about)
- [Volunteers](#volunteers)
- [Codebase](#codebase)
- [Deployment](#deployment)

## About
Hälsa För Hela Människan is an initiative with the mission to spread lifestyle advice that may enhance your quality of life through educational articles or external resources. Some advice are influenced by the practices of the Seventh-day Adventist Church, while most content is universally relevant regardless of religious belief or lack thereof.

## Volunteers

### Who can contribute?
Hälsa För Hela Människan is an initiative of a community of the Seventh-day Adventist Church. Contributions are welcome from everyone, regardless of religious belief or lack thereof. Volunteers join for many reasons: some are motivated by faith, others by the chance to build their skills as web developers, or by a mix of both.
All contributors are treated with equal respect, and no particular belief or religious practice is required to participate. If you'd like to participate, send an email to [info@halsa-forhelamanniskan.se](info@halsa-forhelamanniskan.se).

### Web developer(s) & Designer(s)
- Alma Isaksson

### Content writer(s)
- Ellen Ljungberg
- Gabriel Stefan Kémenes

## Codebase
The codebase is built with React for Vite. Most code is written in TypeScript, and styling is modular with SASS. In order to contribute, you'll need a solid understanding with TypeScript and the React framework. If you're already familiar with CSS, SASS should be easy to pick up.

### Language(s)
While the content is written in Swedish, the codebase and its documentation is written in english. ´index.html´'s lang attribute must be set to `se` (Swedish).

### Routing
This project use hash-routing with the react-dom and react-router node packages. main.tsx wrapped the `<App/>` within the `<HashRouter>`, so this is univeral across every DOM within App.tsx. Routing are specified inside each page-component within the "pages" directory. Those consist of two parts: the page display, and the page export. The "page display" render the DOM content related to that page on that route level. The "page export" wrap the current route level (index) and its children. This is repeated across all pages, and a practice to follow even if said page does not intend to feature children.
```tsx
function DisplayPage() {
    return (
        <p>This is my page</p>
        <NavLink to="my-page-child-1">Go to my page 1<NavLink/>
        <NavLink to="my-page-child-2">Go to my page 2<NavLink/>
        <NavLink to="my-page-child-3">Go to my page 3<NavLink/>
    )
}

function MyPage() {
    return (
        <Routes>
            <Route index element={<DisplayPage/>}/>
            <Route path="my-page-child-1" element={<MyPageChild1/>}/>
            <Route path="my-page-child-2" element={<MyPageChild2/>}/>
            <Route path="my-page-child-3" element={<MyPageChild3/>}/>
        </Routes>
    )
}

export default MyPage
```

## Deployment
This project use the gh-pages node package, this allow manual deployment, meaning developers can push changes and wait for releases when the code is stable and ready for publicity. The package.json file contian the script "deploy" which compile the code for the branch "gh-pages". The branch "gh-pages" is automatically created when running the script for the first time.

When the codebase of the main branch is ready for publicity, run the following script in terminal:
```zsh
npm run deploy
```