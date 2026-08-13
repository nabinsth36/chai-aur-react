function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('type', reactElement.props.type)
    domElement.setAttribute('commandfor', reactElement.props.commandfor)
    domElement.setAttribute('command', reactElement.props.command)
   
    container.appendChild(domElement)
    */
   
    const domElement = document.createElement(reactElement.type)
    domElement.textContent = reactElement.children
    for (const prop in reactElement.props){
        if (prop === 'children') continue;

        domElement.setAttribute(
            prop, 
            reactElement.props[prop]
        )
    }
    container.appendChild(domElement)
    
}

const reactElements = 
   [
        {
            type: 'button',
            props: {
                type: "button",
                commandfor: "mydialog",
                command: "show-modal"
            },
            children: "Open Dialog",
        },
        {
            type: 'dialog',
            props:{
                id: 'mydialog'
            },
            children: "Hello! This is my dialog.",
        },
        {
            type: "button",
            props:{
                type: "button",
                target:"_blank",
                onclick: "window.location.href='https://google.com'",
            },
            children: "Go to Google"
        }
    ]



const mainContainer = document.querySelector("#root")

reactElements.forEach(reactElement =>{
    customRender(reactElement, mainContainer)
})
