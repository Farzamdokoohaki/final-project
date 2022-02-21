const App = (props) => {
    return React.createElement(
        "div",
        {},
        [
   

    React.createElement("h2",{},props.name),
    React.createElement("h3",{},props.realize_date),
    React.createElement("h4",{},props.director)
])

}
const renderText = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1",{id : "my-values"},"my films"),
            React.createElement(App,{name: "inception", realize_date:"2009", director:"nolan"}),
            React.createElement(App,{name: "inception", realize_date:"2009", director:"nolan"}),
            React.createElement(App,{name: "inception", realize_date:"2009", director:"nolan"})




 ReactDOM.render(React.createElement(App),document.getElementById('root'));