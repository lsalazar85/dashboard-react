# dashboard-app
Administrative board app developed with React.js & Typescript

## Technical details
- The project is developed with React.js and Typescript. 
- It is 100% multi-devices and all the UI is developed with styled components.
- To improve the development times of the main areas of the project, [Chart.js](https://www.chartjs.org/)
was implemented for the charts on the dashboard page.
- I developed a hook to get the exchange rates using this API [Fixer API](https://apilayer.com/marketplace/fixer-api), 
but the requests are limited, so I decided not to implement it in order not to break the functionalities of the converter.


## Future Improvements
- Develop and implement custom charts.
- Add unit tests with React Testing Library.
- Improve SideBar styles component in both versions (desktop and mobile).
- Add an API with more available requests to implement the useExchangeRate hook.
- Improve search function and details.

## Deployment app

https://dashboard-react-v1.vercel.app

## Run

```
    npm install
    npm run start
```

```
    yarn install
    yarn run start
```


Starts on `http://localhost:3000`

## Build

```
    npm run build
```

## Development technologies and external packages

- React.js
- Typescript
- React Router V6
- Redux Toolkit
- Styled components 
- Chart.js
- Framer Motion
- Eslint & Prettier
