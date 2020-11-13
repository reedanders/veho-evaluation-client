### Veho Evaluation App - Reed Anderson

This app is a submission for the Veho Evaluation. The requirements and wireframes for this app are based on the technical_project.pdf from James' email.

### Running the app

The boilerplate for this app was created with `create react app` and additionally uses the material-ui component library. 

Set up the app with the following:

```
git clone https://github.com/reedanders/veho-evaluation-client
cd veho-evaluation-client
npm install
```

The start the app locally, run the following:

```
npm start
```

### Overview of implementation
The conversation application is very similar in structure to a dashboard app. It has a fixed sidebar with links and a larger content area that updates based on which link is selected. Data is simulated and manipulated locally. 

### Limitations

There are a few items wanted to complete, but wanted to keep to your timeframe. I would finish these in another hour.

- [ ] User can create a new conversation.
- [ ] User can see full names or first and last initial.
- [ ] User can see others' icon next to chat bubbles.
- [ ] User receives help text if their chat input is not valid.
- [ ] User can see sticky bar (top) and text input (bottom) on content.
- [ ] React-router redirects for invalid url. (This is currently handled in useEffect and results in a missing dependency warning).
- [ ] Clean up with `yarn prettier`
